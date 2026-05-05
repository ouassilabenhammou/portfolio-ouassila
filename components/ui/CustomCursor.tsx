"use client";

import { useEffect, useRef } from "react";

function isFinePointerDesktop() {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia?.("(hover: hover) and (pointer: fine)")?.matches ?? false
  );
}

export default function CustomCursor() {
  const elRef = useRef<HTMLDivElement | null>(null);

  const target = useRef({ x: -100, y: -100 });
  const current = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    if (!isFinePointerDesktop()) return;

    const el = elRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    const onLeave = () => {
      target.current.x = -100;
      target.current.y = -100;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);

    const tick = () => {
      const dx = target.current.x - current.current.x;
      const dy = target.current.y - current.current.y;

      current.current.x += dx * 0.22;
      current.current.y += dy * 0.22;

      el.style.transform = `translate3d(${current.current.x - 9}px, ${current.current.y - 9}px, 0)`;
      rafId.current = window.requestAnimationFrame(tick);
    };

    rafId.current = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      if (rafId.current != null) window.cancelAnimationFrame(rafId.current);
    };
  }, []);

  return <div ref={elRef} className="custom-cursor" aria-hidden="true" />;
}
