import Image from "next/image";
import { ProductCollections } from "@/types";
import { Config } from "@/payload-types";
import Link from "next/link";
import { TextFont, TextWeight, Text, TextSize, Button } from "../ui";
import { getCoverImageUrl, deriveActiveLabels } from "@/utils";

export default function Card<T extends ProductCollections>({
  item,
  type,
}: {
  item: Config["collections"][T];
  type: ProductCollections;
}) {
  const itemGroup = type === "presents" ? "gifts" : type;
  const imageCoverUrl = getCoverImageUrl(item);
  const labels = deriveActiveLabels(item);

  return (
    <div
      className="min-h-[146px] rounded-xl rounded-tl-none bg-[#fdfdfd] p-1 pb-3 lg:min-h-[428px] lg:rounded-3xl lg:rounded-tl-none"
      key={item.id}
    >
      <Link href={`/catalog/${itemGroup}/${item.id}`}>
        <div>
          <div className="relative mb-2 h-24 overflow-hidden rounded-tr-xl bg-pink-200 lg:h-60 lg:rounded-tr-3xl">
            <ul className="absolute top-1 flex max-w-[150px] flex-col gap-1">
              {labels.map((label) => (
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
