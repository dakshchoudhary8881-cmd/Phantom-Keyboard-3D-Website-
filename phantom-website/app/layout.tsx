import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Phantom X75 - Premium Mechanical Keyboard",
  description: "Experience precision perfected. Premium mechanical keyboard engineered for creators and gamers. Hot-swappable, RGB, gasket mounted.",
  keywords: "mechanical keyboard, gaming keyboard, phantom x75, rgb keyboard, hot-swappable",
  authors: [{ name: "Phantom Keyboards" }],
  openGraph: {
    title: "Phantom X75 - Premium Mechanical Keyboard",
    description: "Experience precision perfected. Premium mechanical keyboard engineered for creators and gamers.",
    images: [
      {
        url: "/images/phantom/000.webp",
        width: 1200,
        height: 630,
        alt: "Phantom X75 Mechanical Keyboard",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.className}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0F172A" />
      </head>
      <body className="bg-phantom-dark text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
