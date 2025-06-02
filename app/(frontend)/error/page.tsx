import { Metadata } from "next";

import { ErrorPage } from "@/app/components";

export const metadata: Metadata = {
  title: "Что-то пошло не так... | Floristman - Яркие моменты вашей жизни",
  description: "Идеальные букеты для любого повода и бюджета.",
};

export default function ErrorRoute() {
  return <ErrorPage />;
}
