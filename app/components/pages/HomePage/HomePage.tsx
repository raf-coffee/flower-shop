import Hero from "@/app/components/Hero/Hero";
import Sales from "@/app/components/Sales/Sales";
import WhyUs from "@/app/components/WhyUs/WhyUs";
import OrderForm from "@/app/components/OrderForm/OrderForm";
import Delivery from "@/app/components/Delivery/Delivery";
import { Button } from "@/app/components/ui";
import CatalogSection from "@/app/components/ProductList/ProductList";
import { LeadSectionContainer } from "@/app/components/ui";
import { Decor1, Decor2 } from "@/static/decor";
import Image from "next/image";

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
      <LeadSectionContainer>
        <Image
          src={Decor1}
          className="absolute -left-10 top-[20px] hidden md:block"
          alt="Декоративный элемент."
        />
        <Image
          src={Decor2}
          className="absolute -right-10 top-[360px] hidden md:block"
          alt="Декоративный элемент."
        />
        <Sales />
      </LeadSectionContainer>
      <WhyUs />
      <CatalogSection />
      <Delivery />
      <OrderForm />
    </div>
  );
}
