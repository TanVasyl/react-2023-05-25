import { Reviews } from "@/components/Reviews/Reviews";
import { selectRestaurantReviewIds } from "@/redux/features/restaurant/selectors";
import React from "react";
import { useSelector } from "react-redux";

export const ReviewsContainer = ({ restaurantId, className }) => {
  const reviewIds = useSelector((state) =>
    selectRestaurantReviewIds(state, restaurantId)
  );

  if (!reviewIds?.length) {
    return null;
  }

  return <Reviews reviewIds={reviewIds} className={className} />;
};
