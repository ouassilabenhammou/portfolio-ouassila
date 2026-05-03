"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { anton } from "@/app/fonts";

/** Zelfde breakpoint als Tailwind `md`: desktop gebruikt hover i.p.v. whileInView. */
const DESKTOP_MEDIA = "(min-width: 768px)";

type ProjectCardProps = {
  projectId: string;
  /** Welke kaart mag op mobiel de overlay tonen (max. één tegelijk). */
  activeProjectId: string | null;
  setCardEligible: (projectId: string, eligible: boolean, priority: number) => void;
  title: string;
  description: string;
  tags: string[];
  year: number;
  imageUrl: string;
  alt: string;
  /** Op mobiel: info pas tonen wanneer de kaart het midden van het scherm kruist. */
  revealWhenCentered?: boolean;
};

export default function ProjectCard({
  projectId,
  activeProjectId,
  setCardEligible,
  title,
  description,
  tags,
  year,
  imageUrl,
  alt,
  revealWhenCentered = false,
}: ProjectCardProps) {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_MEDIA);
    const sync = () => setIsDesktop(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  /* ── Eigen IntersectionObserver voor betrouwbare Safari-support ── */
  useEffect(() => {
    if (isDesktop) return;
    const el = cardRef.current;
    if (!el) return;

    const options: IntersectionObserverInit = revealWhenCentered
      ? {
          /* Effectief alleen het midden ~22% van de viewport als triggerzone */
          threshold: 0,
          rootMargin: "-39% 0px -39% 0px",
        }
      : { threshold: 0.12, rootMargin: "0px 0px -8% 0px" };

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      options,
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isDesktop, revealWhenCentered]);

  /* ── Scroll/touch detectie voor initial-load guard ── */
  useEffect(() => {
    if (isDesktop) return;

    const markScrolled = () => {
      setHasScrolled(true);
      window.removeEventListener("scroll", markScrolled);
      window.removeEventListener("touchmove", markScrolled);
    };

    window.addEventListener("scroll", markScrolled, { passive: true });
    window.addEventListener("touchmove", markScrolled, { passive: true });

    return () => {
      window.removeEventListener("scroll", markScrolled);
      window.removeEventListener("touchmove", markScrolled);
    };
  }, [isDesktop]);

  useEffect(() => {
    if (isDesktop) {
      setCardEligible(projectId, false, 0);
      return;
    }
    const eligible = isInView && hasScrolled;
    const priority = revealWhenCentered ? 1 : 0;
    setCardEligible(projectId, eligible, priority);
    return () => setCardEligible(projectId, false, 0);
  }, [
    isDesktop,
    isInView,
    hasScrolled,
    projectId,
    revealWhenCentered,
    setCardEligible,
  ]);

  const showInfo = activeProjectId === projectId;

  const overlayTransition = { duration: 0.5, ease: "easeOut" as const };
  const panelTransition = {
    duration: 0.55,
    ease: "easeOut" as const,
    delay: 0.14,
  };

  return (
    <div
      ref={cardRef}
      className="group relative mx-auto min-w-0 max-w-full w-fit"
    >
      <Image
        src={imageUrl}
        alt={alt}
        width={577}
        height={400}
        className="relative z-0 max-w-full rounded-[10px] md:rounded-[20px]"
      />

      {isDesktop ? (
        <>
          <div
            className="pointer-events-none absolute inset-0 z-10 rounded-[10px] md:rounded-[20px] bg-black/50 transition-opacity duration-500 ease-out opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100"
            aria-hidden
          />
          <div className="pointer-events-none absolute left-1/2 bottom-[15px] z-20 w-[550px] max-w-[calc(100%-30px)] h-[155px] -translate-x-1/2 rounded-[10px] bg-(--color-background) transition-all duration-500 ease-out translate-y-2 opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-within:translate-y-0 md:group-focus-within:opacity-100">
            <ProjectInfo
              title={title}
              description={description}
              tags={tags}
              year={year}
            />
          </div>
        </>
      ) : (
        <>
          <motion.div
            className="pointer-events-none absolute inset-0 z-10 rounded-[10px] bg-black/50"
            aria-hidden
            animate={{ opacity: showInfo ? 1 : 0 }}
            transition={overlayTransition}
          />
          <motion.div
            className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-[15px] z-20 w-[550px] max-w-[calc(100%-30px)] h-[155px] rounded-[10px] bg-(--color-background)"
            animate={{
              opacity: showInfo ? 1 : 0,
              y: showInfo ? 0 : 8,
            }}
            transition={panelTransition}
          >
            <ProjectInfo
              title={title}
              description={description}
              tags={tags}
              year={year}
            />
          </motion.div>
        </>
      )}
    </div>
  );
}

function ProjectInfo({
  title,
  description,
  tags,
  year,
}: Pick<ProjectCardProps, "title" | "description" | "tags" | "year">) {
  return (
    <div className="flex h-full w-full flex-col gap-3 px-5 py-4">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
        <h3
          className={`${anton.className} max-w-full wrap-break-word leading-[1.1] uppercase text-[18px] md:text-[20px] text-(--color-primary)`}
        >
          {title}
        </h3>
        <span className="shrink-0 text-(--color-muted-text)">{year}</span>
      </div>
      <p className="max-w-full wrap-break-word leading-[1.2] md:leading-normal text-(--color-secondary) text-[14px] md:text-[16px]">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 min-w-0">
        {tags.map((tag) => (
          <span
            key={tag}
            className="py-0.5 px-3 border border-(--color-secondary) rounded-[5px] text-(--color-secondary) text-[12px] md:text-[14px]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
