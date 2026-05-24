import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import ScrollRevealInit from "@/components/ScrollRevealInit";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08080C",
};

export const metadata: Metadata = {
  title: "Thiago Lamberti | Arquitetura de Software & IA",
  description: "Consultoria técnica sênior (PJ) para eliminar gargalos de infraestrutura, otimizar servidores e integrar LLMs aos seus processos operacionais.",
  keywords: ["Thiago Lamberti", "Consultoria de TI", "Arquitetura de Software", "Inteligência Artificial", "DevOps", "Docker", "Portainer", "Nginx", "n8n", "Python", "LLMs", "Consultor PJ"],
  authors: [{ name: "Thiago Lamberti" }],
  openGraph: {
    title: "Thiago Lamberti | Arquitetura de Software & IA",
    description: "Arquitetura de Software e Inteligência Artificial sob demanda para empresas que precisam escalar sem quebrar.",
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
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js-enabled');`,
          }}
        />
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
        <ScrollRevealInit />
      </body>
    </html>
  );
}
