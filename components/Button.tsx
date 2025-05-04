import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

function Button({ href, children, className = "", ...props }: ButtonProps) {
  const baseClass =
    "border border-[var(--primary)] py-2 px-4 font-medium transition-colors duration-300 ease-in-out hover:bg-[var(--opacity)]";

  return (
    <a href={href} className={`${baseClass} ${className}`} {...props}>
      {children}
    </a>
  );
}

Button.displayName = "Button";

export default Button;
