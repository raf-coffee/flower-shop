import { CatalogPage } from "@/app/components/pages";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Комнатные растения | Floristman - Яркие моменты вашей жизни",
  description: "Идеальные комнатные растения для любого повода и бюджета.",
};

export default function IndoorPlantsRoute() {
  return <CatalogPage type="indoors" />;
}
