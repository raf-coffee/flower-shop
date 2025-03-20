"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type Items = {
  id: string;
  title: string;
  price: number;
  image: {
    src: string;
    alt: string;
  };
}[];

const items: Items = [
  {
    id: "b1219ca0-e9fd-4169-b418-43d1b48e73a9",
    title: "Букет цветов Нравственный взгляд",
    price: 23210,
    image: {
      src: "/static/flowers/buq-1.jpg",
      alt: "букет из розовых садовых роз",
    },
  },
  {
    id: "a42dca28-70ae-4fb1-b5de-250b432e4d43",
    title: "Букет цветов Незабываемый смех",
    price: 18530,
    image: {
      src: "/static/flowers/buq-2.jpg",
      alt: "букет из желтых садовых роз",
    },
  },
  {
    id: "6abff666-26bf-4bcb-a4a1-497f877de98d",
    title: "Букет из 101 premium розы 60-70 см",
    price: 31290,
    image: {
      src: "/static/flowers/buq-3.jpg",
      alt: "букет из 101 эквадорской розы",
    },
  },
  {
    id: "cafba00e-d742-489d-91b8-c66c3fa8044d",
    title: "Букет цветов Дыхание весны",
    price: 12050,
    image: {
      src: "/static/flowers/buq-4.jpg",
      alt: "букет из 25 тюльпанов и 20 ирисов",
    },
  },
  {
    id: "f76b95d-e1fa-4a28-9728-4f4386617ef6",
    title: "Букет цветов Только ты",
    price: 12990,
    image: {
      src: "/static/flowers/buq-5.jpg",
      alt: "букет из 51 эквадорской розы",
    },
  },
  {
    id: "612faa6f-d00c-47d0-be49-28c03b6f9e86",
    title: "Букет из 15 роз яркий микс premium 40-50 см",
    price: 4585,
    image: {
      src: "/static/flowers/buq-6.jpg",
      alt: "букет из 15 роз",
    },
  },
];

export default function Sales() {
  return (
    <section className="bg-main-pink-400 p-4">
      <h2 className="mb-4 text-center text-lg font-bold">Скидки</h2>
      <div>
        <Swiper spaceBetween={17} slidesPerView={2} loop>
          {items.map((item) => (
            <SwiperSlide key={item.id} className="rounded-lg bg-white p-1">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    width={170}
                    height={135}
                    className="rounded-t-lg"
                  />
                  <h3 className="text-xs">{item.title}</h3>
                </div>
                <div className="my-2 flex items-center justify-evenly">
                  <p className="text-green-800">{item.price}&#8381;</p>
                  <button className="rounded-2xl bg-secondary-pink px-4 py-1 text-xs font-semibold text-white">
                    Заказать
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
