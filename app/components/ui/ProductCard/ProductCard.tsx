import Image from "next/image";
import { ProductCollections } from "@/types";
import { Config } from "@/payload-types";
import Link from "next/link";

import {
  getCoverImageUrl,
  deriveActiveLabels,
  normalizeCollectionForURL,
} from "@/utils";
import Text, { TextFont, TextSize, TextWeight } from "@/app/components/ui/Text";
import Button from "@/app/components/ui/Button";

export default function ProductCard<T extends ProductCollections>({
  item,
  collection,
}: {
  item: Config["collections"][T];
  collection: ProductCollections;
}) {
  const imageCoverUrl = getCoverImageUrl(item);
  const labels = deriveActiveLabels(item);
  const normalizedCollection = normalizeCollectionForURL(collection);
  const basicLabels = labels.filter((label) => label.title !== "Скидка 50%");
  const saleLabel = labels.find((label) => label.title === "Скидка 50%");

  return (
    <div
      className="relative max-h-fit min-h-[230px] rounded-xl rounded-tl-none bg-[#fdfdfd] p-1 pb-3 md:min-h-[300px] lg:min-h-[390px] lg:rounded-3xl lg:rounded-tl-none"
      key={item.id}
    >
      <ul className="absolute left-[1px] top-2 flex max-w-[150px] flex-col gap-1">
        {basicLabels.map((label) => (
          <li
            className="flex h-3 w-full items-center rounded-br-md rounded-tr-md p-1 md:h-6"
            style={{
              backgroundColor: label.bg,
              color: label.color ?? "white",
            }}
            key={label.title}
          >
            <Text
              font={TextFont.MONTSERRAT}
              weight={TextWeight.MEDIUM}
              className="text-[6px] uppercase text-inherit lg:text-[14px]"
            >
              {label.title}
            </Text>
          </li>
        ))}
      </ul>
      {saleLabel && (
        <div
          className="absolute right-[3px] top-[130px] flex h-3 w-[52px] items-center rounded-bl-sm rounded-tl-sm p-1 md:top-[165px] md:h-6 md:w-[150px] md:rounded-bl-md md:rounded-tl-md lg:top-[210px]"
          style={{
            backgroundColor: saleLabel.bg,
            color: saleLabel.color,
          }}
          key={saleLabel.title}
        >
          <Text
            font={TextFont.MONTSERRAT}
            weight={TextWeight.MEDIUM}
            className="text-[6px] uppercase text-inherit lg:text-[14px]"
          >
            {saleLabel.title}
          </Text>
        </div>
      )}
      <Link href={`/catalog/${normalizedCollection}/${item.id}`}>
        <div>
          <div className="mb-2 h-[148px] overflow-hidden rounded-tr-xl bg-pink-200 md:h-[200px] lg:h-60 lg:rounded-tr-3xl">
            {imageCoverUrl && (
              <Image
                src={imageCoverUrl}
                width={266}
                height={245}
                alt={item?.description ?? "Цветы."}
                className="block h-full w-full object-cover"
              />
            )}
          </div>
          <Text
            font={TextFont.MONTSERRAT}
            weight={TextWeight.MEDIUM}
            size={TextSize.SMALL}
            className="mb-2 lg:mb-8"
          >
            {item.name}
          </Text>
          <div className="mx-auto flex items-center justify-end md:px-2">
            <p className="g-1 flex flex-col items-center justify-center">
              {saleLabel && (
                <s className="font-montserrat text-[13px] font-medium">
                  {Math.ceil(((Number.parseInt(item.price) || 0) / 100) * 50)}{" "}
                  р.
                </s>
              )}
              <Text
                font={TextFont.MONTSERRAT}
                weight={TextWeight.MEDIUM}
                size={TextSize.EXTRA_SMALL}
                className="text-[#7EA048]"
              >
                {item.price} р.
              </Text>
            </p>

            <Button className="ms-4">Посмотреть</Button>
          </div>
        </div>
      </Link>
    </div>
  );
}
