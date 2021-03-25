import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router";
import { IReviewer } from "../apiSchema";
import Loading from "../components/Loading";
import SearchLayout from "../components/SearchLayout";
import SearchResult from "../components/SearchResult";
import Message from "../components/Message";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>whatcha think | {reviewer}</title>
      </Helmet>
      <main>
        <SearchLayout reviewer={reviewer}>
          {loading ? <Loading /> : null}
          {error ? <Message message="something went wrong. try again" /> : null}
          {!loading && data && (
            <>
              {!data.reviewer && <Message message="no results found" />}
              {data?.reviewer?.map((review, index) => (
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
                      last={index === data.reviewer.length - 1 ? 1 : 0}
                    />
                  )}
                </React.Fragment>
              ))}
            </>
          )}
        </SearchLayout>
      </main>
    </>
  );
};

export default ReviewerDetail;
