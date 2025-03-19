"use client";

import { IconMenu2, IconX } from "@tabler/icons-react";
import { useState } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => setIsOpen(!isOpen);

  return (
    <nav className="flex">
      <button onClick={handleIsOpen}>
        {isOpen ? <IconX /> : <IconMenu2 />}
      </button>
      {isOpen && (
        <ul className="absolute left-0 right-0 top-16 z-10 bg-main-pink-400 font-montserrat font-medium">
          <li className="border-b-2 border-b-main-pink-600 p-4">Цветы</li>
          <li className="border-b-2 border-b-main-pink-600 p-4">Сладости</li>
          <li className="border-b-2 border-b-main-pink-600 p-4">Подарки</li>
          <li className="border-b-2 border-b-main-pink-600 p-4">
            Воздушные шарики
          </li>
        </ul>
      )}
    </nav>
  );
}
