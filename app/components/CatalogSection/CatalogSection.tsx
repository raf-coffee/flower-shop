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
import { twMerge } from "tailwind-merge";

const CATALOG_SECTION_ITEMS = [
  {
    text: "Розы",
    href: "/roses",
    img: RosesCatalogCover,
    gridPosition: "lg:col-start-2 lg:col-end-4 lg:row-start-4 lg:row-end-5",
    labelStyles: "",
  },
  {
    text: "Букеты",
    href: "/bouquets",
    img: BouquetsCatalogCover,
    gridPosition: "lg:col-start-2 lg:col-end-4 lg:row-start-2 lg:row-end-4",
    labelStyles: "",
  },
  {
    text: "Комнатные растения",
    href: "/indoor-plants",
    img: IndoorPlantsAltCatalogCover,
    gridPosition: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    labelStyles: "",
  },
  {
    text: "Подарки",
    href: "/gifts",
    img: GiftsAltCatalogCover,
    gridPosition: "lg:col-start-2 lg:col-end-4 lg:row-start-1 lg:row-end-2",
    labelStyles: "",
  },
  {
    text: "Сладости",
    href: "/sweets",
    img: SweetsAltCatalogCover,
    gridPosition: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-5",
    labelStyles: "",
  },
  {
    text: "Воздушные шары",
    href: "/balloons",
    img: BalloonsCatalogCover,
    gridPosition: "lg:col-start-4 lg:col-end-5 lg:row-start-1 lg:row-end-3",
    labelStyles: "",
  },
];

function CatalogSection() {
  return (
    <section className="bg-main-pink-400 p-4 lg:p-6">
      <Container>
        <Heading level={2} className="mb-6">
          Каталог
        </Heading>
        <ul className="grid grid-cols-2 gap-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-4">
          {CATALOG_SECTION_ITEMS.map(
            ({ text, href, img, gridPosition, labelStyles }) => (
              <Link
                className={twMerge(
                  "relative min-h-[140px] bg-main-pink-400 md:min-h-[170px]",
                  gridPosition,
                )}
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
                  <div
                    className={twMerge(
                      "absolute bottom-0 flex h-[40px] w-full items-center justify-center rounded-t-[10px] bg-soft-white-transparent lg:h-[95px]",
                      labelStyles,
                    )}
                  >
                    <Text className="text-center" size={TextSize.SMALL}>
                      {text}
                    </Text>
                  </div>
                </li>
              </Link>
            ),
          )}
        </ul>
      </Container>
    </section>
  );
}

export default CatalogSection;
