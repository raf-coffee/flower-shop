import { Metadata } from "next";

import Hero from "@/app/components/Hero/Hero";
import { Button } from "@/app/components/ui";

export const metadata: Metadata = {
  title: "Что-то пошло не так... | Floristman - Яркие моменты вашей жизни",
  description: "Идеальные букеты для любого повода и бюджета.",
};

export default function FormError() {
  return (
    <div className="bg-main-pink-300">
      <Hero
        heading="Что-то не так :("
        description="Обновите страницу и попробуйте еще раз."
      >
        <a href={"/"} className="hidden w-fit lg:block">
          <Button size="large">Вернуться на главную</Button>
        </a>
      </Hero>
    </div>
  );
}
