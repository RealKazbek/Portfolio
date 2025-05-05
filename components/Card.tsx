import Image from "next/image";
import React from "react";
import Button from "./Button";

type CardProps = {
  images?: string;
  stacks?: string[];
  title: string;
  subtitle: string;
  buttons?: string[];
};

function Card({ images, stacks, title, subtitle, buttons }: CardProps) {
  return (
    <div className="ml-15 w-[330px] border border-b-0 border-[var(--gray)] rounded overflow-hidden shadow-sm">
      {images && (
        <div className="relative w-full h-[200px] border-b border-[var(--gray)]">
          <Image
            src={images}
            alt={title}
            fill
            className="object-cover"
            sizes="330px"
          />
        </div>
      )}

      {stacks && (
        <div className="flex gap-2 p-2 flex-wrap border-b border-[var(--gray)]">
          {stacks.map((item: string, index: number) => {
            return <span key={index}>{item}</span>;
          })}
        </div>
      )}
      <div className="border-b border-[var(--gray)] flex flex-col p-4 gap-4">
        <span className="font-medium text-2xl">{title}</span>
        <span className="text-[var(--gray)]">{subtitle}</span>

        {buttons && (
          <div className="flex flex-wrap gap-4">
            {buttons.map((item: string, index: number) => {
              return <Button key={index}>{item}</Button>;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
