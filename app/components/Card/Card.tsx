import Image from "next/image";
import { ProductCollections } from "@/types";
import { Config } from "@/payload-types";

export default function Card<T extends ProductCollections>({
  item,
}: {
  item: Config["collections"][T];
}) {
  return (
    <div className="flex h-full flex-col justify-between rounded-lg bg-white p-1">
      <div className="relative h-[145px] min-[900px]:h-[245px]">
        {item.images &&
          item.images.map((image, index) => {
            if (typeof image === "number") {
              return <p key={index}>картинка</p>;
            }
            return (
              image.url && (
                <Image
                  src={image.url}
                  alt=""
                  fill
                  className="rounded-t-lg"
                  key={image.id}
                />
              )
            );
          })}
      </div>
      <div className="mx-auto max-w-[170px] min-[900px]:max-w-[225px] lg:max-w-[265px]">
        <h3 className="text-xs md:text-sm">{item.name}</h3>
      </div>
      <div className="my-2 flex items-center justify-evenly">
        <p className="text-green-800">{item.price}&#8381;</p>
        <button className="rounded-2xl bg-secondary-pink px-4 py-1 text-xs font-semibold text-white transition-colors hover:bg-hover-pink lg:py-2">
          Заказать
        </button>
      </div>
    </div>
  );
}
