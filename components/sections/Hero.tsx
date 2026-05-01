"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";

/** Ruimte tussen rechter rand afbeelding en cursor (px). */
const CURSOR_GAP_X = 40;
/** Lagere waarde = meer vertraging / vloeiender volgen (0–1). */
const LERP = 0.09;
/** Zelfde breakpoint als Tailwind `md`: alleen desktop krijgt mouse-follow. */
const DESKTOP_MEDIA = "(min-width: 768px)";

/** Alleen verticaal begrenzen: links/rechts mag buiten de sectie; onder niet (volgende sectie er overheen). */
function clampFollowerY(y: number, sectionH: number, followerH: number) {
  const maxY = Math.max(0, sectionH - followerH);
  return Math.min(Math.max(y, 0), maxY);
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const visibleRef = useRef(false);
  const desktopRef = useRef(false);

  const [visible, setVisible] = useState(false);
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_MEDIA);
    const sync = () => setDesktop(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    desktopRef.current = desktop;
  }, [desktop]);

  useEffect(() => {
    if (!desktop) setVisible(false);
  }, [desktop]);

  useEffect(() => {
    visibleRef.current = visible;
  }, [visible]);

  useEffect(() => {
    let rafId = 0;
    let active = true;

    const tick = () => {
      if (!active) return;

      const el = followerRef.current;
      if (el && desktopRef.current && visibleRef.current) {
        const cur = currentRef.current;
        const tgt = targetRef.current;
        cur.x += (tgt.x - cur.x) * LERP;
        cur.y += (tgt.y - cur.y) * LERP;
        el.style.transform = `translate3d(${cur.x}px, ${cur.y}px, 0)`;
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => {
      active = false;
      cancelAnimationFrame(rafId);
    };
  }, []);

  const computeFollowerTarget = useCallback(
    (clientX: number, clientY: number) => {
      const section = sectionRef.current;
      const follower = followerRef.current;
      if (!section) return null;
      const rect = section.getBoundingClientRect();
      const w = follower?.offsetWidth ?? 160;
      const h = follower?.offsetHeight ?? 250;
      const cx = clientX - rect.left;
      const cy = clientY - rect.top;

      /**
       * Links van het midden: foto links van cursor (cursor rechts van foto) → kan links uit de sectie.
       * Rechts van het midden: foto rechts van cursor → idem naar rechts buiten de sectie (symmetrisch).
       */
      const midViewportX = rect.left + rect.width / 2;
      const imageRightOfCursor = clientX >= midViewportX;
      const x = imageRightOfCursor ? cx + CURSOR_GAP_X : cx - w - CURSOR_GAP_X;
      const y = clampFollowerY(cy - h / 2, rect.height, h);

      return { x, y };
    },
    [],
  );

  /** Zone groter dan de sectie: cursor mag naar rechts/links buiten de box (foto + marge). */
  const isInsideExpandedHeroZone = useCallback(
    (clientX: number, clientY: number) => {
      const section = sectionRef.current;
      const follower = followerRef.current;
      if (!section) return false;
      const r = section.getBoundingClientRect();
      const fw = follower?.offsetWidth ?? 0;
      const fh = follower?.offsetHeight ?? 0;
      const padX = Math.max(fw + CURSOR_GAP_X + 48, 280);
      const padY = Math.max(fh / 2 + 48, 170);
      const viewportRight =
        typeof window !== "undefined" ? window.innerWidth : r.right + padX;
      const maxX = Math.max(r.right + padX, viewportRight);

      return (
        clientX >= r.left - padX &&
        clientX <= maxX &&
        clientY >= r.top - padY &&
        clientY <= r.bottom + padY
      );
    },
    [],
  );

  useEffect(() => {
    if (!visible || !desktop) return;

    const onPointerMove = (e: PointerEvent) => {
      if (!isInsideExpandedHeroZone(e.clientX, e.clientY)) {
        setVisible(false);
        return;
      }
      const pos = computeFollowerTarget(e.clientX, e.clientY);
      if (pos) targetRef.current = pos;
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, [visible, desktop, computeFollowerTarget, isInsideExpandedHeroZone]);

  const handleEnter = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!desktopRef.current) return;
      const pos = computeFollowerTarget(e.clientX, e.clientY);
      if (!pos) return;
      targetRef.current = pos;
      currentRef.current = { ...pos };

      const follower = followerRef.current;
      if (follower) {
        follower.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      }

      setVisible(true);
    },
    [computeFollowerTarget],
  );

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-screen w-full flex-col items-center justify-center"
    >
      {desktop && (
        <div
          aria-hidden
          className="pointer-events-auto absolute inset-0 z-1"
          onMouseEnter={handleEnter}
        />
      )}

      <img
        src="/images/naam.svg"
        alt="Hero-afbeelding"
        className="relative z-2 pointer-events-none h-auto w-[406px] max-w-full md:w-auto md:max-w-none"
      />

      {desktop && (
        <div
          ref={followerRef}
          className={`pointer-events-none absolute left-0 top-0 z-3 w-fit select-none will-change-transform ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden
        >
          <div className="overflow-hidden rounded-[10px]">
            <Image
              src="/images/ditbenik.png"
              alt=""
              width={267}
              height={200}
              unoptimized
              className="block h-[250px] w-auto"
              draggable={false}
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}
