import React from "react";
import SectieTitel from "../ui/SectieTitel";
import ActionButton from "../ui/ActionButton";
export default function Contact() {
  return (
    <section>
      <SectieTitel
        title="Laten we samen iets moois maken"
        subtitle="Beschikbaar voor afstudeerstage"
      />
      <ActionButton imageSrc="/icons/arrow-button.svg" />
    </section>
  );
}
