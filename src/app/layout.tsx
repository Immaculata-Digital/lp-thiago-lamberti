import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18082855554"
          strategy="afterInteractive"
        />
        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18082855554');
          `}
        </Script>
      </head>
      <body className={`${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
