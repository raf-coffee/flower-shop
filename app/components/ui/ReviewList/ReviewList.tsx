import React from "react";

import { Review } from "@/payload-types";
import { getData } from "@/lib/getData";

import Container from "@/app/components/ui/Container";
import Heading from "@/app/components/ui/Heading";
import Text, { TextFont, TextWeight, TextSize } from "@/app/components/ui/Text";
import { isNumbers, isReviews } from "@/utils/typeGuards";

export default async function ReviewList({
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
            К сожалению, отзывов пока что нет.
          </Text>
        </div>
      </Container>
    );
  }

  if (isNumbers(reviews)) {
    const data = await Promise.all(
      reviews.map(async (review) => {
        const result = await getData.findById("reviews", review);
        return result;
      }),
    );
    return (
      <Container>
        <div className="mb-2 flex w-full flex-col gap-1">
          <Heading level={3}>Отзывы ({data.length}):</Heading>
          {data.map((review) => (
            <ReviewItem review={review} key={review.id} />
          ))}
        </div>
      </Container>
    );
  }

  if (isReviews(reviews)) {
    return (
      <Container>
        <div className="mb-2 flex w-full flex-col gap-1">
          <Heading level={3}>Отзывы ({reviews.length}):</Heading>
          {reviews.map((review) => (
            <ReviewItem review={review} key={review.id} />
          ))}
        </div>
      </Container>
    );
  }
}

function ReviewItem({ review }: { review: Review }) {
  return (
    <div className="mb-4 rounded-xl bg-main-pink-300 p-3 last:mb-0">
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
  );
}
