import React from "react";
import Image from "next/image";

function LanguageSwitcher({
  language,
  languages,
  setLanguage,
}: {
  language: string;
  languages: Array<string>;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="relative group">
      <div className="flex items-center gap-1 cursor-pointer text-l bg-transparent">
        {language}
        <Image
          src="./assets/images/icons/arrow.svg"
          alt="<->"
          className="transition-transform duration-300 ease-in-out group-hover:rotate-180"
        />
      </div>
      <ul className="absolute hidden group-hover:block bg-[var(--background)] border border-gray-600 text-left z-50">
        {languages.map((lang) => (
          <li
            key={lang}
            onClick={() => setLanguage(lang)}
            className="px-4 py-2 hover:bg-[var(--primary)] cursor-pointer"
          >
            {lang}
          </li>
        ))}
      </ul>
    </div>
  );
}

LanguageSwitcher.displayName = "LanguageSwitcher";

export default LanguageSwitcher;
