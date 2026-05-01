import React from "react";
import HandIcon from "@/public/icons/hand.svg";
import StudentCapIcon from "@/public/icons/student-cap.svg";
import DevelopIcon from "@/public/icons/develop.svg";
import LampIcon from "@/public/icons/lamp.svg";

export default function OverMij() {
  return (
    <section>
      HI{" "}
      <HandIcon
        aria-hidden
        focusable="false"
        className="inline-block align-middle mx-1 text-[#FF8FAB] [--icon-fill:#FFFDF5]"
      />
      Ik ben Ouassila een Associate Degree student{" "}
      <StudentCapIcon
        aria-hidden
        focusable="false"
        className="inline-block align-middle mx-1 text-[#6BC5D2]"
      />
      ICT met een achtergrond in Media Design. Momenteel verdiep ik me in
      Front-end Development{" "}
      <DevelopIcon
        aria-hidden
        focusable="false"
        className="inline-block align-middle mx-1 text-[#4CAF78]"
      />{" "}
      en werk ik graag aan creatieve{" "}
      <LampIcon
        aria-hidden
        focusable="false"
        className="inline-block align-middle mx-1 text-[#FFD166]"
      />
      concepten die uitgroeien tot sterke digitale oplossingen.
    </section>
  );
}
