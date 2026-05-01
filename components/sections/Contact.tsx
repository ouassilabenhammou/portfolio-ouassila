import React from "react";
import SectieTitel from "../ui/SectieTitel";
import ActionButton from "../ui/ActionButton";
import ArrowButtonIcon from "@/public/icons/arrow-button.svg";
export default function Contact() {
  return (
    <section>
      <SectieTitel
        title="Laten we samen iets moois maken"
        subtitle="Beschikbaar voor afstudeerstage"
      />
      <ActionButton
        Icon={ArrowButtonIcon}
        iconClassName="text-(--color-primary)"
      />
    </section>
  );
}
