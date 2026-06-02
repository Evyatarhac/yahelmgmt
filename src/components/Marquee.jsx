import React from "react";

/**
 * Seamless infinite horizontal marquee.
 * Duplicates its children once and translates by -50% for a perfect loop.
 */
export default function Marquee({
  children,
  reverse = false,
  speed = "marquee", // "marquee" | "marquee-fast"
  pauseOnHover = true,
  className = "",
}) {
  const anim = reverse ? "animate-marquee-reverse" : `animate-${speed}`;
  return (
    <div className={`flex w-full overflow-hidden ${className}`}>
      <div
        className={`flex shrink-0 items-center [will-change:transform] ${anim} ${
          pauseOnHover ? "hover:[animation-play-state:paused]" : ""
        }`}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
