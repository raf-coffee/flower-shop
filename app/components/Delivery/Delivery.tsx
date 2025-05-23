import Image from "next/image";
import deliveryImg from "../../../static/delivery/delivery.png";

export default function Delivery() {
  return (
    <section className="bg-main-pink-400">
      <div className="relative mx-auto h-[360px] max-w-7xl lg:h-[700px]">
        <h2 className="relative z-10 mb-4 ps-14 pt-10 text-start text-lg font-bold md:text-2xl lg:ps-24 lg:pt-20 lg:text-4xl">
          Доставка
        </h2>
        <p className="absolute left-1/2 top-1/2 z-10 max-w-56 -translate-x-1/2 -translate-y-1/2 text-balance text-xs font-medium md:max-w-80 md:text-base lg:max-w-xl lg:text-wrap lg:text-lg">
          Возьмём на себя все заботы по созданию, оформлению и доставке
          корпоративных букетов в обычные и праздничные дни за разумные деньги
        </p>
        <Image src={deliveryImg} alt="" fill className="z-[1]" />
      </div>
    </section>
  );
}
