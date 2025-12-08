import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://kazbekport.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Kazbek | Full Stack Developer",
    template: "%s | Kazbek Portfolio",
  },
  description:
    "Портфолио Full Stack разработчика и студента МУИТ. Next.js, Python, AI интеграции и Telegram боты.",
  keywords: [
    "Full Stack",
    "Developer",
    "Kazakhstan",
    "IITU",
    "Next.js",
    "React",
    "Python",
    "Telegram Bot",
    "Portfolio",
  ],
  authors: [{ name: "Kazbek" }],
  creator: "Kazbek",

  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: SITE_URL,
    title: "Kazbek | Full Stack Developer",
    description:
      "Разрабатываю современные веб-приложения, ботов и внедряю AI. Студент МУИТ.",
    siteName: "Kazbek Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kazbek Portfolio Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Kazbek | Full Stack Developer",
    description: "Портфолио Full Stack разработчика. Next.js, Python, AI.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark scroll-smooth">
      <body className={`${inter.className} antialiased bg-black text-white`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
