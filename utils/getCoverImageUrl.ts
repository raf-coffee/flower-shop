import {
  Accessory,
  Baloon,
  Flower,
  FruitCart,
  Indoor,
  Present,
  Sweet,
} from "@/payload-types";

const getCoverImageUrl = (
  item: Accessory | Baloon | Flower | FruitCart | Indoor | Present | Sweet,
) =>
  typeof item?.images?.at(0) !== "number" ? item?.images?.at(0)?.url : null;

export default getCoverImageUrl;
