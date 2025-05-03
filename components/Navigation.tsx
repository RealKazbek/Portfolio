import React from "react";
import Link from "next/link";

function Navigation({
  navItems,
  pathname,
}: {
  navItems: Array<string>;
  pathname: string;
}) {
  return (
    <ul className="flex space-x-8">
      {navItems.map((item: string, index: number) => {
        const href = `/${item === "home" ? "" : item}`;
        const isActive =
          pathname === href || (item === "home" && pathname === "/");
        return (
          <li key={index}>
            <Link
              href={href}
              className={`text-l font-normal hover:text-[var(--white)] focus:text-[var(--white)] ${
                isActive
                  ? "text-[var(--white)] font-semibold"
                  : "text-[var(--gray)]"
              }`}
            >
              <span className="text-[var(--primary)]">#</span>
              {item}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

Navigation.displayName = "Navigation";

export default Navigation;