"use client";

import { useState } from "react";

const links = [
  { label: "Our Story", href: "#story" },
  { label: "Restaurants", href: "#restaurants" },
  { label: "Menu", href: "#menu" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <nav className="mx-auto flex h-20 items-center justify-between px-5 sm:px-8 lg:h-24 lg:px-12">

        {/* Logo */}
        <a
          href="#top"
          className="font-display text-3xl tracking-[0.08em] text-[var(--foreground)] sm:text-4xl"
        >
          SAGAR
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex lg:gap-10">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)] transition-colors duration-300 hover:text-[var(--gold)]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/60 backdrop-blur-md md:hidden"
        >
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-px w-full bg-[var(--foreground)] transition-transform duration-300 ${
                menuOpen ? "translate-y-[4px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-[var(--foreground)] transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-[var(--foreground)] transition-transform duration-300 ${
                menuOpen ? "-translate-y-[4px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`absolute left-0 top-0 -z-10 w-full bg-[var(--cream)] px-6 pb-8 pt-28 shadow-xl transition-all duration-500 md:hidden ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col">
          {links.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-black/10 py-5 font-display text-3xl"
              style={{
                transitionDelay: `${index * 50}ms`,
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}