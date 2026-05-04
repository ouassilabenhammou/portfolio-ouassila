"use client";

import { useReducedMotion } from "framer-motion";
import type { CSSProperties } from "react";

/** Houd in sync met `public/icons/hamburger-menu.svg`. */
const PATH_LOWER =
  "M30 20.875C30 21.4963 29.6162 22 29.1429 22H6.85714C6.38379 22 6 21.4963 6 20.875C6 20.2537 6.38379 19.75 6.85714 19.75H29.1429C29.6162 19.75 30 20.2537 30 20.875Z";
const PATH_UPPER =
  "M6.85714 15.25H29.1429C29.6162 15.25 30 14.7463 30 14.125C30 13.5037 29.6162 13 29.1429 13H6.85714C6.38379 13 6 13.5037 6 14.125C6 14.7463 6.38379 15.25 6.85714 15.25Z";

/** Balk-midden (y) uit de path-bounding box; x-midden = 18. Kruis in (18, 18). */
const CX = 18;
const CY_LOWER = (19.75 + 22) / 2;
const CY_UPPER = (13 + 15.25) / 2;
const CY_CROSS = 18;

type MenuIconProps = {
  open: boolean;
};

export default function MenuIcon({ open }: MenuIconProps) {
  const reduceMotion = useReducedMotion();
  const transition = reduceMotion
    ? "transform 0.1s linear"
    : "transform 0.42s cubic-bezier(0.4, 0, 0.2, 1)";

  /**
   * Dicht: `translate(cx,cy)` heft `translate(-cx,-cy)` op → identiteit.
   * Open: eerst balkcentrum naar oorsprong, roteren, dan centrum naar het kruispunt (cx, cyCross).
   */
  const barStyle = (cy: number, degrees: number): CSSProperties => {
    const ty = open ? CY_CROSS : cy;
    return {
      transition,
      transform: `translate(${CX}px, ${ty}px) rotate(${degrees}deg) translate(-${CX}px, -${cy}px)`,
    };
  };

  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="size-7 shrink-0 overflow-visible text-(--color-primary)"
      aria-hidden
    >
      <g style={barStyle(CY_LOWER, open ? 45 : 0)}>
        <path d={PATH_LOWER} fill="currentColor" />
      </g>
      <g style={barStyle(CY_UPPER, open ? -45 : 0)}>
        <path d={PATH_UPPER} fill="currentColor" />
      </g>
    </svg>
  );
}
