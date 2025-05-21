"use client";

import { useEffect, useState } from "react";
import {
  Button,
  Heading,
  RadioButton,
  Text,
  Range,
  TextWeight,
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
    <div>
      <div
        className="rounded-b-xl px-4 py-3"
        style={{
          background:
            "linear-gradient(180deg, #FFF6F2 0%, #FFF0E4 0.01%, #FFF7F2 33.33%, #FFF6F2 100%)",
        }}
      >
        <fieldset>
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

        <fieldset>
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

        <fieldset className="py-4">
          <legend>
            <Heading level={3}>Фильтр</Heading>
          </legend>
          <Range min={0} max={9990} onChange={setPriceRange} />
        </fieldset>

        <div className="flex items-center justify-between gap-5">
          <Button className="px-1">Фильтровать</Button>
          <Text
            size={TextSize.SMALL}
            weight={TextWeight.SEMIBOLD}
            className="text-[#8E8D6F]"
          >
            Цена: {priceRange.min}р. - {priceRange.max}р.
          </Text>
        </div>
      </div>

      <ul className="grid">
        {filteredProducts.map((item) => (
          <li key={item}>
            <Link href={item}>
              <div>
                <div className="relative">
                  <small>Хит продаж</small>
                  <small>Новинка</small>
                  <small>Букет дня</small>
                  <small>Скидка 50%</small>
                  <Image src="" width={146} height={146} alt={item} />
                </div>
                <Heading level={4}>{item}</Heading>
                <div className="flex">
                  <span>5 400 р.</span>
                  <Button>Заказать</Button>
                </div>
              </div>
            </Link>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CatalogView;
