import React, { useState } from "react";
import Image from "next/image";

function LanguageSwitcher({
  language,
  languages,
  setLanguage,
  textSize,
}: {
  language: string;
  languages: Array<string>;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  textSize: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(".language-switcher")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div
      className="relative language-switcher"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div
        className={`flex items-center gap-1 cursor-pointer text-[${textSize}px] bg-transparent`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {language}
        <Image
          src="./assets/images/icons/arrow.svg"
          alt="<->"
          width={10}
          height={7}
          className={`transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {isOpen && (
        <ul className="absolute bg-[var(--background)] border border-gray-600 text-left z-50">
          {languages.map((lang) => (
            <li
              key={lang}
              onClick={() => {
                setLanguage(lang);
                setIsOpen(false);
              }}
              className={`px-4 py-2 hover:bg-[var(--primary)] text-[${textSize}px] cursor-pointer`}
            >
              {lang}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

LanguageSwitcher.displayName = "LanguageSwitcher";

export default LanguageSwitcher;
