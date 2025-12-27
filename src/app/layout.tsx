import type { Metadata } from "next";
import "./globals.css";
import { Archivo } from 'next/font/google';




const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-archivo',
});



export const metadata: Metadata = {
  title: "Muhammad Abdullah - Full Stack Developer",
  description: "A simple minimal yet elegant portfolio website.",
  icons: {
    icon: "/icon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-stone-200 text-stone-900 ${archivo.variable} font-archivo`}>{children}</body>
    </html>
  );
}
