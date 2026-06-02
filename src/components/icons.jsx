import React from "react";

// Instagram glyph
export function InstagramIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" />
    </svg>
  );
}

// TikTok glyph (lucide doesn't ship brand icons)
export function TikTokIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.5 3c.3 2.1 1.5 3.6 3.5 3.9v2.5c-1.2.1-2.4-.2-3.5-.8v5.9c0 3.3-2.5 5.5-5.4 5.5-2.7 0-4.9-2-4.9-4.7 0-2.9 2.4-4.8 5.2-4.6v2.6c-.4-.1-.8-.2-1.2-.1-1.2.1-2 .9-1.9 2.1.1 1.1 1 1.9 2.2 1.8 1.2-.1 1.9-1 1.9-2.3V3h2.6Z" />
    </svg>
  );
}
