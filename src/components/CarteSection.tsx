"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuSemaine = {
  subtitle: "En Formule : uniquement le midi en semaine",
  pricing: "+Desserts 13,50€ + Boissons (voir carte Softs) 3,50€",
  items: [
    { name: "Quiches du Moment et Salade Verte", description: "Quiche Lorraine ou Quiche Thon, Tomates", price: "9" },
    { name: "Croque Monsieur et Salade Verte", description: "", price: "8,50" },
    { name: "Salade Composee du Moment", description: "Lentilles, Vertes Bio, Oeuf Mollet, Saucisse de Morteau, Vinaigrette a l'echalotte", price: "8,50" },
    { name: "Pates du Moment", description: "Tagliatelles Fraiches, Creme de Champignons, Parmesan", price: "10" },
  ],
  horsFormule: [
    { name: "Burger Rosti de Pomme de Terre, Lard", description: "Fromage a Raclette, Oignons frits, Pickles", price: "13,50" },
    { name: "Dahl de Lentilles Corail, epinards, Riz", description: "", price: "11,50" },
  ],
};

const menuWeekend = {
  subtitle: "Valable Week-end et Jours Feries",
  pricing: "Entree+Plat ou Plat+Dessert 15€ / Entree+Plat+Dessert 20€",
  entrees: [
    { name: "Samoussa Poulet Curry", description: "Coco, Sauce Aigre douce" },
    { name: "Les Oeufs Mayonnaise", description: "" },
    { name: "La Planche de Charcuteries a partager", description: "Pour 2 personnes" },
  ],
  plats: [
    { name: "Les Gnocchis sauce Chorizo", description: "Parmesan" },
    { name: "Le Croque Jambon aux Herbes", description: "Comte, Champignons, salade verte et Coleslaw" },
    { name: "La Saucisse de Montbeliard", description: "Ecrase de pomme de terre, jus reduit" },
    { name: "Salade composee du moment", description: "Legumes, pois chiches" },
  ],
  desserts: [
    { name: "La Mousse au Chocolat", description: "Coulis chocolat noir et eclats de noisettes" },
    { name: "La Panacotta coulis du Moment", description: "" },
    { name: "La Creme Brulee pistache", description: "" },
    { name: "Le Mi-Cuit au chocolat", description: "Creme anglaise, Coulis de noisettes" },
    { name: "La Part de Tiramisu", description: "Compotee de bananes, vanille speculoos" },
  ],
};

function MenuItem({ item, showPrice = false }: { item: { name: string; description: string; price?: string }; showPrice?: boolean }) {
  return (
    <div className="group flex flex-col gap-2">
      <div className="flex items-baseline justify-between gap-4">
        <h4 className="text-base font-medium text-cream group-hover:text-amber-accent transition-colors duration-300">
          {item.name}
        </h4>
        {showPrice && item.price && (
          <>
            <div className="flex-1 border-b border-dotted border-warm-700/30 min-w-[2rem] translate-y-[-4px]" />
            <span className="font-[family-name:var(--font-playfair)] text-lg text-amber-accent/80">
              {item.price}&euro;
            </span>
          </>
        )}
      </div>
      {item.description && (
        <p className="text-sm text-warm-500 font-light leading-relaxed">{item.description}</p>
      )}
    </div>
  );
}

export default function CarteSection() {
  const [activeTab, setActiveTab] = useState<"semaine" | "weekend">("semaine");

  return (
    <section id="carte" className="relative py-20 md:py-28 bg-espresso/50">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0C0A09] via-transparent to-[#0C0A09] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-4 mb-10"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-amber-accent/80 font-light">
            Nos Saveurs
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl tracking-tight text-cream text-center">
            La Carte
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-amber-accent to-transparent mt-2" />
        </motion.div>

        <div className="flex justify-center gap-2 mb-12">
          {[
            { key: "semaine" as const, label: "Menu de la Semaine" },
            { key: "weekend" as const, label: "Carte Week-end" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-3 text-sm tracking-wide transition-all duration-300 ${
                activeTab === tab.key
                  ? "bg-amber-accent text-charcoal"
                  : "border border-warm-700/30 text-warm-400 hover:border-amber-accent/40 hover:text-warm-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "semaine" && (
            <motion.div
              key="semaine"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-10"
            >
              <div className="text-center flex flex-col gap-2">
                <p className="text-amber-accent text-sm font-medium tracking-wide">{menuSemaine.subtitle}</p>
                <p className="text-warm-500 text-xs font-light">{menuSemaine.pricing}</p>
              </div>
              <div className="flex flex-col gap-8">
                {menuSemaine.items.map((item) => (
                  <MenuItem key={item.name} item={item} showPrice />
                ))}
              </div>
              <div className="pt-8 border-t border-warm-800/30">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl text-amber-accent mb-6">Hors Formule</h3>
                <div className="flex flex-col gap-8">
                  {menuSemaine.horsFormule.map((item) => (
                    <MenuItem key={item.name} item={item} showPrice />
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "weekend" && (
            <motion.div
              key="weekend"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-10"
            >
              <div className="text-center flex flex-col gap-2">
                <p className="text-amber-accent text-sm font-medium tracking-wide">{menuWeekend.subtitle}</p>
                <p className="text-warm-500 text-xs font-light">{menuWeekend.pricing}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="flex flex-col">
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl text-amber-accent mb-6 pb-4 border-b border-warm-800/30">Les Entrees</h3>
                  <div className="flex flex-col gap-6">
                    {menuWeekend.entrees.map((item) => (
                      <MenuItem key={item.name} item={item} />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl text-amber-accent mb-6 pb-4 border-b border-warm-800/30">Les Plats</h3>
                  <div className="flex flex-col gap-6">
                    {menuWeekend.plats.map((item) => (
                      <MenuItem key={item.name} item={item} />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl text-amber-accent mb-6 pb-4 border-b border-warm-800/30">Les Desserts</h3>
                  <div className="flex flex-col gap-6">
                    {menuWeekend.desserts.map((item) => (
                      <MenuItem key={item.name} item={item} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
