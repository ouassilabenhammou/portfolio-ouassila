"use client";

import BloemIcon from "@/public/icons/bloem.svg";
import MenuIcon from "@/components/ui/MenuIcon";
import Link from "next/link";
import { useCallback, useEffect, useId, useState } from "react";

/** Pad + hash: werkt op elke route; alleen `#…` zoekt het anker alleen op de huidige pagina (bijv. /generative-ai). */
const NAV: { id: string; label: string; href: string }[] = [
  { id: "over-mij", label: "Over mij", href: "/#over-mij" },
  { id: "projecten", label: "Projecten", href: "/#projecten" },
  { id: "even-offline", label: "Even offline", href: "/#even-offline" },
  { id: "contact", label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("over-mij");
  const panelId = useId();

  useEffect(() => {
    const ids = NAV.map((item) => item.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter((e) => e.isIntersecting);
        if (intersecting.length === 0) return;
        const top = intersecting.reduce((best, e) =>
          e.intersectionRatio > best.intersectionRatio ? e : best,
        );
        const id = top.target.getAttribute("id");
        if (id) setActiveId(id);
      },
      {
        root: null,
        rootMargin: "-18% 0px -40% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    );

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  /** Op `/` volstaat soms hash-navigatie niet met alleen client-side routing; dan expliciet scrollen. */
  const handleSectionLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, item: (typeof NAV)[number]) => {
      close();
      if (typeof window === "undefined") return;
      const onHome =
        window.location.pathname === "/" || window.location.pathname === "";
      if (!onHome) return;
      const el = document.getElementById(item.id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", item.href);
    },
    [close],
  );

  return (
    <header className="pointer-events-none fixed inset-x-0 top-2 z-50 max-md:px-4 md:top-5 md:px-8 min-[1440px]:px-(--layout-margin-desktop-inline)">
      <div className="pointer-events-auto mx-auto flex w-full max-w-[min(100%,1200px)] flex-col items-center gap-2">
        <div className="flex w-[328px] max-w-full flex-col gap-2">
          {/* Menu button */}
          <div className="flex h-[60px] w-full shrink-0 items-center justify-between gap-3 rounded-full border border-(--color-primary) bg-(--color-background) pl-5 pr-1.5">
            <button
              type="button"
              className="flex h-full min-w-0 shrink items-center gap-2.5 text-[18px]  tracking-tight text-(--color-primary)"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpen((v) => !v)}
            >
              <MenuIcon open={open} />
              Menu
            </button>
            <a
              href="mailto:ouassila_01@outlook.com"
              className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-(--color-primary) px-6 text-[18px] tracking-tight text-(--color-background)"
            >
              Contact
            </a>
          </div>

          {open ? (
            <nav
              id={panelId}
              aria-label="Hoofdnavigatie"
              className="flex h-[237px] w-full shrink-0 flex-col overflow-y-auto rounded-[20px] border border-(--color-primary) bg-(--color-background) px-4 pb-3 pt-4 shadow-sm"
            >
              <div className="mx-auto flex justify-center">
                <a href="/">
                  <BloemIcon
                    className="size-12 shrink-0 overflow-visible text-(--color-primary)"
                    aria-hidden
                    focusable="false"
                  />
                </a>
              </div>

              {/* Menu items */}
              <ul className="mt-2 flex min-h-0 flex-1 flex-col justify-between">
                {NAV.map((item) => {
                  const active = activeId === item.id;
                  const line =
                    item.id !== "contact"
                      ? active
                        ? "border-b border-(--color-primary)"
                        : "border-b border-(--color-muted-text)"
                      : "";
                  return (
                    <li key={item.id}>
                      <Link
                        href={item.href}
                        onClick={(e) => handleSectionLinkClick(e, item)}
                        className={[
                          "block py-2.5 text-[18px] leading-none",
                          active
                            ? "font-semibold text-(--color-primary)"
                            : "font-regular text-(--color-muted-text)",
                          line,
                        ].join(" ")}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          ) : null}
        </div>
      </div>
    </header>
  );
}
