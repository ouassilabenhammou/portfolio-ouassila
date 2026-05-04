import React from "react";
import BloemIcon from "@/public/icons/bloem.svg";

export default function Footer() {
  return (
    <footer
      className={[
        "grid grid-cols-4 gap-x-4 bg-(--color-primary)",
        "min-h-[clamp(280px,55dvh,660px)]",
        "px-4 min-[768px]:px-8",
        "pt-[calc(0.5rem+var(--footer-block-padding))] md:pt-[calc(0.75rem+var(--footer-block-padding))]",
        "pb-[calc(env(safe-area-inset-bottom,0)+0.25rem)] md:pb-[calc(env(safe-area-inset-bottom,0)+0.375rem)]",
        "min-[1440px]:grid-cols-12 min-[1440px]:gap-x-(--layout-desktop-col-gap) min-[1440px]:px-(--layout-margin-desktop-inline)",
      ].join(" ")}
    >
      <div className="col-span-4 flex min-h-0 flex-col min-[1440px]:col-span-8 min-[1440px]:col-start-3">
        <div className="flex flex-1 items-center justify-between gap-6">
          {/* Links */}
          <div className="min-[768px]:col-span-1 min-[1440px]:col-span-3 text-(--color-background)">
            <p className="text-[18px] font-semibold tracking-tight ">
              Pagina’s
            </p>
            <ul className="mt-4 space-y-2 text-[18px] font-light ">
              <li>
                <a href="#over-mij">Over mij</a>
              </li>
              <li>
                <a href="#projecten">Mijn werk</a>
              </li>
              <li>
                <a href="#even-offline">Even offline</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Midden */}
          <div className="flex shrink-0 items-center justify-center min-[1440px]:col-span-2">
            <BloemIcon
              className="size-16 shrink-0 overflow-visible text-(--color-background)"
              aria-hidden
              focusable="false"
            />
          </div>

          {/* Rechts */}
          <div className="min-[768px]:col-span-1 min-[1440px]:col-span-3 min-[768px]:text-left text-(--color-background)">
            <p className="text-[18px] font-semibold tracking-tight ">
              Volg mij
            </p>
            {/* Socials */}
            <ul className="mt-4 space-y-2 text-[18px] font-light ">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://tiktok.com" target="_blank" rel="noreferrer">
                  TikTok
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-auto pb-5 text-center text-[16px] text-(--color-background) opacity-50">
          ©2026 Ouassila
        </p>
      </div>
    </footer>
  );
}
