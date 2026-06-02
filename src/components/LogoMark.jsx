import React from "react";
import { motion } from "framer-motion";

// ════════════════════════════════════════════════════════════════════
//  לוגו יהל כהן (שחזור וקטורי של ה-Y הכתוב).
//  להחלפה בלוגו המדויק: הדבק את ה-d של ה-SVG הרשמי ב-LOGO_PATH,
//  ועדכן את LOGO_VIEWBOX ל-viewBox שלו. האנימציה תעבוד אוטומטית.
// ════════════════════════════════════════════════════════════════════
export const LOGO_VIEWBOX = "0 0 220 260";
export const LOGO_PATH =
  "M62 64 C54 118 92 140 120 116 C132 106 142 84 150 66 C152 110 150 168 122 208 C108 230 82 230 84 206 C86 188 110 192 124 208";

export default function LogoMark({
  animate = false,
  className = "",
  strokeWidth = 9,
  duration = 2.6,
  delay = 0.3,
}) {
  const common = {
    d: LOGO_PATH,
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
  };

  return (
    <svg viewBox={LOGO_VIEWBOX} fill="none" className={className} role="img" aria-label="יהל כהן">
      {animate ? (
        <motion.path
          {...common}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { duration, delay, ease: [0.43, 0.13, 0.23, 0.96] },
            opacity: { duration: 0.25, delay },
          }}
        />
      ) : (
        <path {...common} />
      )}
    </svg>
  );
}
