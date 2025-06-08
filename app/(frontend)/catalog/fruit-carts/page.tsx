import { CatalogPage } from "@/app/components/pages";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Цветы | Floristman - Яркие моменты вашей жизни",
  description: "Идеальные фруктовые корзины для любого повода и бюджета.",
};

export default function FruitCartsRoute() {
  return <CatalogPage type="fruitCarts" />;
}
