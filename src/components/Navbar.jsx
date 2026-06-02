import React, { useEffect, useState } from "react";
import { scrollToId } from "./SmoothScroll";

const links = [
  { label: "המיוצגים", id: "talents" },
  { label: "יצירת קשר", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-brand-ink/5 bg-brand-cream/80 py-3 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <button
          onClick={() => scrollToId("top")}
          aria-label="יהל כהן — לראש העמוד"
          className="transition-opacity hover:opacity-70"
        >
          <img src="/logo.png" alt="יהל כהן" className="h-9 w-auto md:h-11" />
        </button>

        <ul className="flex items-center gap-2 md:gap-4">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToId(link.id)}
                className="rounded-full px-4 py-2 text-sm font-medium text-brand-ink/80 transition-colors hover:bg-brand-ink/5 hover:text-brand-red md:text-base"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
