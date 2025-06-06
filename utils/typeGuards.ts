import { Review } from "@/payload-types";

const isNumbers = (arr: (number | Review)[]): arr is number[] => {
  return arr.every((item) => typeof item === "number");
};
const isReviews = (arr: (number | Review)[]): arr is Review[] => {
  return arr.every((item) => typeof item === "object");
};

export { isNumbers, isReviews };
