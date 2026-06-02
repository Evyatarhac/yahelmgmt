import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { InstagramIcon, TikTokIcon } from "./icons";

function SocialLink({ href, label, children }) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-red text-brand-cream transition-all duration-300 hover:scale-110 hover:bg-brand-red-dark active:scale-95"
    >
      {children}
    </a>
  );
}

export default function TalentCard({ talent }) {
  const ref = useRef(null);
  const [imgOk, setImgOk] = useState(Boolean(talent.image));
  const hasLinks = Boolean(talent.instagram || talent.tiktok);

  // Subtle 3D tilt following the cursor
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), {
    stiffness: 180,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), {
    stiffness: 180,
    damping: 18,
  });

  const handleMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div className="group flex flex-col">
      {/* Poster */}
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        style={{ rotateX, rotateY, transformPerspective: 1000 }}
        className="relative aspect-[4/5] w-full overflow-hidden rounded-[24px] bg-brand-paper shadow-[0_18px_50px_-22px_rgba(28,20,19,0.4)] ring-1 ring-brand-ink/5 transition-shadow duration-500 group-hover:shadow-[0_30px_70px_-25px_rgba(220,57,56,0.4)]"
      >
        {imgOk ? (
          <img
            src={talent.image}
            alt={talent.name}
            loading="lazy"
            onError={() => setImgOk(false)}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-brand-red to-brand-red-dark px-4 text-center">
            <span className="font-display text-7xl text-brand-cream">
              {talent.name.charAt(0)}
            </span>
            <span className="font-display text-2xl text-brand-cream">
              {talent.name}
            </span>
            <span className="font-latin text-[0.7rem] uppercase tracking-[0.2em] text-brand-cream/80">
              {talent.role}
            </span>
            <span className="mt-2 rounded-full bg-brand-cream/15 px-3 py-1 text-[0.65rem] tracking-widest text-brand-cream/90">
              תמונה בקרוב
            </span>
          </div>
        )}
      </motion.div>

      {/* Social links */}
      <div className="mt-5 flex items-center justify-center gap-3">
        {hasLinks ? (
          <>
            <SocialLink href={talent.instagram} label={`האינסטגרם של ${talent.name}`}>
              <InstagramIcon className="h-5 w-5" />
            </SocialLink>
            <SocialLink href={talent.tiktok} label={`הטיקטוק של ${talent.name}`}>
              <TikTokIcon className="h-5 w-5" />
            </SocialLink>
          </>
        ) : (
          <span className="text-xs uppercase tracking-[0.25em] text-brand-ink/35">
            לינקים בקרוב
          </span>
        )}
      </div>
    </div>
  );
}
