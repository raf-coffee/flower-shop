import Image from "next/image";
import image1 from "../../../static/whyus/rec-01.png";
import image2 from "../../../static/whyus/rec-02.png";
import image3 from "../../../static/whyus/rec-03.png";

export default function WhyUs() {
  return (
    <section className="bg-main-pink-300 p-4">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-center text-lg font-bold md:text-start md:text-2xl">
          Почему именно мы?
        </h2>
        <div className="mb-4 grid max-h-56 grid-cols-8 grid-rows-12 sm:max-h-64 lg:max-h-[450px] lg:grid-cols-12">
          <Image
            src={image1}
            alt=""
            className="col-start-5 col-end-9 row-start-1 row-end-13 h-full w-full lg:col-start-8 lg:col-end-13"
          />
          <p className="col-start-2 col-end-7 row-start-9 row-end-10 self-center rounded-xl bg-white px-4 py-8 text-xxs leading-3 sm:col-start-3 sm:col-end-7 sm:row-start-8 sm:row-end-9 sm:text-sm lg:col-start-6 lg:col-end-10 lg:py-12">
            Вы можете выбрать любую цветочную композицию из нашего каталога или
            заказать свой вариант.
          </p>
        </div>
        <div className="mb-4 grid max-h-44 grid-cols-8 grid-rows-12 min-[500px]:max-h-56 sm:max-h-64 md:max-h-80 lg:max-h-[450px] lg:grid-cols-12">
          <Image
            src={image2}
            alt=""
            className="col-start-1 col-end-7 row-start-1 row-end-11 h-full w-full sm:col-end-6 lg:col-end-9 lg:row-end-12"
          />
          <p className="col-start-4 col-end-9 row-start-8 row-end-10 self-center rounded-xl bg-white px-4 py-8 text-xxs leading-3 sm:col-end-7 sm:text-sm md:col-start-3 md:col-end-7 md:row-start-9 md:row-end-11 lg:col-start-6 lg:col-end-10 lg:row-start-10 lg:row-end-13">
            Вы можете выбрать любую цветочную композицию из нашего каталога или
            заказать свой вариант.
          </p>
        </div>
        <div className="mb-4 grid max-h-56 grid-cols-8 grid-rows-12 sm:max-h-64 lg:max-h-[450px] lg:grid-cols-12">
          <Image
            src={image3}
            alt=""
            className="col-start-5 col-end-9 row-start-1 row-end-13 h-full w-full lg:col-start-8 lg:col-end-13"
          />
          <p className="col-start-2 col-end-7 row-start-9 row-end-10 self-center rounded-xl bg-white px-4 py-8 text-xxs leading-3 sm:col-start-3 sm:col-end-7 sm:row-start-8 sm:row-end-9 sm:text-sm lg:col-start-6 lg:col-end-10 lg:py-12">
            Вы можете выбрать любую цветочную композицию из нашего каталога или
            заказать свой вариант.
          </p>
        </div>
      </div>
    </section>
  );
}
