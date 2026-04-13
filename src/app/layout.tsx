import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18082855554');

            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                  'send_to': 'AW-18082855554/apAFCOvSyJocEIL1ya5D',
                  'value': 1.0,
                  'currency': 'BRL',
                  'event_callback': callback
              });
              return false;
            }
            window.gtag_report_conversion = gtag_report_conversion;
          `}
        </Script>
      </head>
      <body className={`${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
