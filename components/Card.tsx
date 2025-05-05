import Image from "next/image";
import React from "react";
import Button from "./Button";

type CardButton = {
  text: string;
  href: string;
};

type CardProps = {
  images?: string;
  stacks?: string[];
  title: string;
  subtitle: string;
  buttons?: Array<CardButton>;
  type?: number;
};

function Card({
  images,
  stacks,
  title,
  subtitle,
  buttons,
  type = 1,
}: CardProps) {
  return (
    <div className="w-full border border-b-0 border-[var(--gray)] overflow-hidden bg-[var(--background)] z-20">
      {images && (
        <div className="relative w-full h-[200px] border-b border-[var(--gray)]">
          <Image
            src={`./assets/images/${images}`}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {stacks && (
        <div className="flex gap-2 p-2 flex-wrap border-b border-[var(--gray)]">
          {stacks.map((item: string, index: number) => {
            return (
              <span key={index} className="text-[var(--gray)]">
                {item}
              </span>
            );
          })}
        </div>
      )}

      <div
        className={`${
          type === 2 && "py-1 text-[16px]"
        } text-2xl pt-2 w-full font-semibold px-4`}
      >
        {title}
      </div>
      <div
        className={`${
          type === 2 && "border-t border-[var(--gray)]"
        } border-b border-[var(--gray)] flex flex-col py-2 px-4 gap-4`}
      >
        <span className={`text-[var(--gray)] ${type === 2 && "text-sm"}`}>
          {subtitle}
        </span>

        {buttons && (
          <div className="flex flex-wrap gap-4">
            {buttons.map((item, index: number) => (
              <Button key={index} href={item.href}>
                {item.text}
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
