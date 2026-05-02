import HandIcon from "@/public/icons/hand.svg";
import StudentCapIcon from "@/public/icons/student-cap.svg";
import DevelopIcon from "@/public/icons/develop.svg";
import LampIcon from "@/public/icons/lamp.svg";

import { anton } from "@/app/fonts";

export default function OverMij() {
  return (
    <section
      className={`${anton.className} flex flex-col items-center text-center uppercase xs:text-[28px] md:text-[45px] leading-[1.1] text-(--color-secondary) `}
    >
      <div>
        {/* 1e regel */}
        <div className="flex justify-center items-center text-center gap-2">
          <p>HI</p>
          <HandIcon
            aria-hidden
            focusable="false"
            className="inline-block align-middle text-[#FF8FAB] [--icon-fill:#FFFDF5]"
          />
          <p>Ik ben Ouassila</p>
        </div>

        {/* 2e regel */}
        <div className="flex flex-col items-center text-center">
          <p>
            een Associate Degree student
            <StudentCapIcon
              aria-hidden
              focusable="false"
              className="inline-block align-middle  text-[#6BC5D2]"
            />
            ICT met een achtergrond in
          </p>
        </div>
        <div>
          <p>Media Design. Momenteel verdiep ik me in </p>
        </div>

        {/* 4e regel */}
        <div>
          <p>
            Front-end Development
            <DevelopIcon
              aria-hidden
              focusable="false"
              className="inline-block align-middle  text-[#4CAF78] "
            />
            en werk ik graag aan creatieve
          </p>
        </div>
        {/* 5e regel */}
        <div>
          concepten
          <LampIcon
            aria-hidden
            focusable="false"
            className="inline-block align-middle mx-1 text-[#FFD166]"
          />
          die uitgroeien tot sterke digitale oplossingen.
        </div>
      </div>
    </section>
  );
}
