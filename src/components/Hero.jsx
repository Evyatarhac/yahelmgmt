import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { scrollToId } from "./SmoothScroll";
import LogoMark from "./LogoMark";

export default function Hero() {
  const [imgOk, setImgOk] = useState(true);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-brand-cream px-6"
    >
      {/* Soft ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-pink/15 blur-3xl" />
      </div>

      {/* The logo draws itself in */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex items-center justify-center"
      >
        {imgOk ? (
          <motion.img
            src="/logo.png"
            alt="יהל כהן — סוכנות יוצרי תוכן"
            onError={() => setImgOk(false)}
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 2.1, delay: 0.35, ease: [0.65, 0, 0.35, 1] }}
            className="h-60 w-auto drop-shadow-[0_10px_30px_rgba(220,57,56,0.18)] md:h-80"
          />
        ) : (
          <LogoMark animate className="h-60 w-auto text-brand-red md:h-80" strokeWidth={9} />
        )}
      </motion.div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => scrollToId("talents")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 0.9 }}
        aria-label="גלול למטה"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-brand-ink/40 transition-colors hover:text-brand-red"
      >
        <motion.span
          animate={{ y: [0, 9, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block"
        >
          <ArrowDown className="h-6 w-6" />
        </motion.span>
      </motion.button>
    </section>
  );
}
