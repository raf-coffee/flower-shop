"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Card from "../Card/Card";
import "swiper/css";
import "swiper/css/pagination";
import { ProductCollections } from "@/types";
import { Config } from "@/payload-types";

export default function Carousel<T extends ProductCollections>({
  items,
  collection,
}: {
  items: Config["collections"][T][];
  collection: ProductCollections;
}) {
  return (
    <section className="bg-main-pink-400 p-4 lg:mt-[-65px]">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-center text-lg font-bold md:text-start md:text-2xl">
          Скидки
        </h2>
        <Swiper
          modules={[Pagination]}
          spaceBetween={17}
          slidesPerView={2}
          loop
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1100: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          pagination={{
            type: "bullets",
            clickable: true,
          }}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <Card item={item} collection={collection} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
