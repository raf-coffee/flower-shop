import Hero from "@/app/components/Hero/Hero";
import Logo from "@/app/components/Logo/Logo";
import YandexMap from "@/app/components/Map/YandexMap";

import SocialList from "@/app/components/SocialList/SocialList";
import {
  Button,
  Container,
  Input,
  Text,
  TextArea,
  TextFont,
  TextSize,
  TextWeight,
} from "@/app/components/ui";
import { IconMailFilled, IconPhoneCall } from "@tabler/icons-react";
import Link from "next/link";

export default function Contacts() {
  return (
    <div className="bg-main-pink-300">
      <Hero heading="Контакты" hasBreadCrumbs />
      <section className="bg-main-pink-400 p-4 lg:mt-[-65px]">
        <Container className="z-3 relative lg:rounded-2xl lg:bg-main-pink-300">
          <div>
            <div>
              <Text
                className="mb-4"
                size={TextSize.LARGE}
                weight={TextWeight.BOLD}
              >
                Звоните нам или пишите в месенджер
              </Text>
              <div className="flex-col">
                <a
                  href="tel:+7495111111"
                  className="mb-2 flex items-center md:text-lg lg:mb-1.5 lg:text-2xl"
                >
                  <IconPhoneCall className="me-1 text-icons-pink" />
                  +7 495 000-00-00
                </a>
                <a
                  href="tel:+7495111111"
                  className="mb-2 flex items-center pl-7 md:text-lg lg:mb-1.5 lg:text-2xl"
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
              <div className="flex items-center justify-between">
                <Text size={TextSize.NORMAL} font={TextFont.LATO}>
                  Мы в соц сетях:
                </Text>
                <SocialList />
              </div>
            </div>
            <div>
              <Text
                className="mb-4"
                size={TextSize.LARGE}
                weight={TextWeight.BOLD}
              >
                Как нас найти?
              </Text>
              <Text className="mb-2" size={TextSize.NORMAL}>
                Город, улица Название, дом 1
              </Text>
              <Text size={TextSize.NORMAL}>
                Режим работы: Пн-пт: 00:00-00:00
              </Text>
              <Text size={TextSize.NORMAL}>Сб-вс: 00:00-00:00</Text>
            </div>
            <div className="flex min-h-[350px] w-full min-w-[350px] items-center justify-center">
              <YandexMap />
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-main-pink-400 p-4">
        <Container>
          <Text
            className="mb-4 text-center"
            size={TextSize.LARGE}
            weight={TextWeight.BOLD}
          >
            Появились вопросы?
          </Text>
          <form className="flex flex-col items-center gap-2">
            <Input type="text" placeholder="Имя" />
            <Input type="phone" placeholder="Телефон" />
            <TextArea
              className="mb-3"
              rows={6}
              placeholder="Напишите свой вопрос"
            />
            <Button className="">Отправить</Button>
          </form>
        </Container>
      </section>
      <section>
        <Container className="py-5">
          <div className="mb-5 flex items-center justify-center">
            <Logo />
          </div>
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-4">
            {["Цветы", "Воздушные шары", "Аксессуары"].map((name) => (
              <Link
                className="relative min-h-[140px] bg-main-pink-400 lg:min-h-[360px]"
                href="/"
                key={name}
              >
                <li className="relative h-full w-full">
                  <div className="absolute bottom-0 flex h-[40px] w-full items-center justify-center rounded-t-[10px] bg-soft-white-transparent lg:h-[95px]">
                    <Text className="text-center" size={TextSize.SMALL}>
                      {name}
                    </Text>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </Container>
      </section>
    </div>
  );
}
