import Delivery from "./components/Delivery/Delivery";
import Hero from "./components/Hero/Hero";
import Sales from "./components/Sales/Sales";
import WhyUs from "./components/WhyUs/WhyUs";

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
    </>
  );
}
