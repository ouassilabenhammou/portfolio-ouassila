"use client";

import FastMarquee from "react-fast-marquee";

import { sectionFullBleedBackground } from "@/components/ui/SectieTitel";
import { anton } from "@/app/fonts";

export default function Marquee() {
  return (
    <section
      aria-label="Scrollende oproep: laten we praten"
      className={`${sectionFullBleedBackground} pointer-events-none mt-40 mb-40 before:bg-(--color-primary) relative left-1/2 w-screen max-w-[100vw] min-w-0 shrink-0 -translate-x-1/2 overflow-x-hidden overflow-y-visible overscroll-y-auto h-[135px] md:h-[clamp(7.5rem,10vw+5rem,13.75rem)]`}
    >
      <FastMarquee
        autoFill
        speed={45}
        pauseOnHover={false}
        pauseOnClick={false}
        style={{
          overflow: "hidden",
          overscrollBehaviorY: "auto",
          overscrollBehaviorX: "auto",
        }}
        className={`marquee-always-run ${anton.className} h-full min-h-0 overflow-hidden bg-(--color-primary) uppercase [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [&_.rfm-marquee]:flex [&_.rfm-marquee]:items-center `}
      >
        {Array.from({ length: 10 }).map((_, i) => {
          const filled = i % 2 === 0;
          return (
            <span
              key={i}
              className={
                "inline-flex shrink-0 items-center pr-[45px] text-[80px] leading-none md:text-[150px] " +
                (filled
                  ? "text-(--color-background)"
                  : "text-transparent [-webkit-text-fill-color:var(--color-primary)] [paint-order:stroke_fill] [-webkit-text-stroke:2px_var(--color-background)] md:[-webkit-text-stroke:3px_var(--color-background)]")
              }
            >
              {"let's talk"}
            </span>
          );
        })}
      </FastMarquee>
    </section>
  );
}
