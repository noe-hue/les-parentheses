"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HistoireSection() {
  return (
    <section id="histoire" className="relative py-20 md:py-28 bg-[#0C0A09]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/photo-5.png"
                alt="Facade du restaurant Les Parentheses de nuit avec terrasse"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A09]/40 to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-8 -right-4 md:-right-8 w-48 md:w-64 aspect-square overflow-hidden border-4 border-[#0C0A09]"
            >
              <Image
                src="/images/photo-4.png"
                alt="Bar et comptoir en bois du restaurant"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-4">
              <span className="text-xs uppercase tracking-[0.4em] text-amber-accent/80 font-light">
                Notre Histoire
              </span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl tracking-tight leading-tight text-cream">
                Une parenthese
                <br />
                <span className="text-amber-accent">gourmande</span>
              </h2>
            </div>

            <p className="text-warm-400 leading-relaxed max-w-[55ch] font-light">
              Niche au coeur de Chambourcy, Les Parentheses est bien plus qu&apos;un
              restaurant. C&apos;est un lieu de vie ou se melent cuisine raffinee,
              vins soigneusement selectionnes et produits d&apos;exception.
            </p>

            <p className="text-warm-400 leading-relaxed max-w-[55ch] font-light">
              Notre cave a manger vous invite a decouvrir des saveurs authentiques
              dans un cadre chaleureux, ou le bois brut et la lumiere tamisee
              creent une atmosphere unique. Notre epicerie fine prolonge
              l&apos;experience avec des produits artisanaux a emporter.
            </p>

            <div className="grid grid-cols-3 gap-8 mt-4 pt-8 border-t border-warm-800/30">
              {[
                { value: "4.9/5", label: "Note Google\n172 avis" },
                { value: "100%", label: "Produits\nartisanaux" },
                { value: "2020", label: "Annee\nd'ouverture" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-amber-accent">
                    {stat.value}
                  </span>
                  <span className="text-xs text-warm-500 whitespace-pre-line leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
