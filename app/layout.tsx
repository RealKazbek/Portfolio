import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { siteUrl } from "@/lib/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kazbek Assanbek | Frontend & Go Backend Developer",
    template: "%s | Kazbek Assanbek",
  },
  description:
    "Личный сайт Казбека Асанбека — Frontend-разработчика и студента 4 курса МУИТ. React, Next.js, TypeScript, Go, Python, AI, FinTech и backend-разработка.",
  keywords: [
    "Kazbek Assanbek",
    "Frontend Developer Kazakhstan",
    "Go Developer Kazakhstan",
    "Go Backend",
    "React Developer",
    "IITU Student",
    "Next.js Developer",
    "AI",
    "FinTech",
  ],
  authors: [{ name: "Kazbek Assanbek", url: siteUrl }],
  creator: "Kazbek Assanbek",
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.ico" },

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
    url: siteUrl,
    title: "Kazbek Assanbek | Frontend & Go Backend Developer",
    description:
      "Казбек Асанбек — Frontend-разработчик и студент 4 курса МУИТ, развивающийся в Go Backend. React, Next.js, TypeScript, AI и FinTech.",
    siteName: "Kazbek Assanbek Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1726,
        height: 911,
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
    url: siteUrl,
    image: `${siteUrl}/og-image.png`,
    jobTitle: "Frontend Developer",
    affiliation: {
      "@type": "EducationalOrganization",
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
        <meta
          name="google-site-verification"
          content="6OcevrJGy36ZFnyVj5EWtVtNv-aIZ3CzNvPeCFxjb7w"
        />
      </head>
      <body className={`${inter.className} antialiased bg-black text-white`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
