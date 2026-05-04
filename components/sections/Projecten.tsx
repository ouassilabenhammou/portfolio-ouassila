"use client";

import { useCallback, useMemo, useState } from "react";
import SectieTitel, { sectionFullBleedBackground } from "../ui/SectieTitel";
import ProjectCard from "../ui/ProjectCard";

/** Vaste volgorde: bij gelijke prioriteit wint de eerst in de lijst gemelde eligible kaart. */
const PROJECT_ORDER = ["livewall", "css-art", "knmi", "generative-ai"] as const;

export default function Projecten() {
  /** Kaart is eligible op mobiel; waarde = prioriteit (hoger wint o.a. `revealWhenCentered`). */
  const [eligibleMap, setEligibleMap] = useState<Record<string, number>>({});

  const setCardEligible = useCallback(
    (id: string, eligible: boolean, priority: number) => {
      setEligibleMap((prev) => {
        if (!eligible) {
          if (!(id in prev)) return prev;
          const { [id]: _, ...rest } = prev;
          return rest;
        }
        return { ...prev, [id]: priority };
      });
    },
    [],
  );

  const activeProjectId = useMemo(() => {
    const candidates = PROJECT_ORDER.filter((id) => id in eligibleMap);
    if (candidates.length === 0) return null;
    candidates.sort((a, b) => {
      const pa = eligibleMap[a]!;
      const pb = eligibleMap[b]!;
      if (pb !== pa) return pb - pa;
      return PROJECT_ORDER.indexOf(a) - PROJECT_ORDER.indexOf(b);
    });
    return candidates[0];
  }, [eligibleMap]);

  return (
    <section
      id="projecten"
      className={`${sectionFullBleedBackground} before:bg-(--color-background) scroll-mt-28 mb-40`}
    >
      <SectieTitel title="Mijn Werk" subtitle="Geselecteerde projecten" />
      <div className="mt-8 grid grid-cols-1 gap-8 md:mt-20 md:grid-cols-2">
        <ProjectCard
          projectId="livewall"
          activeProjectId={activeProjectId}
          setCardEligible={setCardEligible}
          title="Interactief contactformulier"
          description="Interactieve contactervaring ontworpen voor LiveWall, waarbij een traditioneel formulier is omgezet naar een gamified user experience."
          tags={["Next.js", "Tailwind CSS", "Three.js"]}
          year={2026}
          imageUrl="/images/projecten/livewall-gameshow.png"
          alt="livewall-gameshow"
        />
        <ProjectCard
          projectId="css-art"
          activeProjectId={activeProjectId}
          setCardEligible={setCardEligible}
          title="Css art"
          description="CSS art visuals uitgewerkt als experimenteel project, gericht op het verkennen van de creatieve mogelijkheden van code."
          tags={["Svelte"]}
          year={2025}
          imageUrl="/images/projecten/css-art.png"
          alt="css-art"
          revealWhenCentered
        />
        <ProjectCard
          projectId="knmi"
          activeProjectId={activeProjectId}
          setCardEligible={setCardEligible}
          title="KNMI App landingpage"
          description="Promotionele website ontwikkeld voor de open-source KNMI-app (2ManyDots), gericht op meer bekendheid en downloads."
          tags={["Next.js", "Tailwind CSS"]}
          year={2025}
          imageUrl="/images/projecten/knmi-landingpage.png"
          alt="knmi-app landingpage"
        />

        <ProjectCard
          projectId="generative-ai"
          activeProjectId={activeProjectId}
          setCardEligible={setCardEligible}
          title="Generative AI"
          description="3D-scène gemaakt als experimenteel project, gericht op het verkennen van AI en 3D-modellering en animatie."
          tags={["AI Tools", "3D Modeling", "Blender"]}
          year={2024}
          imageUrl="/images/projecten/generative-ai.png"
          alt="generative-ai"
        />
      </div>
    </section>
  );
}
