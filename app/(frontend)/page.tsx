import Hero from "@/app/components/Hero/Hero";
import Sales from "@/app/components/Sales/Sales";
import WhyUs from "@/app/components/WhyUs/WhyUs";
import Form from "@/app/components/OrderForm/OrderForm";
import Delivery from "@/app/components/Delivery/Delivery";
import { Button } from "../components/ui";

export default function Home() {
  return (
    <div className="bg-main-pink-300">
      <Hero
        heading="Собираем букеты, созданные для Вас"
        description="Подарите ощущение праздника"
      >
        <Button>Выбрать букет</Button>
      </Hero>
      <Sales />
      <WhyUs />
      <Delivery />
      <Form />
    </div>
  );
}
