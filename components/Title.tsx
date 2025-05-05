import React from "react";
import Link from "next/link";

type TitleProps = {
  href?: string;
  children: string;
}

function Title({ href, children }: TitleProps) {
  return (
    <div className="px-4 xl:px-0 w-full xl:max-w-[1024px] mx-auto flex justify-between items-center font-medium">
      <div className="flex items-center text-3xl lowercase flex-1">
        <span className="text-[var(--primary)]">#</span>
        <span>{children}</span>
        <span className="ml-4 mr-[20%] flex-grow h-0.5 bg-[var(--primary)]"></span>
      </div>

      {href && (
        <Link
          href={`/${href}`}
          className="text-right text-sm hover:text-[var(--primary)] hover:animate-pulse transition duration-300 ease-in-out ml-4"
        >
          View all &rarr;
        </Link>
      )}
    </div>
  );
}

export default Title;
