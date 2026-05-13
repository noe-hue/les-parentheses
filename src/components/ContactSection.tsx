"use client";
import React from "react";
import { motion } from "framer-motion";

const hours = [
  { day: "Mardi", time: "11h30 - 15h00 / 18h00 - 21h00" },
  { day: "Mercredi", time: "11h30 - 15h00 / 18h00 - 21h00" },
  { day: "Jeudi", time: "11h30 - 15h00 / 18h00 - 21h00" },
  { day: "Vendredi", time: "11h30 - 15h00 / 18h00 - 21h00" },
  { day: "Samedi", time: "12h00 - 21h00" },
  { day: "Dimanche", time: "Ferme" },
  { day: "Lundi", time: "Ferme" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-20 md:py-28 bg-espresso/30">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0C0A09] via-transparent to-[#0C0A09] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-4 mb-12"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-amber-accent/80 font-light">
            Rendez-vous
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl tracking-tight text-cream text-center">
            Nous Retrouver
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-amber-accent to-transparent mt-2" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col gap-10"
          >
            <div className="flex flex-col gap-6">
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-cream">
                Informations
              </h3>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-[0.3em] text-warm-500">
                    Adresse
                  </span>
                  <span className="text-warm-200 font-light">
                    3 Place de la Mairie, 78240 Chambourcy
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-[0.3em] text-warm-500">
                    Telephone
                  </span>
                  <a
                    href="tel:+33139716523"
                    className="text-warm-200 font-light hover:text-amber-accent transition-colors"
                  >
                    01 39 71 65 23
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-amber-accent font-[family-name:var(--font-playfair)] text-2xl">
                  4.9
                </span>
                <span className="text-warm-400 text-sm font-light">
                  / 5 sur Google (172 avis)
                </span>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-cream">
                Horaires
              </h3>
              <div className="flex flex-col gap-3">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex items-baseline justify-between gap-4 py-2 border-b border-warm-800/20"
                  >
                    <span className="text-sm text-warm-300">{h.day}</span>
                    <span
                      className={`text-sm font-light ${
                        h.time === "Ferme"
                          ? "text-warm-600"
                          : "text-warm-400"
                      }`}
                    >
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="tel:+33139716523"
              className="inline-flex items-center justify-center w-full md:w-auto px-10 py-4 bg-amber-accent text-charcoal font-medium tracking-wide hover:bg-amber-accent/90 transition-all duration-300 text-sm"
            >
              Reserver une Table
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-square md:aspect-auto md:min-h-[500px] overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.5!2d2.0447!3d48.8619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e688c3e5b7f4a7%3A0x1234567890abcdef!2s3+Pl.+de+la+Mairie%2C+78240+Chambourcy!5e0!3m2!1sfr!2sfr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) saturate(0.3) brightness(0.6)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="Localisation Les Parentheses Chambourcy"
            />
            <div className="absolute inset-0 border border-warm-800/20 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
