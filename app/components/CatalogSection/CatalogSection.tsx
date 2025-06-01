import Link from "next/link";
import Image from "next/image";

import {
  BalloonsCatalogCover,
  BouquetsCatalogCover,
  GiftsAltCatalogCover,
  IndoorPlantsAltCatalogCover,
  RosesCatalogCover,
  SweetsAltCatalogCover,
} from "@/static/categories";
import { Container, Heading } from "../ui";
import { twMerge } from "tailwind-merge";
import CatalogCardOverlay from "../CatalogCardOverlay/CatalogCardOverlay";
import { Decor1, Decor2 } from "@/static/decor";

const CATALOG_SECTION_ITEMS = [
  {
    text: "Розы",
    href: "/roses",
    img: RosesCatalogCover,
    gridPosition: "lg:col-start-2 lg:col-end-4 lg:row-start-4 lg:row-end-5",
    overlayStyle: "verticalRight",
  },
  {
    text: "Букеты",
    href: "/bouquets",
    img: BouquetsCatalogCover,
    gridPosition: "lg:col-start-2 lg:col-end-4 lg:row-start-2 lg:row-end-4",
    overlayStyle: "vertical",
  },
  {
    text: "Комнатные растения",
    href: "/indoor-plants",
    img: IndoorPlantsAltCatalogCover,
    gridPosition: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    text: "Подарки",
    href: "/gifts",
    img: GiftsAltCatalogCover,
    gridPosition: "lg:col-start-2 lg:col-end-4 lg:row-start-1 lg:row-end-2",
    overlayStyle: "verticalRight",
  },
  {
    text: "Сладости",
    href: "/sweets",
    img: SweetsAltCatalogCover,
    gridPosition: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-5",
  },
  {
    text: "Воздушные шары",
    href: "/balloons",
    img: BalloonsCatalogCover,
    gridPosition: "lg:col-start-4 lg:col-end-5 lg:row-start-1 lg:row-end-3",
  },
];

function CatalogSection() {
  return (
    <section className="relative bg-main-pink-400 p-4 lg:p-6">
      <Image
        src={Decor1}
        className="absolute -left-10 top-[150px] hidden md:block"
        alt="Декоративный элемент."
      />
      <Image
        src={Decor2}
        className="absolute -right-10 top-[710px] hidden md:block"
        alt="Декоративный элемент."
      />
      <Container>
        <Heading level={2} className="mb-6">
          Каталог
        </Heading>
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:[grid-template-rows:210px_130px_130px_210px]">
          {CATALOG_SECTION_ITEMS.map(
            ({ text, href, img, gridPosition, overlayStyle }) => (
              <Link
                className={twMerge(
                  "relative min-h-[140px] bg-main-pink-400 md:min-h-[210px]",
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
                  <CatalogCardOverlay
                    type={overlayStyle as "vertical" | "verticalRight"}
                  >
                    {text}
                  </CatalogCardOverlay>
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
