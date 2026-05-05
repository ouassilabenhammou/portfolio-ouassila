import type { Metadata } from "next";
import { sectionFullBleedBackground } from "@/components/ui/SectieTitel";
import SectieTitel from "@/components/ui/SectieTitel";

const VIDEO_PATH = "/videos/" + encodeURIComponent("Ouassila-movie (1).mp4");

export const metadata: Metadata = {
  title: "Generative AI — video",
  description:
    "3D-scène als experimenteel project: AI, 3D-modellering en animatie.",
};

export default function GenerativeAiVideoPage() {
  return (
    <main className="min-h-screen mt-50 md:mt-30 lg:mt-40">
      <section
        className={`${sectionFullBleedBackground} before:bg-(--color-background) before:rounded-b-[60px] md:before:rounded-b-[85px] relative z-10 flex flex-col justify-start`}
      >
        <div className="flex flex-col items-center justify-center">
          <div className="relative z-0 flex min-h-0 w-full min-w-0 flex-1 flex-col overflow-hidden rounded-b-[60px] md:rounded-b-[85px]">
            <SectieTitel
              title="Generative AI"
              subtitle="Video credits: Pieter Dorst"
            />
          </div>
          <video
            className="mx-auto h-auto w-full max-w-full rounded-[10px] md:max-w-5xl md:rounded-[20px] lg:max-w-3xl xl:max-w-10xl mt-10  lg:mt-20"
            controls
            playsInline
            preload="metadata"
            aria-label="Generative AI projectvideo"
          >
            <source src={VIDEO_PATH} type="video/mp4" />
          </video>
        </div>
      </section>
    </main>
  );
}
