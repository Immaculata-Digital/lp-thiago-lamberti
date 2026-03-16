import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F9FDFD",
};

export const metadata: Metadata = {
  title: "Thiago Lamberti | Terapeuta Comportamental",
  description: "Especialista em Terapia Dialética Comportamental (DBT). Conquiste o domínio sobre suas emoções e transforme sua rotina com ferramentas científicas e acolhimento humano.",
  keywords: ["Thiago Lamberti", "Terapeuta Comportamental", "Psicoterapeuta", "DBT", "Terapia Dialética Comportamental", "Equilíbrio Emocional"],
  authors: [{ name: "Thiago Lamberti" }],
  openGraph: {
    title: "Thiago Lamberti | Terapeuta Comportamental",
    description: "Conquiste o domínio sobre suas emoções e transforme sua rotina com ferramentas científicas e acolhimento humano.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
