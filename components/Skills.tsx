import React from "react";
import Title from "./Title";
import Card from "./Card";
import Image from "next/image";

const cardList = [
  {
    title: "Languages",
    subtitle: " JavaScript TypeScript Python C++",
  },
  {
    title: "Databases",
    subtitle: "SQLite PostgreSQL MongoDB",
  },
  {
    title: "Tools",
    subtitle: "VSCode Figma Git",
  },
  {
    title: "Other",
    subtitle: "HTML5 CSS3 Scss Tailwind Bootstrap",
  },
  {
    title: "Frameworks",
    subtitle: "NextJs ThreeJS ~React ~Aiogram",
  },
];

function Skills() {
  return (
    <section className="flex flex-col mt-26 md:flex-row px-4 xl:px-0 xl:max-w-[1024px] mx-auto gap-5 md:gap-10">
      <div className="relative w-full md:w-2/5 flex items-start">
        <Title>skills</Title>
        <span className="absolute inline-block mt-70 ml-70 w-21 h-21 border border-[var(--gray)]"></span>
        <span className="absolute inline-block mt-30 ml-15 w-13 h-13 border border-[var(--gray)]"></span>

        <div className="absolute mt-50 ml-60">
          <Image
            src="./assets/images/icons/dots.svg"
            alt="."
            width={63}
            height={63}
          />
        </div>
        <div className="absolute mt-15 ml-70">
          <Image
            src="./assets/images/icons/dots.svg"
            alt="."
            width={63}
            height={63}
          />
        </div>
        <div className="absolute mt-65 ml-15">
          <Image
            src="./assets/images/icons/logo.svg"
            alt="."
            width={113}
            height={113}
          />
        </div>
      </div>

      <div className="mt-0 md:mt-22 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full md:w-3/5 items-start justify-end">
        {cardList.map((card, index: number) => {
          return (
            <Card title={card.title} subtitle={card.subtitle} type={2} key={index} />
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
