import {
  Accessory,
  Baloon,
  Flower,
  FruitCart,
  Indoor,
  Gift,
  Sweet,
} from "@/payload-types";

const getCoverImageUrl = (
  item: Accessory | Baloon | Flower | FruitCart | Indoor | Gift | Sweet,
) => {
  if (item.images && typeof item.images[0] !== "number") {
    return item.images[0].url;
  }
  return null;
};

export default getCoverImageUrl;
