import {
  BalloonsCatalogCover,
  FlowersCatalogCover,
  GiftsCatalogCover,
  AccsessoriesCatalogCover,
  FruitSweetsCatalogCover,
  IndoorPlantsCatalogCover,
  // ServicesCatalogCover,
  SweetsCatalogCover,
} from "@/static/categories";
import { isValidPhoneNumber } from "libphonenumber-js/max";
import z from "zod";

const rawMenuLinks = [
  { title: "Цветы", slug: "flowers", img: FlowersCatalogCover },
  { title: "Сладости", slug: "sweets", img: SweetsCatalogCover },
  { title: "Воздушные шары", slug: "baloons", img: BalloonsCatalogCover },
  { title: "Подарки", slug: "gifts", img: GiftsCatalogCover },
  {
    title: "Фруктовые корзины",
    slug: "fruit-carts",
    img: FruitSweetsCatalogCover,
  },
  {
    title: "Комнатные растения",
    slug: "indoor-plants",
    img: IndoorPlantsCatalogCover,
  },
  {
    title: "Аксессуары",
    slug: "accessories",
    img: AccsessoriesCatalogCover,
  },
  // {
  //   title: "Услуги",
  //   slug: "services",
  //   img: ServicesCatalogCover,
  // },
  { title: "Контакты", slug: "contacts", img: null },
];

export const MENU_LINKS = rawMenuLinks.map((item) => ({
  ...item,
  href: item.img ? `/catalog/${item.slug}` : `/${item.slug}`,
}));

const PAGE_PATHS_TRANSLATIONS: Record<string, string> = {
  "/": "Главная",
  catalog: "Каталог",
  contacts: "Контакты",
  flowers: "Цветы",
  sweets: "Сладости",
  baloons: "Воздушные шары",
  gifts: "Подарки",
  accessories: "Аксессуары",
  services: "Услуги",
  "fruit-carts": "Фруктовые корзины",
  "indoor-plants": "Комнатные растения",
};

const BREADCRUMBS_SEPARATOR = "/";

const formSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Имя должно содержать как минимум 1 символ" }),
  phone: z.string().refine((value) => isValidPhoneNumber(value, "RU"), {
    message: "Неправильный номер телефона",
  }),
  desc: z
    .string()
    .min(1, { message: "Сообщение должно содержать как минимум 1 символ" }),
});

export type FormSchema = z.infer<typeof formSchema>;

export { PAGE_PATHS_TRANSLATIONS, BREADCRUMBS_SEPARATOR, formSchema };
