"use client";

import { useEffect, useState } from "react";
import {
  Button,
  Heading,
  Checkbox,
  Text,
  Range,
  TextWeight,
  TextFont,
} from "@/app/components/ui";
import { Category, Occasion, Whom } from "@/payload-types";
import { DataFromCollectionSlug } from "payload";
import Card from "@/app/components/Card/Card";

function CatalogView({
  products,
  filters,
  minPrice,
  maxPrice,
}: {
  products: DataFromCollectionSlug<
    | "accessories"
    | "baloons"
    | "flowers"
    | "fruitCarts"
    | "indoors"
    | "presents"
    | "sweets"
  >[];
  filters: { categories: Category[]; occasions: Occasion[]; whoms: Whom[] };
  minPrice: number;
  maxPrice: number;
}) {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const [priceRange, setPriceRange] = useState({
    min: minPrice,
    max: maxPrice,
  });

  // const [activeCategory, setActiveCategory] = useState(
  const [activeCategory] = useState(filters.categories?.[0]?.id);
  // const [activeOccasion, setActiveOccasion] = useState(
  const [activeOccasion] = useState(filters.occasions?.[0]?.id);
  const [recipientType] = useState(filters.whoms?.[0]?.id);

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
            {filters.categories.map((cat) => (
              <Checkbox
                name="category"
                checked={false}
                onChange={() => null}
                key={cat.id}
              >
                {cat.name}
              </Checkbox>
            ))}
          </fieldset>

          <fieldset className="mb-2">
            <legend>
              <Heading level={3}>Повод</Heading>
            </legend>
            {filters.occasions.map((cat) => (
              <Checkbox
                name="occasion"
                checked={false}
                onChange={() => null}
                key={cat.id}
              >
                {cat.name}
              </Checkbox>
            ))}
          </fieldset>

          <fieldset>
            <legend>
              <Heading level={3}>Кому</Heading>
            </legend>
            {filters.whoms.map((cat) => (
              <Checkbox
                name="whom"
                checked={false}
                onChange={() => null}
                key={cat.id}
              >
                {cat.name}
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
          <li key={item.id}>
            <Card item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CatalogView;

// FIXME: Обсудить карточку и может быть дополнить
// return (
//   <li
//     className="min-h-[146px] rounded-xl rounded-tl-none bg-[#fdfdfd] p-1 pb-3 lg:min-h-[428px] lg:rounded-3xl lg:rounded-tl-none"
//     key={item.id}
//   >
//     <Link href={`/catalog/flowers/${item.id}`}>
//       <div>
//         <div className="relative mb-2 h-24 overflow-hidden rounded-tr-xl bg-pink-200 lg:h-60 lg:rounded-tr-3xl">
//           <small className="absolute top-1">Хит продаж</small>
//           <small className="absolute top-4">Новинка</small>
//           <small className="absolute top-8">Букет дня</small>
//           <small className="absolute bottom-1">Скидка 50%</small>
//           {imageUrl && (
//             <Image
//               src={imageUrl}
//               width={266}
//               height={245}
//               alt={item?.description ?? "Цветы."}
//               className="block h-full w-full object-cover"
//             />
//           )}
//         </div>
//         <Text
//           font={TextFont.MONTSERRAT}
//           weight={TextWeight.MEDIUM}
//           size={TextSize.SMALL}
//           className="mb-2 lg:mb-16"
//         >
//           {item.name}
//         </Text>
//         <div className="mx-auto flex items-center justify-end px-2">
//           <p className="g-1 flex flex-col items-center justify-center">
//             <s className="font-montserrat text-[13px] font-medium">
//               {Math.ceil(
//                 ((Number.parseInt(item.price) || 0) / 100) * 75,
//               )}{" "}
//               р.
//             </s>
//             <Text
//               font={TextFont.MONTSERRAT}
//               weight={TextWeight.MEDIUM}
//               size={TextSize.EXTRA_SMALL}
//               className="text-[#7EA048]"
//             >
//               {item.price} р.
//             </Text>
//           </p>

//           <Button className="ms-4">Посмотреть</Button>
//         </div>
//       </div>
//     </Link>
//   </li>
// );
