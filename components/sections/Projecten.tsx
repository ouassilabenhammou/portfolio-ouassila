import SectieTitel from "../ui/SectieTitel";
import ProjectCard from "../ui/ProjectCard";

export default function Projecten() {
  return (
    <section className="mb-40">
      <SectieTitel title="Mijn Werk" subtitle="Geselecteerde projecten" />
      <div className="mt-8 grid grid-cols-1 gap-8 md:mt-20 md:grid-cols-2">
        <ProjectCard
          title="Interactief contactformulier"
          description="Interactieve contactervaring ontworpen voor LiveWall, waarbij een traditioneel formulier is omgezet naar een gamified user experience."
          tags={["Next.js", "Tailwind CSS", "Three.js"]}
          year={2026}
          imageUrl="/images/projecten/livewall-gameshow.png"
          alt="livewall-gameshow"
        />
        <ProjectCard
          title="Css art"
          description="CSS art visuals uitgewerkt als experimenteel project, gericht op het verkennen van de creatieve mogelijkheden van code."
          tags={["Svelte"]}
          year={2025}
          imageUrl="/images/projecten/css-art.png"
          alt="css-art"
        />
        <ProjectCard
          title="KNMI App landingpage"
          description="Promotionele website ontwikkeld voor de open-source KNMI-app (2ManyDots), gericht op meer bekendheid en downloads."
          tags={["Next.js", "Tailwind CSS"]}
          year={2025}
          imageUrl="/images/projecten/knmi-landingpage.png"
          alt="knmi-app landingpage"
        />

        <ProjectCard
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
