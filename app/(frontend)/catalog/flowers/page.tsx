import { CatalogPage } from "@/app/components/pages";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Цветы | Floristman - Яркие моменты вашей жизни",
  description: "Идеальные цветы для любого повода и бюджета.",
};

export default function FlowersRoute() {
  return <CatalogPage type="flowers" />;
}
