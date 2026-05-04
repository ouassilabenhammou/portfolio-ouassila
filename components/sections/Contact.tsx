import React from "react";
import SectieTitel from "../ui/SectieTitel";
import ActionButton from "../ui/ActionButton";
export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 flex scroll-mt-28 flex-col items-center overflow-hidden rounded-b-[60px] bg-(--color-background) md:rounded-b-[85px]"
    >
      <SectieTitel
        title="Laten we samen iets moois maken"
        subtitle="Beschikbaar voor afstudeerstage"
      />
      <a href="mailto:ouassila_01@outlook.com">
        <div className="md:mt-5">
          <ActionButton />
        </div>
      </a>
    </section>
  );
}
