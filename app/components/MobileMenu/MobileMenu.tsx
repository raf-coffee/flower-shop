"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { IconMenu2, IconX } from "@tabler/icons-react";
import NavLink from "../ui/NavLink/NavLink";

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
        <div className="absolute left-0 right-0 top-16 z-10 bg-main-pink-400">
          <NavLink href={"/"} variant="mobile" isActive={path === "/"}>
            Главная
          </NavLink>
          <NavLink href={"/"} variant="mobile" isActive={path === ""}>
            Цветы
          </NavLink>
          <NavLink href={"/"} variant="mobile" isActive={path === ""}>
            Сладости
          </NavLink>
          <NavLink href={"/"} variant="mobile" isActive={path === ""}>
            Подарки
          </NavLink>
          <NavLink href={"/"} variant="mobile" isActive={path === ""}>
            Воздушные шарики
          </NavLink>
          <NavLink
            href="/contacts"
            variant="mobile"
            isActive={path === "/contacts"}
          >
            Контакты
          </NavLink>
        </div>
      )}
    </nav>
  );
}
