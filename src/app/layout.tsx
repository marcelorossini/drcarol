import type { Metadata } from "next";
import { Rosario, Caladea } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Image from "next/image";

const rosario = Rosario({
  variable: "--font-rosario",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  preload: true,
  display: "swap",
});

const caladea = Caladea({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-caladea",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Dra. Carolina Macedo",
  description: "Você em harmonia com a sua beleza",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#d2b9a5",
  other: {
    "preload": "/assets/home-background.webp"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${rosario.variable} ${caladea.variable} font-sans antialiased`}
      >
        {children}
        <WhatsAppButton />
        <footer className="bg-primary p-4 flex items-center justify-end gap-2 text-white cursor-pointer">
          <a href="https://www.agenciaclinica.com.br/" target="_blank" rel="noopener noreferrer">
            <Image 
              src={"/assets/logo-ag.svg"} 
              alt="logo" 
              width={80} 
              height={80}
              priority={false}
              loading="lazy"
            />
          </a>
        </footer>
      </body>
    </html>
  );
}
