import Image from "next/image";

import { Decor1, Decor2 } from "@/static/decor";

import Hero from "@/app/components/ui/Hero/Hero";
import Sales from "@/app/components/ui/Sales/Sales";
import WhyUs from "@/app/components/ui/WhyUs/WhyUs";
import OrderForm from "@/app/components/forms/OrderForm/OrderForm";
import Delivery from "@/app/components/ui/Delivery/Delivery";
import Button from "@/app/components/ui/Button";
import CatalogSection from "@/app/components/ui/ProductList/ProductList";
import LeadSection from "@/app/components/ui/LeadSection";

export default function HomePage() {
  return (
    <div className="bg-main-pink-300">
      <Hero
        heading="Собираем букеты, созданные для Вас"
        description="Подарите ощущение праздника"
      >
        <a
          href={"/catalog/flowers"}
          className="pointer-events-auto hidden w-fit lg:block"
        >
          <Button size="large">Выбрать букет</Button>
        </a>
      </Hero>
      <LeadSection>
        <Image
          src={Decor1}
          className="absolute -left-10 top-[40px] hidden md:block"
          alt="Декоративный элемент."
        />
        <Image
          src={Decor2}
          className="absolute -right-10 top-[360px] hidden md:block"
          alt="Декоративный элемент."
        />
        <Sales />
      </LeadSection>
      <WhyUs />
      <CatalogSection />
      <Delivery />
      <OrderForm />
    </div>
  );
}
