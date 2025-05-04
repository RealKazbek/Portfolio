import React from "react";
import Logo from "./Logo";
import Image from "next/image";

const socialLinks = [
  {
    src: "./assets/images/icons/telegram.svg",
    alt: "Telegram",
    href: "https://t.me/RealKazbek",
  },
  {
    src: "./assets/images/icons/github.svg",
    alt: "GitHub",
    href: "https://github.com/RealKazbek",
  },
  {
    src: "./assets/images/icons/instagram.svg",
    alt: "Instagram",
    href: "https://www.instagram.com/realkazbek",
  },
];

function Footer() {
  const subject = "We would like to invite you to join our team.";
  const body = "Dear Kazbek,";
  const mailtoLink = `mailto:37765@iitu.edu.kz?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <footer className="border-t border-[var(--gray)] mt-35 bg-[var(--background)]">
      <div className="px-4 xl:px-0 xl:max-w-[1024px] mx-auto py-8 flex flex-col justify-between gap-12">
        <div className="flex sm:justify-between gap-4 flex-col sm:flex-row">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-6">
              <Logo zIndex={40}/>
              <a href={mailtoLink} className="text-[var(--gray)] transition-colors duration-300 ease-in-out hover:text-[var(--white)]">
                37765@iitu.edu.kz
              </a>
            </div>
            <span>Full-Stack developer</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="font-medium text-2xl">Media</span>
            <div className="flex space-x-2">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={link.src}
                    alt={link.alt}
                    width={32}
                    height={32}
                    className="opacity-50 hover:opacity-100 transition-opacity duration-300 ease-in-out "
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <span className="text-[var(--gray)] text-center">
          &copy; Copyright 2025. Made by Kazbek
        </span>
      </div>
    </footer>
  );
}

Footer.displayName = "Footer";

export default Footer;
