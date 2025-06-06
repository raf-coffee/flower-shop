import { CatalogPage } from "@/app/components/pages";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Подарки | Floristman - Яркие моменты вашей жизни",
  description: "Идеальные подарки для любого повода и бюджета.",
};

export default function GiftsRoute() {
  return <CatalogPage type="gifts" />;
}
