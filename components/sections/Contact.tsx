import React from "react";

import SectieTitel, { sectionFullBleedBackground } from "../ui/SectieTitel";
import ActionButton from "../ui/ActionButton";
export default function Contact() {
  return (
    <section
      id="contact"
      className={`${sectionFullBleedBackground} before:bg-(--color-background) before:rounded-b-[60px] md:before:rounded-b-[85px] relative z-10 scroll-mt-28`}
    >
      <div className="relative z-0 flex w-full min-w-0 flex-col items-center overflow-hidden rounded-b-[85px]">
        <SectieTitel
          title="Laten we samen iets moois maken"
          subtitle="Beschikbaar voor afstudeerstage"
        />
        <a href="mailto:ouassila_01@outlook.com">
          <div className="md:mt-5">
            <ActionButton />
          </div>
        </a>
      </div>
    </section>
  );
}
