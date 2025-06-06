import { CatalogPage } from "@/app/components/pages";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Сладости | Floristman - Яркие моменты вашей жизни",
  description: "Сладости для любого повода и бюджета.",
};

export default function SweetsRoute() {
  return <CatalogPage type="sweets" />;
}
