"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    name: "Bieres Artisanales",
    description: "Pressions du moment et bouteilles selectionnees aupres de brasseurs independants",
    image: "/images/photo-13.png",
  },
  {
    name: "Plats Maison",
    description: "Quiches, croques, salades composees et pates fraiches preparees chaque jour",
    image: "/images/photo-11.png",
  },
  {
    name: "Desserts Faits Maison",
    description: "Tiramisu, cremes brulees, mousse au chocolat et panacotta du moment",
    image: "/images/photo-9.png",
  },
  {
    name: "Produits d'Epicerie",
    description: "Charcuteries, fromages et produits artisanaux a deguster sur place ou a emporter",
    image: "/images/photo-10.png",
  },
];

export default function EpicerieSection() {
  return (
    <section className="relative py-20 md:py-28 bg-espresso/30">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0C0A09] via-transparent to-[#0C0A09] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12"
        >
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.4em] text-amber-accent/80 font-light">
              Cave a Manger
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl tracking-tight text-cream">
              Nos Produits
            </h2>
          </div>
          <p className="text-warm-400 font-light max-w-[40ch] leading-relaxed text-sm md:text-base">
            Chaque produit est choisi pour sa qualite et son histoire.
            A deguster sur place ou a emporter.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-5">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl text-cream group-hover:text-amber-accent transition-colors duration-300 mb-2">
                {product.name}
              </h3>
              <p className="text-sm text-warm-500 font-light leading-relaxed">
                {product.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
