import React from "react";
import Link from "next/link";

const Logo = React.memo(() => {
  return (
    <Link href="/" className="flex items-center space-x-2 z-100">
      <img
        src="/assets/images/icons/default.svg"
        alt="Logo"
        className="h-4 w-4"
      />
      <span className="text-l font-bold">Kazbek</span>
    </Link>
  );
});

export default Logo;
