import React from "react";
import { motion } from "framer-motion";
import TalentCard from "./TalentCard";
import { talents } from "@/data/talents";

const ease = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export default function TalentsSection() {
  return (
    <section id="talents" className="relative bg-brand-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className="mb-16 flex flex-col items-start gap-5 md:mb-20 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="mb-3 inline-block font-latin text-xs font-medium uppercase tracking-[0.4em] text-brand-red">
              The Roster
            </span>
            <h2 className="font-display text-[clamp(2.6rem,8vw,6rem)] leading-[0.95] text-brand-ink">
              המיוצגים <span className="text-brand-red">שלנו</span>
            </h2>
          </div>
          <p className="max-w-sm text-balance text-base leading-relaxed text-brand-ink/60 md:text-right">
            קבוצה נבחרת של יוצרי תוכן ומשפיענים. לחצו על האייקונים כדי לעבור
            ישירות לפרופילים שלהם.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8"
        >
          {talents.map((talent) => (
            <motion.div key={talent.name} variants={item}>
              <TalentCard talent={talent} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
