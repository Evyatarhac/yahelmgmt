import React from "react";
import { motion } from "framer-motion";
import { ArrowUpLeft, Mail, Phone } from "lucide-react";
import { InstagramIcon, TikTokIcon } from "./icons";
import { contactInfo } from "@/data/talents";

const ease = [0.22, 1, 0.36, 1];

function ContactRow({ href, icon: Icon, label, value }) {
  return (
    <a
      href={href}
      className="group flex min-w-0 items-center justify-between gap-4 border-b border-brand-cream/25 py-6 transition-colors hover:border-brand-cream"
    >
      <span className="flex min-w-0 items-center gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-cream/15 text-brand-cream transition-colors group-hover:bg-brand-cream group-hover:text-brand-red">
          <Icon className="h-5 w-5" />
        </span>
        <span className="flex min-w-0 flex-col">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-cream/60">
            {label}
          </span>
          <span
            dir="ltr"
            className="break-all font-display text-lg text-brand-cream sm:text-xl lg:text-2xl"
          >
            {value}
          </span>
        </span>
      </span>
      <ArrowUpLeft className="h-6 w-6 shrink-0 text-brand-cream/50 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-[-0.25rem] group-hover:text-brand-cream" />
    </a>
  );
}

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-brand-red py-24 text-brand-cream md:py-32"
    >
      {/* Soft glows */}
      <div className="pointer-events-none absolute -bottom-40 right-0 h-[36rem] w-[36rem] rounded-full bg-brand-red-dark/50 blur-3xl" />
      <div className="pointer-events-none absolute -top-32 -left-20 h-[28rem] w-[28rem] rounded-full bg-brand-pink/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 md:grid-cols-2 md:gap-20">
        {/* Left — headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className="flex items-center"
        >
          <span className="font-latin text-[clamp(1.5rem,5vw,3rem)] font-medium uppercase tracking-[0.4em] text-brand-cream/90">
            Let&apos;s Talk
          </span>
        </motion.div>

        {/* Right — details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          className="flex flex-col justify-center"
        >
          <div className="mb-2">
            <p className="font-display text-3xl text-brand-cream">
              {contactInfo.name}
            </p>
            <p dir="ltr" className="text-left font-latin text-sm uppercase tracking-[0.2em] text-brand-cream/65">
              {contactInfo.title}
            </p>
          </div>

          <ContactRow
            href={`mailto:${contactInfo.email}`}
            icon={Mail}
            label="אימייל"
            value={contactInfo.email}
          />
          <ContactRow
            href={`tel:${contactInfo.phone.replace(/[^+\d]/g, "")}`}
            icon={Phone}
            label="טלפון"
            value={contactInfo.phone}
          />

          {/* Socials */}
          <div className="mt-8 flex items-center gap-4">
            <span className="text-sm text-brand-cream/65">עקבו אחרינו</span>
            <div className="flex gap-3">
              {contactInfo.instagram && (
                <a
                  href={contactInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-cream/40 text-brand-cream transition-all hover:scale-110 hover:bg-brand-cream hover:text-brand-red"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
              )}
              {contactInfo.tiktok && (
                <a
                  href={contactInfo.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-cream/40 text-brand-cream transition-all hover:scale-110 hover:bg-brand-cream hover:text-brand-red"
                >
                  <TikTokIcon className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
