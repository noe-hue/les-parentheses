"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/images/photo-5.png", alt: "Facade du restaurant de nuit avec terrasse", span: "md:col-span-2 md:row-span-2", aspect: "aspect-square" },
  { src: "/images/photo-8.png", alt: "Burrata tomates cerises et roquette", span: "", aspect: "aspect-[4/3]" },
  { src: "/images/photo-11.png", alt: "Preparation de pates fraiches au parmesan", span: "", aspect: "aspect-[4/3]" },
  { src: "/images/photo-4.png", alt: "Bar et comptoir en bois brut avec ampoules Edison", span: "", aspect: "aspect-[3/4]" },
  { src: "/images/photo-12.png", alt: "Bowl salade composee du restaurant", span: "md:col-span-2", aspect: "aspect-[2/1]" },
  { src: "/images/photo-9.png", alt: "Tiramisu maison en bocal", span: "", aspect: "aspect-[4/3]" },
  { src: "/images/photo-13.png", alt: "Bieres artisanales pression du moment", span: "", aspect: "aspect-[4/3]" },
  { src: "/images/photo-3.png", alt: "Quiche maison et salade verte", span: "", aspect: "aspect-[4/3]" },
  { src: "/images/photo-10.png", alt: "Cremes brulees maison", span: "", aspect: "aspect-[4/3]" },
  { src: "/images/photo-6.png", alt: "Bagel frais garni avec salade", span: "", aspect: "aspect-[4/3]" },
  { src: "/images/photo-7.png", alt: "Croque monsieur grille et salade", span: "", aspect: "aspect-[4/3]" },
  { src: "/images/photo-2.png", alt: "Facade Cave a Manger Epicerie Fine de jour", span: "", aspect: "aspect-[4/3]" },
];

export default function GalerieSection() {
  return (
    <section id="galerie" className="relative py-20 md:py-28 bg-[#0C0A09]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-4 mb-12"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-amber-accent/80 font-light">
            Ambiance
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl tracking-tight text-cream text-center">
            Notre Univers
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-amber-accent to-transparent mt-2" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className={`relative overflow-hidden group ${img.span} ${img.aspect}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/0 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
