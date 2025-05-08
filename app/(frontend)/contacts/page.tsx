import Hero from "@/app/components/Hero/Hero";
import Logo from "@/app/components/Logo/Logo";
import YandexMap from "@/app/components/Map/YandexMap";

import SocialList from "@/app/components/SocialList/SocialList";
import {
  Button,
  Container,
  Heading,
  Input,
  Text,
  TextArea,
  TextFont,
  TextSize,
  TextWeight,
} from "@/app/components/ui";
import { IconMailFilled, IconPhoneCall } from "@tabler/icons-react";
import Link from "next/link";
import { AlarmIcon, MapMarkerIcon } from "./assets";
import Image from "next/image";

export default function Contacts() {
  return (
    <div className="bg-main-pink-300">
      <Hero heading="Контакты" hasBreadCrumbs />

      <section className="bg-main-pink-400 p-4 lg:mt-[-65px]">
        <Container className="z-3 relative lg:rounded-2xl lg:bg-main-pink-300 lg:p-2">
          <div className="gap-4 lg:grid lg:min-h-[500px] lg:grid-cols-[1fr_1fr] lg:gap-x-16 lg:p-2">
            <div className="mb-5 lg:mb-0">
              <Heading level={2} className="mb-4">
                Звоните нам или пишите в месенджер
              </Heading>
              <div className="flex-col">
                <a
                  href="tel:+7495111111"
                  className="mb-2 flex items-center md:text-lg lg:mb-1.5 lg:text-2xl"
                >
                  <IconPhoneCall className="me-1 text-icons-pink" />
                  <Text
                    size={TextSize.NORMAL}
                    font={TextFont.LATO}
                    weight={TextWeight.MEDIUM}
                  >
                    +7 495 000-00-00 - Сергей Петрович
                  </Text>
                </a>
                <a
                  href="tel:+7495111111"
                  className="mb-2 flex items-center pl-7 md:text-lg lg:mb-1.5 lg:text-2xl"
                >
                  <Text
                    size={TextSize.NORMAL}
                    font={TextFont.LATO}
                    weight={TextWeight.MEDIUM}
                  >
                    +7 495 000-00-00 - Абдул Оглы Терхамзанов
                  </Text>
                </a>
                <a
                  href="tel:+7495111111"
                  className="mb-2 flex items-center md:text-lg lg:mb-7 lg:text-2xl"
                >
                  <IconMailFilled className="me-1 text-icons-pink" />
                  <Text
                    size={TextSize.NORMAL}
                    font={TextFont.LATO}
                    weight={TextWeight.MEDIUM}
                  >
                    flowermail@gmail.com
                  </Text>
                </a>
              </div>
              <div className="flex items-center justify-between">
                <Text
                  size={TextSize.NORMAL}
                  font={TextFont.LATO}
                  weight={TextWeight.MEDIUM}
                >
                  Мы в соц сетях:
                </Text>
                <SocialList />
              </div>
            </div>
            <div className="mb-1">
              <Heading level={2} className="mb-4">
                Как нас найти?
              </Heading>
              <Text
                className="mb-2 flex flex-row gap-x-2"
                size={TextSize.NORMAL}
                font={TextFont.LATO}
                weight={TextWeight.MEDIUM}
              >
                <Image
                  className="mt-1.5 h-[15px] w-[15px]"
                  src={MapMarkerIcon.src}
                  width={15}
                  height={15}
                  alt="Map marker."
                />
                Город Москва, 4 сыромятнический переулок, дом 1/8с22
              </Text>
              <Text
                className="flex flex-row gap-x-2"
                size={TextSize.NORMAL}
                font={TextFont.LATO}
                weight={TextWeight.MEDIUM}
              >
                <Image
                  className="mt-1.5 h-[15px] w-[15px]"
                  src={AlarmIcon.src}
                  width={15}
                  height={15}
                  alt="Map marker."
                />
                Режим работы: Пн-пт: 00:00-00:00
              </Text>
              <Text
                className="mb-2 pl-[135px] lg:pl-[192px]"
                size={TextSize.NORMAL}
                font={TextFont.LATO}
                weight={TextWeight.MEDIUM}
              >
                Сб-вс: 00:00-00:00
              </Text>
            </div>
            <div className="mb-5 flex min-h-[350px] w-full min-w-[350px] items-center justify-center lg:order-1 lg:row-start-1 lg:row-end-3 lg:mb-0 lg:h-full">
              <YandexMap />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-main-pink-400 p-4">
        <Container className="max-w-[770px] lg:mb-12">
          <Heading level={2} className="mb-4 text-center lg:mb-12">
            Появились вопросы?
          </Heading>
          <form className="flex flex-col items-center gap-2">
            <Input
              className="lg:h-[90px] lg:text-2xl"
              type="text"
              placeholder="Имя"
            />
            <Input
              className="lg:h-[90px] lg:text-2xl"
              type="phone"
              placeholder="Телефон"
            />
            <TextArea
              className="mb-3 lg:mb-12 lg:min-h-[320px] lg:text-2xl"
              rows={6}
              placeholder="Напишите свой вопрос"
            />
            <Button>Отправить</Button>
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
