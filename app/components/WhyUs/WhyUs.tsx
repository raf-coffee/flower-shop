import Image from "next/image";
import image1 from "../../../static/whyus/rec-01.png";
import image2 from "../../../static/whyus/rec-02.png";
import image3 from "../../../static/whyus/rec-03.png";

export default function WhyUs() {
  return (
    <section className="bg-main-pink-300 p-4">
      <h2 className="mb-4 text-center text-lg font-bold">Почему именно мы?</h2>
      <div className="mb-4 grid max-h-56 grid-cols-8 grid-rows-12">
        <Image
          src={image1}
          alt=""
          width={180}
          height={215}
          className="col-start-5 col-end-9 row-start-1 row-end-13 h-full w-full"
        />
        <p className="col-start-2 col-end-7 row-start-9 row-end-10 self-center rounded-xl bg-white px-4 py-8 text-xxs leading-3">
          Вы можете выбрать любую цветочную композицию из нашего каталога или
          заказать свой вариант.
        </p>
      </div>
      <div className="mb-4 grid max-h-44 grid-cols-8 grid-rows-12">
        <Image
          src={image2}
          alt=""
          width={249}
          height={155}
          className="col-start-1 col-end-7 row-start-1 row-end-11 h-full w-full"
        />
        <p className="col-start-4 col-end-9 row-start-8 row-end-10 self-center rounded-xl bg-white px-4 py-8 text-xxs leading-3">
          Вы можете выбрать любую цветочную композицию из нашего каталога или
          заказать свой вариант.
        </p>
      </div>
      <div className="mb-4 grid max-h-56 grid-cols-8 grid-rows-12">
        <Image
          src={image3}
          alt=""
          width={180}
          height={215}
          className="col-start-5 col-end-9 row-start-1 row-end-13 h-full w-full"
        />
        <p className="col-start-2 col-end-7 row-start-9 row-end-10 self-center rounded-xl bg-white px-4 py-8 text-xxs leading-3">
          Вы можете выбрать любую цветочную композицию из нашего каталога или
          заказать свой вариант.
        </p>
      </div>
    </section>
  );
}
