import {
  BalloonsCatalogCover,
  FlowersCatalogCover,
  GiftsCatalogCover,
  // AccsessoriesCatalogCover,
  // FruitSweetsCatalogCover,
  // IndoorPlantsCatalogCover,
  // ServicesCatalogCover,
  SweetsCatalogCover,
} from "@/static/categories";

const rawMenuLinks = [
  { title: "Цветы", slug: "flowers", img: FlowersCatalogCover },
  { title: "Сладости", slug: "sweets", img: SweetsCatalogCover },
  { title: "Воздушные шары", slug: "balloons", img: BalloonsCatalogCover },
  { title: "Подарки", slug: "gifts", img: GiftsCatalogCover },
  // {
  //   title: "Аксессуары",
  //   slug: "accessories",
  //   img: AccsessoriesCatalogCover,
  // },
  // {
  //   title: "Услуги",
  //   slug: "services",
  //   img: ServicesCatalogCover,
  // },
  // {
  //   title: "Фруктовые сладости",
  //   slug: "fruit-sweets",
  //   img: FruitSweetsCatalogCover,
  // },
  //   {
  //     title: "Комнатные растения",
  //     slug: "indoor-plants",
  //     img: IndoorPlantsCatalogCover,
  //   },
];

export const MENU_LINKS = rawMenuLinks.map((item) => ({
  ...item,
  href: `/catalog/${item.slug}`,
}));

export const API_LINK = `${process.env.NEXT_PUBLIC_API_URL}`;
