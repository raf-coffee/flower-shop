import Link from "next/link";

import {
  BalloonsCatalogCover,
  BouquetsCatalogCover,
  GiftsAltCatalogCover,
  IndoorPlantsAltCatalogCover,
  RosesCatalogCover,
  SweetsAltCatalogCover,
} from "@/static/categories";
import { Container, Heading, TextSize, Text } from "../ui";

const CATALOG_SECTION_ITEMS = [
  {
    text: "Розы",
    href: "/roses",
    img: RosesCatalogCover,
  },
  {
    text: "Букеты",
    href: "/bouquets",
    img: BouquetsCatalogCover,
  },
  {
    text: "Комнатные растения",
    href: "/indoor-plants",
    img: IndoorPlantsAltCatalogCover,
  },
  {
    text: "Подарки",
    href: "/gifts",
    img: GiftsAltCatalogCover,
  },
  {
    text: "Сладости",
    href: "/sweets",
    img: SweetsAltCatalogCover,
  },
  {
    text: "Воздушные шары",
    href: "/balloons",
    img: BalloonsCatalogCover,
  },
];

function CatalogNavigation() {
  return (
    <section className="bg-main-pink-400 p-4">
      <Container>
        <Heading level={1} className="mb-6">
          Каталог
        </Heading>
        <ul className="grid">
          {CATALOG_SECTION_ITEMS.map(({ text, href, img }) => (
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
