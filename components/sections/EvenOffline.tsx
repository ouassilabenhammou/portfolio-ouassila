import React from "react";
import SectieTitel from "../ui/SectieTitel";
import OfflineItem from "../ui/OfflineItem";

const items = [
  {
    title: "Voetballen",
    image: "/images/offline/voetballen.png",
  },
  {
    title: "Tekenen/schilderen",
    image: "/images/offline/tekenen-schilderen.png",
  },
  {
    title: "Wandelen",
    image: "/images/offline/wandelen.png",
  },
  {
    title: "Film/serie kijken",
    image: "/images/offline/film-serie.png",
  },
];

export default function EvenOffline() {
  return (
    <section>
      <SectieTitel
        title="Even Offline"
        subtitle="Als ik even offline ben, ben ik waarschijnlijk..."
      />

      <div className="mt-10 flex flex-col gap-5 md:mt-20 ">
        {items.map((item, index) => (
          <OfflineItem
            key={item.title}
            title={item.title}
            image={item.image}
            imageSide={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </section>
  );
}
