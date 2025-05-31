import {
  Container,
  Heading,
  Text,
  TextFont,
  TextSize,
  TextWeight,
} from "@/app/components/ui";
import { Review } from "@/payload-types";
import React from "react";

const isNumbers = (arr: (number | Review)[]): arr is number[] => {
  return typeof arr[0] === "number";
};
const isReviews = (arr: (number | Review)[]): arr is Review[] => {
  return typeof arr[0] === "object";
};

export default function Reviews({
  reviews,
}: {
  reviews: (number | Review)[] | null | undefined;
}) {
  if (!reviews || reviews.length === 0) {
    return (
      <Container>
        <div className="mb-2 flex w-full flex-col gap-1">
          <Heading level={3}>Отзывы (0):</Heading>
          <Text
            font={TextFont.LATO}
            weight={TextWeight.MEDIUM}
            size={TextSize.NORMAL}
            className="text-secondary-pink"
          >
            К сожалению отзывов пока что нет.
          </Text>
        </div>
      </Container>
    );
  }

  if (isNumbers(reviews)) {
    return <p>{reviews.map((review) => review)}</p>;
  }

  if (isReviews(reviews)) {
    return (
      <Container>
        <div className="mb-2 flex w-full flex-col gap-1">
          <Heading level={3}>Отзывы ({reviews.length}):</Heading>
          {reviews.map((review) => (
            <div
              key={review.id}
              className="mb-4 rounded-xl bg-main-pink-300 p-3 last:mb-0"
            >
              <Text
                font={TextFont.LATO}
                weight={TextWeight.MEDIUM}
                size={TextSize.NORMAL}
                as={"p"}
                className="text-balance text-secondary-pink"
              >
                {review.customer}:
              </Text>
              <Text
                font={TextFont.LATO}
                weight={TextWeight.MEDIUM}
                size={TextSize.NORMAL}
                className="pl-4"
              >
                {review.review}
              </Text>
            </div>
          ))}
        </div>
      </Container>
    );
  }
}
