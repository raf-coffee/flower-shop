import { SuccessPage } from "@/app/components/pages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Успешно отправлено! | Floristman - Яркие моменты вашей жизни",
  description: "Идеальные букеты для любого повода и бюджета.",
};

export default function SuccessRoute() {
  return <SuccessPage />;
}
