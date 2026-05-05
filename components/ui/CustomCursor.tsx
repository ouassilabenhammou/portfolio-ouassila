"use client";

import { useEffect, useRef, useState } from "react";

function isFinePointerDesktop() {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia?.("(hover: hover) and (pointer: fine)")?.matches ?? false
  );
}

export default function CustomCursor() {
  const elRef = useRef<HTMLDivElement | null>(null);
  const [iconSrc, setIconSrc] = useState<string>("");
  const iconSrcRef = useRef<string>("");

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

      const hovered = document.elementFromPoint(e.clientX, e.clientY);
      const labeledIcon =
        (hovered &&
          (hovered as Element).closest?.("[data-cursor-icon]")) ||
        null;
      const nextIconSrc =
        labeledIcon?.getAttribute("data-cursor-icon")?.trim() ?? "";

      if (nextIconSrc !== iconSrcRef.current) {
        iconSrcRef.current = nextIconSrc;
        setIconSrc(nextIconSrc);
      }
      el.classList.toggle("custom-cursor--label", Boolean(nextIconSrc));
    };

    const onLeave = () => {
      target.current.x = -100;
      target.current.y = -100;
      iconSrcRef.current = "";
      setIconSrc("");
      el.classList.remove("custom-cursor--label");
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);

    const tick = () => {
      const dx = target.current.x - current.current.x;
      const dy = target.current.y - current.current.y;

      current.current.x += dx * 0.22;
      current.current.y += dy * 0.22;

      const w = el.offsetWidth || 18;
      const h = el.offsetHeight || 18;
      el.style.transform = `translate3d(${current.current.x - w / 2}px, ${current.current.y - h / 2}px, 0)`;
      rafId.current = window.requestAnimationFrame(tick);
    };

    rafId.current = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      if (rafId.current != null) window.cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div ref={elRef} className="custom-cursor" aria-hidden="true">
      {iconSrc ? (
        <span
          className="custom-cursor__icon"
          style={
            {
              ["--cursor-icon-url" as never]: `url(${iconSrc})`,
            } as React.CSSProperties
          }
        />
      ) : null}
    </div>
  );
}
