import { Review } from "@/components/Review/Review";
import { useGetReviewsQuery } from "@/redux/services/api";
import React from "react";

export const ReviewContainer = ({ restaurantId, className }) => {
  const { data: reviews, isLoading } = useGetReviewsQuery(restaurantId);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!reviews?.length) {
    return null;
  }

  return (
    <div>
      {reviews.map((review) => (
        <Review review={review} className={className} />
      ))}
    </div>
  );
};
