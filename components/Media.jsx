import React from "react";
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

function Media() {
  return (
    <div className="absolute hidden flex-col gap-3 ml-4 mt-50 xl:flex items-center">
      <span className="absolute w-0.5 h-45 bg-[var(--gray)] mt-[-200]"></span>
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
  );
}

export default Media;
