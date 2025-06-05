import { Review } from "@/payload-types";

const isNumbers = (arr: (number | Review)[]): arr is number[] => {
  return typeof arr[0] === "number";
};
const isReviews = (arr: (number | Review)[]): arr is Review[] => {
  return typeof arr[0] === "object";
};

export { isNumbers, isReviews };
