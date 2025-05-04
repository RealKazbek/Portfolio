import { Fira_Code } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const firaCode = Fira_Code({
  variable: "--font-family",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${firaCode.variable}`}>
        <Header />
        <main className="pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
