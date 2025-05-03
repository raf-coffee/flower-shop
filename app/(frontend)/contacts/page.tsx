import Hero from "@/app/components/Hero/Hero";
import {
  Button,
  Container,
  Input,
  Text,
  TextSize,
  TextWeight,
} from "@/app/components/ui";
import { IconMailFilled, IconPhoneCall } from "@tabler/icons-react";

export default function Contacts() {
  return (
    <div className="bg-main-pink-300">
      <Hero heading="Контакты" hasBreadCrumbs />
      <section className="bg-main-pink-400 p-4 lg:mt-[-65px]">
        <Container className="z-3 relative lg:rounded-2xl lg:bg-main-pink-300">
          <div>
            <div className="">
              <Text size={TextSize.LARGE} weight={TextWeight.BOLD}>
                Звоните нам или пишите в месенджер
              </Text>
              <a
                href="tel:+7495111111"
                className="mb-2 flex items-center md:text-lg lg:mb-1.5 lg:text-2xl"
              >
                <IconPhoneCall className="me-1 text-icons-pink" />
                +7 495 000-00-00
              </a>
              <a
                href="tel:+7495111111"
                className="mb-2 flex items-center md:text-lg lg:mb-1.5 lg:text-2xl"
              >
                +7 495 000-00-00
              </a>
              <a
                href="tel:+7495111111"
                className="mb-2 flex items-center md:text-lg lg:mb-7 lg:text-2xl"
              >
                <IconMailFilled className="me-1 text-icons-pink" />
                flowermail@gmail.com
              </a>
            </div>
            <div className=""></div>
            <div className=""></div>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <Text>Появились вопросы?</Text>
          <form>
            <Input />
            <Input />
            <Input />
            <Button>Отправить</Button>
          </form>
        </Container>
      </section>
      <section>Здесь будет каталог</section>
    </div>
  );
}
