"use client";

import Image from "next/image";
import { useRef } from "react";

import YandexMap from "@/app/components/Map/YandexMap";

import SocialList from "@/app/components/ui/SocialList/SocialList";
import {
  Container,
  Heading,
  Text,
  TextFont,
  TextSize,
  TextWeight,
} from "@/app/components/ui";

import { IconMailFilled, IconPhoneCall } from "@tabler/icons-react";
import { AlarmIcon, MapMarkerIcon } from "@/static/icons";

import { LeadSection } from "@/app/components";
import ParallaxDecor from "@/app/components/ui/ParallaxDecor/ParallaxDecor";
import { Decor1, Decor2 } from "@/static/decor";

function Contacts() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative" ref={wrapperRef}>
      <LeadSection>
        {!!wrapperRef.current && (
          <ParallaxDecor
            speed={150}
            src={Decor1.src}
            width={83}
            height={107}
            container={wrapperRef.current}
            className="z-15 -left-10 top-1 hidden md:block"
          />
        )}
        {!!wrapperRef.current && (
          <ParallaxDecor
            speed={150}
            src={Decor2.src}
            width={83}
            height={107}
            container={wrapperRef.current}
            className="z-15 -right-10 top-[200px] hidden md:block"
          />
        )}
        <Container className="z-3 relative bg-white lg:rounded-2xl lg:bg-main-pink-300 lg:p-2">
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
              <div className="flex gap-1">
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
                  Режим работы:
                </Text>
                <div>
                  <Text
                    size={TextSize.NORMAL}
                    font={TextFont.LATO}
                    weight={TextWeight.MEDIUM}
                  >
                    Пн-пт: 08:00-23:00
                  </Text>
                  <Text
                    size={TextSize.NORMAL}
                    font={TextFont.LATO}
                    weight={TextWeight.MEDIUM}
                  >
                    Сб-вс:&nbsp;
                    <span className="relative left-[4px]">09:00-22:00</span>
                  </Text>
                </div>
              </div>
            </div>
            <div className="mb-5 flex min-h-[350px] w-full min-w-[350px] items-center justify-center lg:order-1 lg:row-start-1 lg:row-end-3 lg:mb-0 lg:h-full">
              <YandexMap />
            </div>
          </div>
        </Container>
      </LeadSection>
    </div>
  );
}

export default Contacts;
