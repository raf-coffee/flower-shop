import Hero from "@/app/components/ui/Hero/Hero";
import Button from "@/app/components/ui/Button";

export default function ErrorPage() {
  return (
    <div className="bg-main-pink-300">
      <Hero
        heading="Что-то не так :("
        description="Обновите страницу и попробуйте еще раз."
      >
        <a href={"/"} className="pointer-events-auto mt-4 block w-fit">
          <Button size="large">Вернуться на главную</Button>
        </a>
      </Hero>
    </div>
  );
}
