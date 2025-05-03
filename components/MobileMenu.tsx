import React, { useEffect } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import Link from "next/link";

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

function MobileMenu({
  navItems,
  menuOpen,
  setMenuOpen,
  pathname,
  language,
  languages,
  setLanguage,
}: {
  navItems: Array<string>;
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  pathname: string;
  language: string;
  languages: Array<string>;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}) {
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <div>
      {menuOpen && (
        <div className="fixed inset-0 bg-[var(--background)] z-50 flex flex-col justify-between p-4 pt-12 xl:hidden">
          <div className="flex flex-col justify-start items-start gap-5">
            <ul className="flex flex-col space-y-6 text-xl mt-13">
              {navItems.map((item, index) => {
                const href = `/${item === "home" ? "" : item}`;
                const isActive =
                  pathname === href || (item === "home" && pathname === "/");
                return (
                  <li key={index}>
                    <Link
                      onClick={() => setMenuOpen(false)}
                      href={href}
                      className={`text-[32px] font-normal hover:text-[var(--white)] focus:text-[var(--white)] ${
                        isActive
                          ? "text-[var(--white)] font-semibold"
                          : "text-[var(--gray)]"
                      }`}
                    >
                      <span className="text-[var(--primary)]">#</span>
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <LanguageSwitcher
              language={language}
              languages={languages}
              setLanguage={setLanguage}
            />
          </div>

          <div className="flex space-x-[30px] justify-center">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={link.src} alt={link.alt} className="w-10 h-10 opacity-50 hover:opacity-100 transition-opacity duration-300 ease-in-out " />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;
