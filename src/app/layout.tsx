import type { Metadata } from "next";
import { DM_Sans, Cabin, Libre_Baskerville } from "next/font/google";
import "./globals.css";

// Substituto livre do Gill Sans Nova (fonte do menu do Dishoom, licenciada via Adobe)
const cabin = Cabin({
  variable: "--font-cabin",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const baskerville = Libre_Baskerville({
  variable: "--font-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nomad Restaurante | Sabores do mundo em Petrolina",
  description:
    "Cozinha sazonal e uma viagem gastronômica a cada novo destino. Jantar de terça a domingo, das 18h às 23h, em Petrolina-PE.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${dmSans.variable} ${cabin.variable} ${baskerville.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
