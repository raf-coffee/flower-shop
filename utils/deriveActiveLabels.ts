import {
  Accessory,
  Baloon,
  Flower,
  FruitCart,
  Indoor,
  Present,
  Sweet,
} from "@/payload-types";
import { Label } from "@/types";

const deriveActiveLabels = (
  item: Accessory | Baloon | Flower | FruitCart | Indoor | Present | Sweet,
) => {
  const labels: Record<string, Label> = {
    "1": {
      title: "Хит продаж",
      bg: "#FD4F79",
    },
    "2": {
      title: "Новинка",
      bg: "#4AE950",
    },
    "4": {
      title: "Букет дня",
      bg: "#FD984F",
    },
    "5": {
      title: "Скидка 50%",
      bg: "#F1EB4C",
      color: "#7EA048",
    },
  };

  return Object.keys(labels).reduce((acc, value): Label[] => {
    const isLabelExist = item?.tags?.find((tag) =>
      typeof tag.value === "number"
        ? String(tag.value) === value
        : String(tag.value.id) === value,
    );

    if (isLabelExist) {
      return [...acc, labels[value]];
    }

    return acc;
  }, [] as Label[]);
};

export default deriveActiveLabels;
