import Image from "next/image";
import { ProductCollections } from "@/types";
import { Config } from "@/payload-types";
import Link from "next/link";
import { TextFont, TextWeight, Text, TextSize, Button } from "../ui";
import { useCallback } from "react";

export default function Card<T extends ProductCollections>({
  item,
}: {
  item: Config["collections"][T];
}) {
  const checkLabelApplied = useCallback(
    (id: number) =>
      item?.tags?.find((tag) =>
        typeof tag.value === "number" ? tag.value === id : tag.value.id === id,
      ),
    [item],
  );

  const imageCover = item?.images?.at(0);
  const imageCoverUrl = typeof imageCover !== "number" ? imageCover?.url : null;

  const isDiscounted = checkLabelApplied(5);
  const isTopSelling = checkLabelApplied(1);
  const isNew = checkLabelApplied(2);
  // const isSpecial = checkLabelApplied(6);
  // const isRecommended = checkLabelApplied(4);
  const isDayOffer = checkLabelApplied(4);

  return (
    <div
      className="min-h-[146px] rounded-xl rounded-tl-none bg-[#fdfdfd] p-1 pb-3 lg:min-h-[428px] lg:rounded-3xl lg:rounded-tl-none"
      key={item.id}
    >
      <Link href={`/catalog/flowers/${item.id}`}>
        <div>
          <div className="relative mb-2 h-24 overflow-hidden rounded-tr-xl bg-pink-200 lg:h-60 lg:rounded-tr-3xl">
            {isTopSelling && (
              <small className="absolute top-1">Хит продаж</small>
            )}
            {isNew && <small className="absolute top-4">Новинка</small>}
            {isDayOffer && <small className="absolute top-8">Букет дня</small>}
            {isDiscounted && (
              <small className="absolute bottom-1">Скидка 50%</small>
            )}
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
            className="mb-2 lg:mb-16"
          >
            {item.name}
          </Text>
          <div className="mx-auto flex items-center justify-end px-2">
            <p className="g-1 flex flex-col items-center justify-center">
              <s className="font-montserrat text-[13px] font-medium">
                {Math.ceil(((Number.parseInt(item.price) || 0) / 100) * 75)} р.
              </s>
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
