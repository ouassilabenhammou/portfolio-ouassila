import React from "react";

import SectieTitel, { sectionFullBleedBackground } from "../ui/SectieTitel";
import ActionButton from "../ui/ActionButton";
export default function Contact() {
  return (
    <section
      id="contact"
      className={`${sectionFullBleedBackground} before:bg-(--color-background) before:rounded-b-[60px] md:before:rounded-b-[85px] relative z-10 flex min-h-[clamp(22rem,72dvh,780px)] flex-col `}
    >
      <div className="relative z-0 flex min-h-0 w-full min-w-0 flex-1 flex-col items-center justify-center overflow-hidden rounded-b-[60px] md:rounded-b-[85px]">
        <div className="mt-28">
          <SectieTitel
            title="Laten we samen iets moois maken"
            subtitle="Beschikbaar voor afstudeerstage"
          />
        </div>
        <a href="mailto:ouassila_01@outlook.com">
          <div className="md:mt-5 mb-30">
            <ActionButton />
          </div>
        </a>
      </div>
    </section>
  );
}
