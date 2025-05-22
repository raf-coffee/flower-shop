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

const MENU_LINKS = [
  {
    text: "Цветы",
    href: "/catalog/flowers",
    img: FlowersCatalogCover,
  },
  {
    text: "Сладости",
    href: "/catalog/sweets",
    img: SweetsCatalogCover,
  },
  {
    text: "Воздушные шары",
    href: "/catalog/balloons",
    img: BalloonsCatalogCover,
  },
  {
    text: "Подарки",
    href: "/catalog/gifts",
    img: GiftsCatalogCover,
  },
  // {
  //   text: "Аксессуары",
  //   href: "/accessories",
  //   img: AccsessoriesCatalogCover,
  // },
  // {
  //   text: "Услуги",
  //   href: "/services",
  //   img: ServicesCatalogCover,
  // },
  // {
  //   text: "Фруктовые сладости",
  //   href: "/fruit-sweets",
  //   img: FruitSweetsCatalogCover,
  // },
  //   {
  //     text: "Комнатные растения",
  //     href: "/indoor-plants",
  //     img: IndoorPlantsCatalogCover,
  //   },
];

export default MENU_LINKS;
