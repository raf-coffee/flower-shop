import Hero from "./components/Hero/Hero";
import Sales from "./components/Sales/Sales";

export default function Home() {
  return (
    <>
      <Hero
        heading="Собираем букеты, созданные для Вас"
        description="Подарите ощущение праздника"
      />
      <Sales />
    </>
  );
}
