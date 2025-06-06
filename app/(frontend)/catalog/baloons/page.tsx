import { CatalogPage } from "@/app/components/pages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Воздушные шары | Floristman - Яркие моменты вашей жизни",
  description: "Идеальные воздушные шары для любого повода и бюджета.",
};

export default function BalloonsRoute() {
  return <CatalogPage type="baloons" />;
}
