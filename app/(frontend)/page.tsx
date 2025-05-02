import Hero from "@/app/components/Hero/Hero";
import Sales from "@/app/components/Sales/Sales";
import WhyUs from "@/app/components/WhyUs/WhyUs";
import Form from "@/app/components/OrderForm/OrderForm";
import Delivery from "@/app/components/Delivery/Delivery";

export default function Home() {
  return (
    <>
      <Hero
        heading="Собираем букеты, созданные для Вас"
        description="Подарите ощущение праздника"
      />
      <Sales />
      <WhyUs />
      <Delivery />
      <Form />
    </>
  );
}
