"use client";

import React from "react";
import Image from "next/image";
import Button from "./Button";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className="px-4 xl:px-0 xl:max-w-[1024px] mt-[34px] xl:mt-[62px] mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-4">
      <div className="w-full md:w-1/2">
        <h3 className="text-4xl font-semibold">
          Kazbek is{" "}
          <span className="text-[var(--primary)]">Full-Stack developer</span>
        </h3>
        <p className="text-[var(--gray)] mt-8 mb-6">
          {
            "He builds responsive websites so smooth, even your grandma's Internet Explorer might shed a tear"
          }
        </p>
        <Button href="/contacts">Contact me!!</Button>
      </div>

      <div className="w-full h-auto sm:w-[70%] md:w-1/2 flex flex-col justify-center items-center">
        <div className="relative w-full">
          <Image
            src="./assets/images/icons/logo.svg"
            alt="Decor"
            width={0}
            height={0}
            sizes="100vw"
            className="w-[45%] h-auto absolute mt-[15%] ml-[-5%] z-1"
          />
          <Image
            src="./assets/images/icons/dots.svg"
            alt="Decor"
            width={0}
            height={0}
            sizes="100vw"
            className="w-[25%] h-auto absolute mt-[55%] ml-[70%] z-3"
          />
          <Image
            src="./assets/images/hero.png"
            alt="Person"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto relative border-b border-[var(--primary)] z-2"
          />
        </div>
        <div className="border border-[var(--gray)] p-2 flex gap-2.5 items-center">
          <span className="border w-4 h-4 inline-block bg-[var(--opacity)] border-[var(--primary)]"></span>
          <span className="flex text-[var(--gray)] font-medium">
          Currently&ensp;
            <TypeAnimation
              sequence={[
                "Fixing Bugs",
                1100,
                "Working on Portfolio",
                1200,
                "Job Hunting Mode: ON",
                1300,
                "Just living life",
                1200,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "16px", color: "var(--white)", display: "inline-block" }}
              repeat={Infinity}
            />
          </span>
        </div>
      </div>
    </section>
  );
}

Hero.displayName = "Hero";

export default Hero;
