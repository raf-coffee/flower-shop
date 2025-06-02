"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { IconMenu2, IconX } from "@tabler/icons-react";

import NavLink from "@/app/components/ui/NavLink";
import { MENU_LINKS } from "@/constants";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  const handleIsOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    setIsOpen(false);
  }, [path]);

  return (
    <nav className="mr-2 flex sm:hidden">
      <button onClick={handleIsOpen}>
        {isOpen ? <IconX /> : <IconMenu2 />}
      </button>
      {isOpen && (
        <ul className="absolute left-0 right-0 top-16 z-30 bg-main-pink-400">
          {MENU_LINKS.map(({ href, title }) => (
            <NavLink
              href={href}
              variant="mobile"
              isActive={path === href}
              key={title}
            >
              {title}
            </NavLink>
          ))}
        </ul>
      )}
    </nav>
  );
}
