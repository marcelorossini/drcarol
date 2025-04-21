import type { Metadata } from "next";
import { Rosario, Caladea } from "next/font/google";
import "./globals.css";

const rosario = Rosario({
  variable: "--font-rosario",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const caladea = Caladea({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-caladea",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dra. Carolina Macedo",
  description: "Você em harmonia com a sua beleza",
};

import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rosario.variable} ${caladea.variable} font-sans antialiased`}
      >
        {children}
        <footer className="bg-primary p-4 flex items-center justify-end gap-2 text-white cursor-pointer">
          
          <a href="https://www.agenciaclinica.com.br/" target="_blank" rel="noopener noreferrer">
            <Image src={"/assets/logo-ag.svg"} alt="logo" width={80} height={80} />
          </a>
        </footer>
      </body>
    </html>
  );
}
