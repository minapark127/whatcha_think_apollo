import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router";
import { IReviewer } from "../apiSchema";
import Loading from "../components/Loading";
import SearchLayout from "../components/SearchLayout";
import SearchResult from "../components/SearchResult";

interface IParams {
  reviewer: string;
}

export interface IReviewerSearchVars {
  reviewer: string;
}

const GET_REVIEWER = gql`
  query reviewer($reviewer: String) {
    reviewer(reviewer: $reviewer) {
      display_title
      critics_pick
      byline
      headline
      publication_date
      multimedia {
        src
      }
    }
  }
`;

const ReviewerDetail = () => {
  const { reviewer } = useParams<IParams>();

  const { loading, error, data } = useQuery<IReviewer, IReviewerSearchVars>(
    GET_REVIEWER,
    {
      variables: { reviewer },
    }
  );

  return (
    <>
      <main>
        <SearchLayout reviewer={reviewer}>
          {loading ? <Loading /> : null}
          {error ? <h1>ERROR!</h1> : null}

          {!loading &&
            data?.reviewer.map((review, index) => (
              <React.Fragment key={index}>
                {review.display_title && (
                  <SearchResult
                    key={index}
                    criticsPick={review.critics_pick}
                    byline={review.byline}
                    displayTitle={review.display_title}
                    headline={review.headline}
                    publicationDate={review.publication_date}
                    imgSrc={review.multimedia?.src}
                  />
                )}
              </React.Fragment>
            ))}
        </SearchLayout>
      </main>
    </>
  );
};

export default ReviewerDetail;
