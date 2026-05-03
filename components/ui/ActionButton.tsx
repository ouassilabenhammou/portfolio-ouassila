"use client";

import ArrowButtonIcon from "@/public/icons/arrow-button.svg";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import type { ComponentType, SVGProps } from "react";
import { useCallback, useRef } from "react";

const CIRCLE_PX = 185;
const MAX_OFFSET = 14;
const STRENGTH = 0.14;

type ActionButtonProps = {
  Icon?: ComponentType<SVGProps<SVGSVGElement>>;
  iconClassName?: string;
};

export default function ActionButton({
  Icon = ArrowButtonIcon,
  iconClassName,
}: ActionButtonProps) {
  const zoneRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const spring = reduceMotion
    ? { stiffness: 800, damping: 80, mass: 0.05 }
    : { stiffness: 220, damping: 24, mass: 0.12 };
  const x = useSpring(rawX, spring);
  const y = useSpring(rawY, spring);

  const clamp = (n: number) => Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, n));

  const handleMove = useCallback(
    (e: React.MouseEvent) => {
      const el = zoneRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      rawX.set(clamp((e.clientX - cx) * STRENGTH));
      rawY.set(clamp((e.clientY - cy) * STRENGTH));
    },
    [rawX, rawY],
  );

  const handleLeave = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
  }, [rawX, rawY]);

  return (
    <div
      ref={zoneRef}
      className="relative inline-flex touch-none items-center justify-center p-14"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <motion.div
        className="group relative flex items-center justify-center overflow-hidden rounded-full border-4 border-(--color-primary) bg-(--color-background)"
        style={{ width: CIRCLE_PX, height: CIRCLE_PX, x, y }}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-(--color-primary) [clip-path:inset(100%_0_0_0)] transition-[clip-path] duration-500 ease-out motion-reduce:duration-75 group-hover:[clip-path:inset(0_0_0_0)]"
        />
        <Icon
          aria-hidden
          focusable="false"
          className={[
            "relative z-10 text-(--color-primary) transition-colors duration-300 ease-out group-hover:text-(--color-background)",
            iconClassName,
          ]
            .filter(Boolean)
            .join(" ")}
        />
      </motion.div>
    </div>
  );
}
