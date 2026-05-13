"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="accueil" className="relative bg-[#0C0A09]">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <div className="flex flex-col items-center gap-6">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-xs md:text-sm uppercase tracking-[0.4em] text-amber-accent/80 font-light"
              >
                Chambourcy - Yvelines
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="font-[family-name:var(--font-playfair)] text-5xl md:text-[6.5rem] tracking-tighter leading-none text-cream"
              >
                Les Parentheses
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="w-24 h-[1px] bg-gradient-to-r from-transparent via-amber-accent to-transparent"
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="text-warm-400 text-base md:text-lg max-w-[50ch] leading-relaxed font-light"
              >
                Cave a manger, epicerie fine et restaurant.
                Un lieu ou le temps fait une pause.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="flex gap-4 mt-2"
              >
                <a
                  href="#carte"
                  className="px-8 py-3.5 bg-amber-accent text-charcoal text-sm font-medium tracking-wide hover:bg-amber-accent/90 transition-all duration-300"
                >
                  Decouvrir la Carte
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3.5 border border-warm-600/40 text-warm-200 text-sm tracking-wide hover:border-amber-accent/50 hover:text-amber-accent transition-all duration-300"
                >
                  Reserver
                </a>
              </motion.div>
            </div>
          }
        >
          <Image
            src="/images/photo-1.png"
            alt="Salle du restaurant Les Parentheses a Chambourcy"
            height={800}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-center"
            draggable={false}
            priority
          />
        </ContainerScroll>
      </div>
    </section>
  );
}
