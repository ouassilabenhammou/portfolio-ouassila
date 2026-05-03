"use client";

import BloemIcon from "@/public/icons/bloem.svg";
import { useCallback, useEffect, useId, useState } from "react";

const NAV: { id: string; label: string; href: string }[] = [
  { id: "over-mij", label: "Over mij", href: "#over-mij" },
  { id: "projecten", label: "Projecten", href: "#projecten" },
  { id: "even-offline", label: "Even offline", href: "#even-offline" },
  { id: "contact", label: "Contact", href: "#contact" },
];

function MenuLinesIcon() {
  return (
    <span className="flex flex-col gap-[5px]" aria-hidden>
      <span className="h-0.5 w-[18px] shrink-0 rounded-full bg-(--color-primary)" />
      <span className="h-0.5 w-[18px] shrink-0 rounded-full bg-(--color-primary)" />
    </span>
  );
}

function CloseIcon() {
  return (
    <span className="relative size-[18px] shrink-0" aria-hidden>
      <span className="absolute left-1/2 top-1/2 h-0.5 w-[14px] -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full bg-(--color-primary)" />
      <span className="absolute left-1/2 top-1/2 h-0.5 w-[14px] -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full bg-(--color-primary)" />
    </span>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("over-mij");
  const panelId = useId();

  useEffect(() => {
    const ids = NAV.map((item) => item.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter((e) => e.isIntersecting);
        if (intersecting.length === 0) return;
        const top = intersecting.reduce((best, e) =>
          e.intersectionRatio > best.intersectionRatio ? e : best,
        );
        const id = top.target.getAttribute("id");
        if (id) setActiveId(id);
      },
      { root: null, rootMargin: "-18% 0px -40% 0px", threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] },
    );

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-2 z-50 max-md:px-4 md:top-5 md:px-8 min-[1440px]:px-(--layout-margin-desktop-inline)">
      <div className="pointer-events-auto mx-auto flex w-full max-w-[min(100%,1200px)] flex-col gap-2">
        <div className="flex items-center justify-between gap-4 rounded-full border border-(--color-primary) bg-white py-2.5 pl-5 pr-1.5 md:pl-7 md:pr-2">
          <button
            type="button"
            className="flex min-h-11 min-w-0 shrink items-center gap-2.5 text-[15px] font-medium tracking-tight text-(--color-primary) md:text-base"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuLinesIcon />}
            Menu
          </button>
          <a
            href="#contact"
            onClick={close}
            className="shrink-0 rounded-full bg-(--color-primary) px-6 py-2.5 text-[15px] font-medium tracking-tight text-white md:px-7 md:py-3 md:text-base"
          >
            Contact
          </a>
        </div>

        {open ? (
          <nav
            id={panelId}
            aria-label="Hoofdnavigatie"
            className="flex flex-col rounded-[20px] border border-(--color-primary) bg-(--color-background) px-5 pb-2 pt-6 shadow-sm md:px-7 md:pt-8"
          >
            <div className="mb-6 flex justify-center text-(--color-primary) [&>svg]:size-14 md:[&>svg]:size-17">
              <BloemIcon aria-hidden focusable="false" />
            </div>
            <ul className="flex flex-col">
              {NAV.map((item, index) => {
                const active = activeId === item.id;
                return (
                  <li key={item.id}>
                    {index > 0 ? (
                      <div
                        className="h-px w-full bg-(--color-primary) opacity-90"
                        aria-hidden
                      />
                    ) : null}
                    <a
                      href={item.href}
                      onClick={close}
                      className={[
                        "block py-4 text-[17px] leading-none md:py-5 md:text-lg",
                        active
                          ? "font-bold text-(--color-primary)"
                          : "font-normal text-(--color-muted-text)",
                      ].join(" ")}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
