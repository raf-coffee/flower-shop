"use client";

import { Dispatch, SetStateAction, useRef, useState } from "react";

import { Category, Occasion, Whom } from "@/payload-types";

import { ProductCollections } from "@/types";
import { DataFromCollectionSlug } from "payload";

import Range from "@/app/components/ui/Range";
import Button from "@/app/components/ui/Button";
import Checkbox from "@/app/components/ui/Checkbox";
import Heading from "@/app/components/ui/Heading";
import ProductCard from "@/app/components/ui/ProductCard";
import Text, { TextWeight, TextFont } from "@/app/components/ui/Text";

export default function CatalogView({
  products,
  filters,
  minPrice,
  maxPrice,
  type,
}: {
  products: DataFromCollectionSlug<ProductCollections>[];
  filters: {
    categories: Category[] | null;
    occasions: Occasion[];
    whoms: Whom[];
  };
  minPrice: number;
  maxPrice: number;
  type: ProductCollections;
}) {
  const productList = useRef(products);

  const [filteredProducts, setFilteredProducts] = useState(productList.current);
  const [priceRange, setPriceRange] = useState({
    min: minPrice,
    max: maxPrice,
  });

  const [activeCategoryIds, setActiveCategoryIds] = useState<number[]>([]);
  const [activeOccasionIds, setActiveOccasionIds] = useState<number[]>([]);
  const [whomIds, setWhomIds] = useState<number[]>([]);

  const onFilterClick = () => {
    const filtered = productList.current.filter((product) => {
      // === Категории ===
      if (
        activeCategoryIds.length > 0 &&
        "categories" in product &&
        Array.isArray(product.categories)
      ) {
        const productCategoryIds = product.categories.map((cat) =>
          typeof cat === "number" ? cat : cat.id,
        );

        if (!activeCategoryIds.some((id) => productCategoryIds.includes(id))) {
          return false;
        }
      }

      // === Повод ===
      if (activeOccasionIds.length > 0) {
        const occasionIds = product.occasions?.map((occ) =>
          typeof occ === "number" ? occ : occ.id,
        );

        if (!occasionIds?.some((id) => activeOccasionIds.includes(id))) {
          return false;
        }
      }

      // === Кому ===
      if (product.whom?.length) {
        const productWhomIds = product.whom?.map((item) =>
          typeof item !== "number" ? item.id : item,
        );

        if (!productWhomIds?.some((id) => whomIds.includes(id))) {
          return false;
        }
      }

      // === Цена ===
      const price = Number.parseInt(product.price);
      if (price < priceRange.min || price > priceRange.max) {
        return false;
      }

      return true;
    });

    setFilteredProducts(filtered);
  };

  const onCheckboxChange = (
    id: number,
    dispatchFunc: Dispatch<SetStateAction<number[]>>,
  ) => {
    dispatchFunc((prev) =>
      prev.includes(id) ? prev.filter((catId) => catId !== id) : [...prev, id],
    );
  };

  return (
    <div className="mx-auto justify-center gap-4 lg:flex">
      <div className="relative top-[-55px] lg:static lg:shrink-0 lg:basis-72">
        <div className="bg-custom-gradient mb-4 rounded-b-xl px-4 py-3">
          {filters.categories && (
            <fieldset className="mb-2">
              <legend>
                <Heading level={3}>Категории</Heading>
              </legend>
              {filters.categories.map((cat) => (
                <Checkbox
                  name="category"
                  checked={
                    activeCategoryIds
                      ? activeCategoryIds.includes(cat.id)
                      : false
                  }
                  onChange={
                    Array.isArray(filters.categories)
                      ? () => onCheckboxChange(cat.id, setActiveCategoryIds)
                      : () => null
                  }
                  key={cat.id}
                >
                  {cat.name}
                </Checkbox>
              ))}
            </fieldset>
          )}

          <fieldset className="mb-2">
            <legend>
              <Heading level={3}>Повод</Heading>
            </legend>
            {filters.occasions.map((occ) => (
              <Checkbox
                name="occasion"
                checked={activeOccasionIds.includes(occ.id)}
                onChange={() => onCheckboxChange(occ.id, setActiveOccasionIds)}
                key={occ.id}
              >
                {occ.name}
              </Checkbox>
            ))}
          </fieldset>

          <fieldset>
            <legend>
              <Heading level={3}>Кому</Heading>
            </legend>
            {filters.whoms.map((addr) => (
              <Checkbox
                name="whom"
                checked={whomIds.includes(addr.id)}
                onChange={() => onCheckboxChange(addr.id, setWhomIds)}
                key={addr.id}
              >
                {addr.name}
              </Checkbox>
            ))}
          </fieldset>
        </div>

        <fieldset className="mb-6">
          <legend className="mb-4">
            <Heading level={4} className="font-semibold lg:text-base">
              Фильтр
            </Heading>
          </legend>
          <Range min={minPrice} max={maxPrice} onChange={setPriceRange} />
        </fieldset>

        <div className="flex items-center justify-between gap-5">
          <Button size={"small"} onClick={onFilterClick}>
            Фильтровать
          </Button>
          <Text
            weight={TextWeight.SEMIBOLD}
            font={TextFont.LATO}
            className="text-[10px] text-[#8E8D6F] lg:text-[12px]"
          >
            Цена: {priceRange.min}р. - {priceRange.max}р.
          </Text>
        </div>
      </div>

      {!!filteredProducts.length ? (
        <ul className="grid w-full grid-cols-2 gap-3 lg:grid-cols-3">
          {filteredProducts.map((item) => (
            <li key={item.id}>
              <ProductCard item={item} collection={type} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex w-full items-center justify-center p-4">
          <Text>Нет подходящих товаров</Text>
        </div>
      )}
    </div>
  );
}
