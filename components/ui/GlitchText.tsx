import React from "react";
import { cn } from "@/lib/utils";

interface GlitchTextProps {
  text: string;
  className?: string; 
  as?: React.ElementType;
}

const GlitchText = ({
  text,
  className,
  as: Component = "h1",
}: GlitchTextProps) => {
  return (
    <Component className={cn("glitch-wrapper", className)}>
      <span className="glitch relative block" data-text={text}>
        {text}
      </span>
    </Component>
  );
};

export default GlitchText;
