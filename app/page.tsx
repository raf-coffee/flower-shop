import Hero from "./components/Hero/Hero";
import Sales from "./components/Sales/Sales";
import WhyUs from "./components/WhyUs/WhyUs";
import Form from "./components/OrderForm/OrderForm";
import Delivery from "./components/Delivery/Delivery";

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
