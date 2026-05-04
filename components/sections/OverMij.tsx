import HandIcon from "@/public/icons/hand.svg";

import { sectionFullBleedBackground } from "../ui/SectieTitel";
import StudentCapIcon from "@/public/icons/student-cap.svg";
import DevelopIcon from "@/public/icons/develop.svg";
import LampIcon from "@/public/icons/lamp.svg";

import { anton } from "@/app/fonts";

const iconClass = "size-8 shrink-0 overflow-visible self-center lg:size-12";
/** Desktop: mag wrappen bij brede viewport */
const flexClassDesktop =
  "flex w-full max-w-full flex-wrap justify-center items-center content-center text-center gap-x-2 gap-y-2";
/** Mobiel: binnen het 4-koloms raster; woorden wrappen, iconen blijven bij hun zin via flex-wrap. */
const mobileIconRowClass =
  "flex w-full min-w-0 max-w-full flex-wrap justify-center items-center gap-x-2 gap-y-2 text-center wrap-break-word";

const mobilePlainLineClass =
  "w-full min-w-0 max-w-full wrap-break-word text-center";

export default function OverMij() {
  return (
    <section
      id="over-mij"
      aria-labelledby="over-mij-heading"
      className={`${sectionFullBleedBackground} before:bg-(--color-background) scroll-mt-28 ${anton.className} my-12 flex min-h-[min(85dvh,880px)] w-full min-w-0 max-w-full flex-col items-center justify-center py-10 text-center text-[26px] uppercase leading-[1.1] text-(--color-secondary) max-md:my-16 max-md:min-h-[75dvh] max-md:px-0 md:my-20 md:px-4 md:py-14 min-[1440px]:px-0 lg:text-[45px]`}
    >
      <div className="flex w-full min-w-0 max-w-full flex-col items-center gap-5">
        {/* Mobiel — tot lg (tablet / brede phones): zelfde uppercase als sectie */}
        <div className="flex w-full min-w-0 max-w-full flex-col items-center gap-4 lg:hidden">
          <p className={mobileIconRowClass}>
            <span>hi</span>
            <HandIcon
              aria-hidden
              focusable="false"
              className={`${iconClass} text-[#FF8FAB] [--icon-fill:#FFFDF5]`}
            />
            <span>ik ben ouassila</span>
          </p>
          <p className={mobileIconRowClass}>
            <span>een associate degree student</span>
            <StudentCapIcon
              aria-hidden
              focusable="false"
              className={`${iconClass} text-[#6BC5D2]`}
            />
            <span>ict</span>
          </p>
          <p className={mobilePlainLineClass}>
            met een achtergrond in media design.
          </p>
          <p className={mobilePlainLineClass}>momenteel verdiep ik me in</p>
          <p className={mobileIconRowClass}>
            <span>front-end development</span>
            <DevelopIcon
              aria-hidden
              focusable="false"
              className={`${iconClass} text-[#4CAF78]`}
            />
            <span>en werk</span>
          </p>
          <p className={mobileIconRowClass}>
            <span>ik graag aan creatieve concepten</span>
            <LampIcon
              aria-hidden
              focusable="false"
              className={`${iconClass}  text-[#FFD166]`}
            />
          </p>
          <div className="flex w-full min-w-0 max-w-full flex-col items-center gap-4 text-center">
            <p className={mobilePlainLineClass}>
              die uitgroeien tot sterke digitale
            </p>
            <p className={mobilePlainLineClass}>oplossingen</p>
          </div>
        </div>

        {/* Desktop — vanaf lg */}
        <div className="hidden w-full min-w-0 max-w-full flex-col items-center gap-5 lg:flex">
          {/* 1e regel */}
          <div className={flexClassDesktop}>
            <p>HI</p>
            <HandIcon
              aria-hidden
              focusable="false"
              className={`${iconClass} text-[#FF8FAB] [--icon-fill:#FFFDF5]`}
            />
            <p>Ik ben Ouassila</p>
          </div>

          {/* 2e regel */}
          <div className="flex flex-col items-center text-center">
            <p className={flexClassDesktop}>
              een Associate Degree student
              <StudentCapIcon
                aria-hidden
                focusable="false"
                className={`${iconClass} text-[#6BC5D2]`}
              />
              ICT met een achtergrond in
            </p>
          </div>
          <div>
            <p>Media Design. Momenteel verdiep ik me in </p>
          </div>

          {/* 4e regel */}
          <div>
            <p className={flexClassDesktop}>
              Front-end Development
              <DevelopIcon
                aria-hidden
                focusable="false"
                className={`${iconClass} text-[#4CAF78]`}
              />
              en werk ik graag aan creatieve
            </p>
          </div>
          {/* 5e regel */}
          <div className={flexClassDesktop}>
            concepten
            <LampIcon
              aria-hidden
              focusable="false"
              className={`${iconClass} mx-1 text-[#FFD166]`}
            />
            die uitgroeien tot sterke digitale oplossingen.
          </div>
        </div>
      </div>
    </section>
  );
}
