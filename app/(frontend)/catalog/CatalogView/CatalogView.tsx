"use client";

import { useEffect, useState } from "react";
import { Button, Heading, RadioButton, Text, Range } from "@/app/components/ui";

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

        <fieldset>
          <legend>
            <Heading level={3}>Фильтр</Heading>
          </legend>
          <Range min={0} max={9990} onChange={setPriceRange} />
        </fieldset>

        <div>
          <Button>Фильтровать</Button>
          <Text>
            Цена: {priceRange.min} - {priceRange.max}
          </Text>
        </div>
      </div>

      <div>
        {filteredProducts.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    </div>
  );
}

export default CatalogView;
