import Link from "next/link";
import Logo from "../Logo/Logo";
import { Container, TextSize, Text } from "../ui";
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

function CatalogNavigation() {
  return (
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
                <div className="absolute bottom-0 flex h-[40px] w-full items-center justify-center rounded-t-[10px] bg-soft-white-transparent lg:h-[95px]">
                  <Text className="text-center" size={TextSize.SMALL}>
                    {text}
                  </Text>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default CatalogNavigation;
