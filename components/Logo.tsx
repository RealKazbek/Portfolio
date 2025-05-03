import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = React.memo(() => {
  return (
    <Link href="/" className="flex items-center space-x-2 z-100">
      <Image
        src="./assets/images/icons/default.svg"
        alt="Logo"
        className="h-4 w-4"
      />
      <span className="text-l font-bold">Kazbek</span>
    </Link>
  );
});

Logo.displayName = "Logo";

export default Logo;
