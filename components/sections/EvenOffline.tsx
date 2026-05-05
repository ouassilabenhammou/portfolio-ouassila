import React from "react";

import SectieTitel, { sectionFullBleedBackground } from "../ui/SectieTitel";
import OfflineItem from "../ui/OfflineItem";

type OfflineEntry = {
  title: string;
  image: string;
  stackingZIndex: number;
  /** Desktop-hoverafbeelding verticaal (px); positief = naar beneden, negatief = naar boven. */
  desktopImageYNudgePx?: number;
  /** Horizontale fijnstelling (px); Tekenen/schilderen: iets naar links onder dat woord. */
  desktopImageXNudgePx?: number;
};

const items: OfflineEntry[] = [
  {
    title: "Voetballen",
    image: "/images/offline/voetballen.png",
    stackingZIndex: 10,
  },
  {
    title: "Tekenen/schilderen",
    image: "/images/offline/tekenen-schilderen.png",
    stackingZIndex: 10,
    desktopImageYNudgePx: -50,
    desktopImageXNudgePx: -22,
  },
  {
    title: "Wandelen",
    image: "/images/offline/wandelen.png",
    stackingZIndex: 20,
  },
  {
    title: "Film/serie kijken",
    image: "/images/offline/film-serie.png",
    stackingZIndex: 30,
  },
];

export default function EvenOffline() {
  return (
    <section
      id="even-offline"
      className={`${sectionFullBleedBackground} before:bg-(--color-background) scroll-mt-28 flex min-h-screen flex-col items-center justify-center`}
    >
      <SectieTitel
        title="Even Offline"
        subtitle="Als ik even offline ben, ben ik waarschijnlijk..."
      />

      <div className="mt-10 flex flex-col gap-10 md:mt-20 ">
        {items.map((item, index) => (
          <OfflineItem
            key={item.title}
            title={item.title}
            image={item.image}
            imageSide={index % 2 === 0 ? "left" : "right"}
            stackingZIndex={item.stackingZIndex}
            desktopImageYNudgePx={item.desktopImageYNudgePx}
            desktopImageXNudgePx={item.desktopImageXNudgePx}
          />
        ))}
      </div>
    </section>
  );
}
