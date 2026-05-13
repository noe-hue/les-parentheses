"use client";
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Tres belle decouverte. Un bel endroit avec un accueil tres agreable et ou on mange tres bien !",
    author: "Laura Goncalves",
    rating: "5/5",
    source: "Google",
    date: "Mars 2026",
  },
  {
    text: "Cuisine simple et efficace, parfaitement realisee. Service au top, rapide et souriant. Ambiance conviviale qui rassemble aussi bien les jeunes que les moins jeunes.",
    author: "Sery Chanthakesone",
    rating: "5/5",
    source: "Google",
    date: "Octobre 2025",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-20 md:py-28 bg-[#0C0A09]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-4 mb-4"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-amber-accent/80 font-light">
            Temoignages
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl tracking-tight text-cream text-center">
            Ce qu&apos;ils en disent
          </h2>
        </motion.div>

        <div className="flex items-center justify-center gap-3 mb-10">
          <span className="font-[family-name:var(--font-playfair)] text-3xl text-amber-accent">
            4.9
          </span>
          <span className="text-warm-400 text-sm font-light">/5</span>
          <div className="flex gap-0.5 ml-2">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-amber-accent" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-warm-500 text-sm font-light ml-2">172 avis Google</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-6 p-8 border-t border-warm-800/30"
            >
              <div className="font-[family-name:var(--font-playfair)] text-5xl text-amber-accent/20 leading-none">
                &ldquo;
              </div>
              <p className="text-warm-300 font-light leading-relaxed text-sm md:text-base -mt-4">
                {t.text}
              </p>
              <div className="flex items-center justify-between mt-auto pt-6">
                <div className="flex flex-col gap-1">
                  <span className="text-sm text-cream font-medium">{t.author}</span>
                  <span className="text-xs text-warm-500">{t.rating} - {t.source} - {t.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
