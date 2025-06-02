import { Metadata } from "next";

import { HomePage } from "@/app/components";

export const metadata: Metadata = {
  title: "Главная | Floristman - Яркие моменты вашей жизни",
  description: "Идеальные букеты для любого повода и бюджета.",
};

export default function HomeRoute() {
  return <HomePage />;
}
