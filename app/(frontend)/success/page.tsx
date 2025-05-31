import { Metadata } from "next";

import Hero from "@/app/components/Hero/Hero";
import { Button } from "@/app/components/ui";

export const metadata: Metadata = {
  title: "Успешно отправлено! | Floristman - Яркие моменты вашей жизни",
  description: "Идеальные букеты для любого повода и бюджета.",
};

export default function FormSuccess() {
  return (
    <div className="bg-main-pink-300">
      <Hero
        heading="Письмо успешно отправлено"
        description="Мы свяжемся с вами в течение 15 минут."
      >
        <a href={"/"} className="hidden w-fit lg:block">
          <Button size="large">Вернуться на главную</Button>
        </a>
      </Hero>
    </div>
  );
}
