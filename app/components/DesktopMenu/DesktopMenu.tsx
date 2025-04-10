"use client";

import { usePathname } from "next/navigation";
import NavLink from "../ui/NavLink/NavLink";

export default function DesktopMenu() {
  const path = usePathname();

  return (
    <nav className="hidden bg-main-pink-400 sm:flex sm:items-stretch sm:justify-between">
      <NavLink href={"/"} variant="desktop" isActive={path === "/"}>
        Главная
      </NavLink>
      <NavLink href={"/"} variant="desktop" isActive={path === ""}>
        Цветы
      </NavLink>
      <NavLink href={"/"} variant="desktop" isActive={path === ""}>
        Сладости
      </NavLink>
      <NavLink href={"/"} variant="desktop" isActive={path === ""}>
        Подарки
      </NavLink>
      <NavLink href={"/"} variant="desktop" isActive={path === ""}>
        Воздушные шарики
      </NavLink>
      <NavLink
        href="/contacts"
        variant="desktop"
        isActive={path === "/contacts"}
      >
        Контакты
      </NavLink>
    </nav>
  );
}
