import Hero from "@/app/components/ui/Hero/Hero";
import Button from "@/app/components/ui/Button";

export default function SuccessPage() {
  return (
    <div className="bg-main-pink-300">
      <Hero
        heading="Письмо успешно отправлено"
        description="Мы свяжемся с вами в течение 15 минут."
      >
        <a href={"/"} className="pointer-events-auto mt-4 block w-fit">
          <Button size="large">Вернуться на главную</Button>
        </a>
      </Hero>
    </div>
  );
}
