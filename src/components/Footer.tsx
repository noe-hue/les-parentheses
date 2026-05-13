import React from "react";

export default function Footer() {
  return (
    <footer className="relative py-16 bg-[#0C0A09] border-t border-warm-800/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-12">
          <div className="flex flex-col gap-4">
            <span className="font-[family-name:var(--font-playfair)] text-2xl text-cream">
              Les Parentheses
            </span>
            <p className="text-sm text-warm-500 font-light leading-relaxed max-w-[35ch]">
              Cave a manger, epicerie fine et restaurant a Chambourcy.
              Un lieu de partage et de decouverte gourmande.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.3em] text-warm-400">
              Navigation
            </span>
            <div className="flex flex-col gap-2">
              {[
                { label: "Accueil", href: "#accueil" },
                { label: "Notre Histoire", href: "#histoire" },
                { label: "La Carte", href: "#carte" },
                { label: "Galerie", href: "#galerie" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-warm-500 hover:text-amber-accent transition-colors duration-300 font-light"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.3em] text-warm-400">
              Suivez-nous
            </span>
            <div className="flex flex-col gap-2">
              <a
                href="#"
                className="text-sm text-warm-500 hover:text-amber-accent transition-colors duration-300 font-light"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-sm text-warm-500 hover:text-amber-accent transition-colors duration-300 font-light"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-sm text-warm-500 hover:text-amber-accent transition-colors duration-300 font-light"
              >
                Google Maps
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-warm-800/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs text-warm-600 font-light">
            &copy; {new Date().getFullYear()} Les Parentheses. Tous droits reserves.
          </span>
          <span className="text-xs text-warm-700 font-light">
            3 Place de la Mairie, 78240 Chambourcy
          </span>
        </div>
      </div>
    </footer>
  );
}
