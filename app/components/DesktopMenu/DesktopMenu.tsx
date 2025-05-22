"use client";

import { usePathname } from "next/navigation";
import NavLink from "../ui/NavLink/NavLink";

import MENU_LINKS from "../constants";

export default function DesktopMenu() {
  const path = usePathname();

  return (
    <nav className="hidden bg-main-pink-400 sm:flex sm:items-stretch sm:justify-between">
      {MENU_LINKS.map(({ href, text }) => (
        <NavLink
          href={href}
          variant="desktop"
          isActive={path.includes(href)}
          key={text}
        >
          {text}
        </NavLink>
      ))}
    </nav>
  );
}
