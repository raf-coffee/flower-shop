import { CatalogPage } from "@/app/components/pages";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Аксессуары | Floristman - Яркие моменты вашей жизни",
  description: "Идеальные аксессуары для любого повода и бюджета.",
};

export default function AccessoriesRoute() {
  return <CatalogPage type="accessories" />;
}
