import React from "react";
import { scrollToId } from "./SmoothScroll";

export default function Footer() {
  return (
    <footer className="border-t border-brand-ink/10 bg-brand-cream text-brand-ink">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
        <button
          onClick={() => scrollToId("top")}
          className="font-display text-lg text-brand-red transition-opacity hover:opacity-70"
        >
          יהל כהן · סוכנות יוצרי תוכן
        </button>

        <div className="flex items-center gap-5 text-sm text-brand-ink/60">
          <button onClick={() => scrollToId("talents")} className="transition-colors hover:text-brand-red">
            המיוצגים
          </button>
          <button onClick={() => scrollToId("contact")} className="transition-colors hover:text-brand-red">
            יצירת קשר
          </button>
        </div>

        <p className="text-xs text-brand-ink/45">
          © {new Date().getFullYear()} יהל כהן. כל הזכויות שמורות.{" "}
          <span className="text-brand-ink/35">Built by @AriyaStudio</span>
        </p>
      </div>
    </footer>
  );
}
