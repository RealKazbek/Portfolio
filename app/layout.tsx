import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://kazbekport.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Kazbek Assanbek | Full Stack Developer",
    template: "%s | Kazbek Assanbek",
  },
  description:
    "Личный сайт разработчика: Асанбек Казбек Талғатұлы (Kazbek Assanbek). Full Stack Developer, студент МУИТ. Разработка веб-сайтов, Telegram ботов и AI решений.",
  keywords: [
    "Kazbek Assanbek",
    "Асанбек Казбек",
    "Асанбек Казбек Талғатұлы",
    "Kazbek Assanbek Talgatuly",
    "Full Stack Developer Kazakhstan",
    "Разработчик МУИТ",
    "IITU Student",
    "Next.js Developer",
  ],
  authors: [{ name: "Kazbek Assanbek", url: SITE_URL }],
  creator: "Kazbek Assanbek",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "profile",
    firstName: "Kazbek",
    lastName: "Assanbek",
    username: "RealKazbek",
    gender: "male",
    locale: "ru_RU",
    url: SITE_URL,
    title: "Kazbek Assanbek | Full Stack Developer",
    description:
      "Асанбек Казбек — Full Stack разработчик. Студент МУИТ, создатель инновационных проектов.",
    siteName: "Kazbek Assanbek Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kazbek Assanbek Portfolio",
      },
    ],
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kazbek Assanbek",
    alternateName: [
      "Асанбек Казбек",
      "Асанбек Казбек Талғатұлы",
      "Kazbek Assanbek Talgatuly",
    ],
    url: SITE_URL,
    image: `${SITE_URL}/og-image.jpg`,
    jobTitle: "Full Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance / IITU",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "International IT University (IITU)",
    },
    sameAs: [
      "https://t.me/RealKazbek",
      "https://github.com/RealKazbek",
      "https://www.linkedin.com/in/казбек-асанбек-1b60bb363/",
      "https://instagram.com/RealKazbek",
    ],
  };

  return (
    <html lang="ru" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-black text-white`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
