import Hero from "@/app/components/Hero/Hero";
import Sales from "@/app/components/Sales/Sales";
import WhyUs from "@/app/components/WhyUs/WhyUs";
import Form from "@/app/components/OrderForm/OrderForm";
import Delivery from "@/app/components/Delivery/Delivery";
import { Button } from "@/app/components/ui";
import CatalogSection from "@/app/components/CatalogSection/CatalogSection";
import { Metadata } from "next";
import { LeadSectionContainer } from "@/app/components/ui";

export const metadata: Metadata = {
  title: "Главная | Floristman - Яркие моменты вашей жизни",
  description: "Идеальные букеты для любого повода и бюджета.",
};

export default function Home() {
  return (
    <div className="bg-main-pink-300">
      <Hero
        heading="Собираем букеты, созданные для Вас"
        description="Подарите ощущение праздника"
      >
        <a href={"/catalog/flowers"} className="hidden w-fit lg:block">
          <Button size="large">Выбрать букет</Button>
        </a>
      </Hero>
      <LeadSectionContainer>
        <Sales />
      </LeadSectionContainer>
      <WhyUs />
      <CatalogSection />
      <Delivery />
      <Form />
    </div>
  );
}
