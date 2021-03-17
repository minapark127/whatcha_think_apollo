import React from "react";
import { Review } from "../apiSchema";
import ReviewCard from "./ReviewCard";
import ReviewsGrid from "./ReviewsGrid";

interface IProps {
  reviews: Array<Review>;
  reviewer: string;
  currentTitle: string;
}

const MoreReviews: React.FC<IProps> = ({ reviews, reviewer, currentTitle }) => (
  <ReviewsGrid title={`view more reviews by ${reviewer}`} home={false}>
    {reviews.slice(0, 8).map((review, index) => (
      <React.Fragment key={index}>
        {review.display_title !== currentTitle && review.display_title && (
          <ReviewCard
            displayTitle={review.display_title}
            imgSrc={review.multimedia?.src}
            byline={reviewer}
          />
        )}
      </React.Fragment>
    ))}
  </ReviewsGrid>
);

export default MoreReviews;
