import React from "react";
import Title from "./Title";
import Card from "./Card";
import Image from "next/image";

const cardList = [
  {
    title: "ChertNodes",
    subtitle: "Minecraft servers hosting ",
    images: "chertNodes.png",
    stacks: ["HTML", "SCSS", "Python", "Flask"],
    buttons: ["Live <~>", "Cached >="],
  },
  {
    title: "ProtectX",
    subtitle: "Discord anti-crash bot",
    images: "protectX.png",
    stacks: [
      "React",
      "Express",
      "Discord.js",
      "Flask",
      "Node.js",
      "HTML",
      "SCSS",
      "Python",
    ],
    buttons: ["Live <~>"],
  },
  {
    title: "Kahoot Answers Viewer",
    subtitle: "Get answers to your kahoot quiz",
    images: "kahoot.png",
    stacks: ["CSS", "Express", "Node.js"],
    buttons: ["Live <~>"],
  },
];

function Projects() {
  return (
    <section className="flex justify-end relative overflow-hidden">
      <span className="absolute inline-block w-40 h-40 border border-[var(--gray)] mt-50 -mr-38 xl:-mr-25"></span>

      <div className="mt-18 px-4 xl:px-0 xl:max-w-[1024px] mx-auto py-4 gap-12 flex flex-col">
        <Title href="projects">projects</Title>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-start">
          {cardList.map((card, index: number) => {
            return (
              <Card
                title={card.title}
                subtitle={card.subtitle}
                images={card.images}
                stacks={card.stacks}
                buttons={card.buttons}
                key={index}
              />
            );
          })}
        </div>
      </div>

      <div className="absolute mt-100 mr-[99%] xl:mr-[94%] w-28 h-28">
        <Image
          src="./assets/images/icons/dots.svg"
          alt="."
          width={112}
          height={112}
        />
      </div>
    </section>
  );
}

export default Projects;
