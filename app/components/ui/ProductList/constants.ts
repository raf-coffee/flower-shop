import {
  BalloonsCatalogCover,
  BouquetsCatalogCover,
  GiftsAltCatalogCover,
  IndoorPlantsAltCatalogCover,
  RosesCatalogCover,
  SweetsAltCatalogCover,
} from "@/static/categories";

const CATEGORIES_LIST = [
  {
    text: "Розы",
    href: "/catalog/flowers",
    img: RosesCatalogCover,
    gridPosition: "lg:col-start-2 lg:col-end-4 lg:row-start-4 lg:row-end-5",
    overlayStyle: "verticalRight",
  },
  {
    text: "Букеты",
    href: "/catalog/flowers",
    img: BouquetsCatalogCover,
    gridPosition: "lg:col-start-2 lg:col-end-4 lg:row-start-2 lg:row-end-4",
    overlayStyle: "vertical",
  },
  {
    text: "Комнатные растения",
    href: "/catalog/flowers",
    img: IndoorPlantsAltCatalogCover,
    gridPosition: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    text: "Подарки",
    href: "/catalog/gifts",
    img: GiftsAltCatalogCover,
    gridPosition: "lg:col-start-2 lg:col-end-4 lg:row-start-1 lg:row-end-2",
    overlayStyle: "verticalRight",
  },
  {
    text: "Сладости",
    href: "/catalog/sweets",
    img: SweetsAltCatalogCover,
    gridPosition: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-5",
  },
  {
    text: "Воздушные шары",
    href: "/catalog/baloons",
    img: BalloonsCatalogCover,
    gridPosition: "lg:col-start-4 lg:col-end-5 lg:row-start-1 lg:row-end-3",
  },
];

export default CATEGORIES_LIST;
