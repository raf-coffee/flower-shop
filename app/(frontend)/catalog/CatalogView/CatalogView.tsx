"use client";

import { useEffect, useState } from "react";
import {
  Button,
  Heading,
  RadioButton,
  Text,
  Range,
  TextWeight,
  TextFont,
  TextSize,
} from "@/app/components/ui";
import Link from "next/link";
import Image from "next/image";

function CatalogView({ products }: { products: string[] }) {
  const [filteredProducts, setFilteredProducts] = useState<string[]>(products);

  const [priceRange, setPriceRange] = useState({ min: 0, max: 9990 });

  const [activeCategory, setActiveCategory] = useState<string>("0");
  const [activeOccasion, setActiveOccasion] = useState<string>("0");
  const [recipientType, setRecipientType] = useState<string>("0");

  useEffect(() => {
    setFilteredProducts(products);
  }, [activeCategory, activeOccasion, recipientType, products]);

  return (
    <div className="mx-auto justify-center gap-4 lg:flex">
      <div className="relative top-[-55px] lg:static lg:shrink-0 lg:basis-72">
        <div className="bg-custom-gradient mb-4 rounded-b-xl px-4 py-3">
          <fieldset className="mb-2">
            <legend>
              <Heading level={3}>Категории</Heading>
            </legend>
            <RadioButton
              name="category_1"
              checked={activeCategory === "1"}
              onClick={() => setActiveCategory("1")}
            >
              Вариант 1
            </RadioButton>
            <RadioButton
              name="category_1"
              checked={activeCategory === "2"}
              onClick={() => setActiveCategory("2")}
            >
              Вариант 2
            </RadioButton>
            <RadioButton
              name="category_1"
              checked={activeCategory === "3"}
              onClick={() => setActiveCategory("3")}
            >
              Вариант 3
            </RadioButton>
          </fieldset>

          <fieldset className="mb-2">
            <legend>
              <Heading level={3}>Повод</Heading>
            </legend>
            <RadioButton
              name="category_2"
              checked={activeOccasion === "1"}
              onClick={() => setActiveOccasion("1")}
            >
              Вариант 1
            </RadioButton>
            <RadioButton
              name="category_2"
              checked={activeOccasion === "2"}
              onClick={() => setActiveOccasion("2")}
            >
              Вариант 2
            </RadioButton>
            <RadioButton
              name="category_2"
              checked={activeOccasion === "3"}
              onClick={() => setActiveOccasion("3")}
            >
              Вариант 3
            </RadioButton>
          </fieldset>

          <fieldset>
            <legend>
              <Heading level={3}>Кому</Heading>
            </legend>
            <RadioButton
              name="category_3"
              checked={recipientType === "1"}
              onClick={() => setRecipientType("1")}
            >
              Вариант 1
            </RadioButton>
            <RadioButton
              name="category_3"
              checked={recipientType === "2"}
              onClick={() => setRecipientType("2")}
            >
              Вариант 2
            </RadioButton>
            <RadioButton
              name="category_3"
              checked={recipientType === "3"}
              onClick={() => setRecipientType("3")}
            >
              Вариант 3
            </RadioButton>
          </fieldset>
        </div>

        <fieldset className="mb-6">
          <legend className="mb-4">
            <Heading level={4} className="font-semibold lg:text-base">
              Фильтр
            </Heading>
          </legend>
          <Range min={0} max={9990} onChange={setPriceRange} />
        </fieldset>

        <div className="flex items-center justify-between gap-5">
          <Button size={"small"}>Фильтровать</Button>
          <Text
            weight={TextWeight.SEMIBOLD}
            font={TextFont.LATO}
            className="text-[10px] text-[#8E8D6F] lg:text-[12px]"
          >
            Цена: {priceRange.min}р. - {priceRange.max}р.
          </Text>
        </div>
      </div>

      <ul className="grid w-full grid-cols-2 gap-3 lg:grid-cols-3">
        {filteredProducts.map((item) => (
          <li
            className="min-h-[146px] rounded-xl rounded-tl-none bg-[#fdfdfd] p-1 pb-3 lg:min-h-[428px] lg:rounded-3xl lg:rounded-tl-none"
            key={item}
          >
            <Link href={item}>
              <div>
                <div className="relative mb-2 h-24 overflow-hidden rounded-tr-xl bg-pink-200 lg:h-60 lg:rounded-tr-3xl">
                  <small className="absolute top-1">Хит продаж</small>
                  <small className="absolute top-4">Новинка</small>
                  <small className="absolute top-8">Букет дня</small>
                  <small className="absolute bottom-1">Скидка 50%</small>
                  <Image
                    src=""
                    width={266}
                    height={245}
                    alt={item}
                    className="block h-full w-full object-cover"
                  />
                </div>
                <Text
                  font={TextFont.MONTSERRAT}
                  weight={TextWeight.MEDIUM}
                  size={TextSize.SMALL}
                  className="mb-2 lg:mb-16"
                >
                  №25{item} “Ромашки для Наташки”
                </Text>
                <div className="mx-auto flex items-center justify-end px-2">
                  <p className="g-1 flex flex-col items-center justify-center">
                    <s className="font-montserrat text-[13px] font-medium">
                      5 400 р.
                    </s>
                    <Text
                      font={TextFont.MONTSERRAT}
                      weight={TextWeight.MEDIUM}
                      size={TextSize.EXTRA_SMALL}
                      className="text-[#7EA048]"
                    >
                      3 700 р.
                    </Text>
                  </p>

                  <Button className="ms-4">Заказать</Button>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CatalogView;
