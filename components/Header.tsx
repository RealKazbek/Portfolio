"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";
import Media from "./Media";

const navItems: Array<string> = ["home", "projects", "about-me", "contacts"];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname: string = usePathname();
  const languages = ["EN", "KZ", "RU"];

  const [language, setLanguage] = useState("EN");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const saveLanguage = (value: string) => {
    setLanguage(value);
    localStorage.setItem("language", value);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[var(--background)]">
      <Media />

      <div className="px-4 xl:px-0 xl:max-w-[1024px] mx-auto py-4 flex items-center justify-between">
        <Logo zIndex={100}/>

        <div className="hidden xl:flex items-center space-x-8">
          <Navigation navItems={navItems} pathname={pathname} />
          <LanguageSwitcher
            language={language}
            languages={languages}
            saveLanguage={saveLanguage}
            textSize={16}
          />
        </div>

        <button
          className="xl:hidden text-2xl font-bold z-100"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen ? "true" : "false"}
        >
          <span
            className={`relative block w-6 h-6
              before:content-[''] before:top-4 before:right-1 before:absolute before:w-6 before:h-0.5 before:bg-[var(--gray)]
              before:transition-transform before:duration-300
              after:content-[''] after:top-4 after:right-1 after:absolute after:w-4 after:h-0.5 after:bg-[var(--gray)]
              after:transition-transform after:duration-300
              ${
                menuOpen
                  ? "before:rotate-45 before:top-0 after:-rotate-45 after:top-0 after:w-6"
                  : "before:-translate-y-1.5 after:translate-y-1.5"
              }
            `}
          />
        </button>
      </div>

      <MobileMenu
        navItems={navItems}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        pathname={pathname}
        language={language}
        languages={languages}
        setLanguage={setLanguage}
        saveLanguage={saveLanguage}
      />
    </header>
  );
}

Header.displayName = "Header";

export default Header;
