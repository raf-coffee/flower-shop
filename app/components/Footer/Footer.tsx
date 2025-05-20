import { IconPhoneCall, IconMailFilled } from "@tabler/icons-react";
import SocialList from "../SocialList/SocialList";

import Link from "next/link";
import Logo from "../Logo/Logo";
import { Container } from "../ui";
import {
  AccsessoriesCatalogCover,
  BalloonsCatalogCover,
  FlowersCatalogCover,
  FruitSweetsCatalogCover,
  GiftsCatalogCover,
  IndoorPlantsCatalogCover,
  ServicesCatalogCover,
  SweetsCatalogCover,
} from "@/static/categories";
import CatalogCardOverlay from "../CatalogCardOverlay/CatalogCardOverlay";

const CATALOG_LINKS = [
  {
    text: "Цветы",
    href: "/flowers",
    img: FlowersCatalogCover,
  },
  {
    text: "Сладости",
    href: "/sweets",
    img: SweetsCatalogCover,
  },
  {
    text: "Воздушные шары",
    href: "/balloons",
    img: BalloonsCatalogCover,
  },
  {
    text: "Подарки",
    href: "/gifts",
    img: GiftsCatalogCover,
  },
  {
    text: "Аксессуары",
    href: "/accessories",
    img: AccsessoriesCatalogCover,
  },
  {
    text: "Услуги",
    href: "/services",
    img: ServicesCatalogCover,
  },
  {
    text: "Фруктовые сладости",
    href: "/fruit-sweets",
    img: FruitSweetsCatalogCover,
  },
  {
    text: "Комнатные растения",
    href: "/indoor-plants",
    img: IndoorPlantsCatalogCover,
  },
];

export default function Footer() {
  return (
    <footer className="bg-main-pink-300">
      <section>
        <Container className="py-5">
          <div className="mb-5 flex items-center justify-center">
            <Logo />
          </div>
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-4 lg:grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
            {CATALOG_LINKS.map(({ text, href, img }) => (
              <Link
                className="relative min-h-[140px] bg-main-pink-400 lg:min-h-[360px]"
                href={href}
                key={text}
              >
                <li
                  className="relative h-full w-full"
                  style={{
                    backgroundImage: `url(${img.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <CatalogCardOverlay>{text}</CatalogCardOverlay>
                </li>
              </Link>
            ))}
          </ul>
        </Container>
      </section>
      <div className="justify-centr flex flex-col items-center p-4 font-medium md:p-10 md:pb-4 lg:p-14 lg:pb-12">
        <h2 className="mb-2 md:mb-4 md:text-2xl lg:mb-6 lg:pt-1 lg:text-4xl">
          Контакты:
        </h2>
        <a
          href="tel:+7495111111"
          className="mb-2 flex items-center md:text-lg lg:mb-1.5 lg:text-2xl"
        >
          <IconPhoneCall className="me-1 text-icons-pink" />
          +749512345678
        </a>
        <a
          href="tel:+7495111111"
          className="mb-2 flex items-center md:text-lg lg:mb-7 lg:text-2xl"
        >
          <IconMailFilled className="me-1 text-icons-pink" />
          flowermail@gmail.com
        </a>
        <SocialList className="mb-2 md:mb-4 lg:mb-8" />
        <p>&copy; {new Date().getFullYear()}. Все права защищены</p>
      </div>
    </footer>
  );
}
