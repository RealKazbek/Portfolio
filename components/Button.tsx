import React from "react";
import Link from "next/link";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  children: React.ReactNode;
  className?: string;
}

function Button({ href = "/", children, className = "", ...props }: ButtonProps) {
  const baseClass =
    "border border-[var(--primary)] py-2 px-4 font-medium transition-colors duration-300 ease-in-out active:bg-[var(--opacity)] hover:bg-[var(--opacity)]";

  return (
    <a href={href} target="_blank">
      <span className={`inline-block ${baseClass} ${className}`} {...props}>
        {children}
      </span>
    </a>
  );
}

Button.displayName = "Button";

export default Button;
