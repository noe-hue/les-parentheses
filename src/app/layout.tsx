import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Les Parentheses | Cave a Manger & Epicerie Fine - Chambourcy",
  description:
    "Restaurant gastronomique, cave a manger et epicerie fine a Chambourcy. Produits artisanaux, vins naturels et cuisine raffinee dans un cadre chaleureux.",
  keywords:
    "restaurant, Chambourcy, cave a manger, epicerie fine, vins naturels, gastronomie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${outfit.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0C0A09] text-[#F5F0EB]">
        {children}
      </body>
    </html>
  );
}
