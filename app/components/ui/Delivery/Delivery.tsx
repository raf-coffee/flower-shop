import Image from "next/image";

import deliveryImg from "@/static/delivery/delivery.png";

import {
  TextFont,
  TextSize,
  TextWeight,
  Text,
  Container,
  Heading,
} from "@/app/components/ui";

export default function Delivery() {
  return (
    <section className="relative bg-main-pink-300">
      <Image
        src={deliveryImg}
        fill
        className="z-[1]"
        alt="оформление блока доставка."
      />
      <Container className="relative mx-auto h-[360px] lg:h-[700px]">
        <Heading
          level={2}
          className="relative z-10 mb-4 ps-14 pt-10 text-start lg:ps-24 lg:pt-20"
        >
          Доставка
        </Heading>
        <Text
          font={TextFont.MONTSERRAT}
          weight={TextWeight.MEDIUM}
          size={TextSize.LARGE}
          className="absolute left-1/2 top-1/2 z-10 max-w-56 -translate-x-1/2 -translate-y-1/2 text-balance md:max-w-80 md:text-base lg:max-w-xl lg:text-wrap"
        >
          Возьмём на себя все заботы по созданию, оформлению и доставке
          корпоративных букетов в обычные и праздничные дни за разумные деньги
        </Text>
      </Container>
    </section>
  );
}
