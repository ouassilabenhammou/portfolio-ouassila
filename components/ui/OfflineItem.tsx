import type { CSSProperties } from "react";
import Image from "next/image";
import { anton } from "@/app/fonts";

type Props = {
  title: string;
  image: string;
  /** Desktop hover: afbeelding naast de titel; `left` = links van de tekst. */
  imageSide: "left" | "right";
  /** Z-index van het hele item (voor overlap met buren bij hover-afbeelding). */
  stackingZIndex?: number;
  /** Extra verticale offset van de desktop-hoverafbeelding (px; positief omlaag, negatief omhoog). */
  desktopImageYNudgePx?: number;
  /** Extra horizontale offset (px); bij afbeelding rechts vaak negatief om richting ‘schilderen’ te schuiven. */
  desktopImageXNudgePx?: number;
};

function RollingHeading({ text }: { text: string }) {
  return (
    <>
      {Array.from(text).map((char, i) => {
        const display = char === " " ? "\u00a0" : char;
        return (
          <span
            key={`${i}-${char}`}
            className="offline-roll-char"
            style={
              {
                "--roll-delay": `${i * 0.038}s`,
              } as CSSProperties
            }
          >
            <span className="offline-roll-inner">
              <span className="offline-roll-line text-(--color-secondary)">
                {display}
              </span>
              <span className="offline-roll-line text-(--color-primary)">
                {display}
              </span>
            </span>
          </span>
        );
      })}
    </>
  );
}

const desktopImageSideClass: Record<Props["imageSide"], string> = {
  left: "right-[calc(100%+0.75rem)] origin-right",
  right: "left-[calc(100%+0.75rem)] origin-left",
};

export default function OfflineItem({
  title,
  image,
  imageSide,
  stackingZIndex,
  desktopImageYNudgePx,
  desktopImageXNudgePx,
}: Props) {
  const imageCssVars =
    desktopImageYNudgePx != null || desktopImageXNudgePx != null
      ? ({
          ...(desktopImageYNudgePx != null && {
            "--offline-img-y-nudge": `${desktopImageYNudgePx}px`,
          }),
          ...(desktopImageXNudgePx != null && {
            "--offline-img-x-nudge": `${desktopImageXNudgePx}px`,
          }),
        } as CSSProperties)
      : undefined;

  return (
    <div
      className="offline-item-group relative flex min-w-0 max-w-full flex-col items-center justify-center gap-4"
      style={stackingZIndex != null ? { zIndex: stackingZIndex } : undefined}
    >
      <div className="relative flex min-w-0 flex-col items-center gap-4">
        <div className="relative inline-block max-w-full">
          <Image
            src={image}
            alt=""
            width={250}
            height={250}
            aria-hidden
            style={imageCssVars}
            className={`offline-item-desktop-image offline-item-desktop-image--tilt-${imageSide} pointer-events-none absolute top-1/2 z-0 hidden h-[200px] w-[200px] rounded-[10px] shadow-lg md:block ${desktopImageSideClass[imageSide]}`}
          />

          <h1
            className={`offline-title-hover ${anton.className} relative z-10 inline-flex max-w-full cursor-default flex-wrap justify-center text-center text-[50px] uppercase wrap-break-word leading-none md:text-[80px]`}
          >
            <RollingHeading text={title} />
          </h1>
        </div>

        <Image
          src={image}
          alt={title}
          width={250}
          height={250}
          className="relative z-10 rounded-[10px] md:hidden"
        />
      </div>
    </div>
  );
}
