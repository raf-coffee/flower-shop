import { Metadata } from "next";
import { SuccessPage } from "@/app/components";

export const metadata: Metadata = {
  title: "Успешно отправлено! | Floristman - Яркие моменты вашей жизни",
  description: "Идеальные букеты для любого повода и бюджета.",
};

export default function SuccessRoute() {
  return <SuccessPage />;
}
