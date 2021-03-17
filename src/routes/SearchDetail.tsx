import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router";
import { IReview, ISearchVars } from "../apiSchema";
import Loading from "../components/Loading";
import Message from "../components/Message";
import SearchLayout from "../components/SearchLayout";
import SearchResult from "../components/SearchResult";

interface IParams {
  query: string;
}

const GET_REVIEW = gql`
  query search($query: String) {
    search(query: $query) {
      critics_pick
      byline
      headline
      display_title
      publication_date
      multimedia {
        src
      }
    }
  }
`;

const SearchDetail = () => {
  const { query } = useParams<IParams>();
  const { loading, error, data } = useQuery<IReview, ISearchVars>(GET_REVIEW, {
    variables: { query },
  });
  return (
    <>
      <main>
        <SearchLayout query={query}>
          {loading ? <Loading /> : null}
          {error ? <Message message="something went wrong. try again" /> : null}
          {!loading && data && (
            <>
              {!data.search && <Message message="no results found" />}
              {data?.search?.map((review, index) => (
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
                      last={index + 1 === data.search.length ? 1 : 0}
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

export default SearchDetail;
