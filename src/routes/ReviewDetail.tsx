import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { IReview, IReviewer, ISearchVars } from "../apiSchema";
import Loading from "../components/Loading";
import Message from "../components/Message";
import MoreReviews from "../components/MoreReviews";
import Review from "../components/Review";
import { Helmet } from "react-helmet";

interface IParams {
  title: string;
}

const GET_REVIEW = gql`
  query search($query: String) {
    search(query: $query) {
      display_title
      byline
      critics_pick
      headline
      summary_short
      publication_date
      link {
        url
        suggested_link_text
      }
      multimedia {
        src
      }
    }
  }
`;

interface IRSearchVars {
  reviewer: string | undefined;
}

const GET_REVIEWER = gql`
  query reviewer($reviewer: String) {
    reviewer(reviewer: $reviewer) {
      display_title
      headline
      critics_pick
      multimedia {
        src
      }
    }
  }
`;

const ReviewDetail: React.FunctionComponent = () => {
  const { title } = useParams<IParams>();

  const { loading, error, data } = useQuery<IReview, ISearchVars>(GET_REVIEW, {
    variables: { query: title },
  });

  const { loading: Rloading, error: Rerror, data: Rdata } = useQuery<
    IReviewer,
    IRSearchVars
  >(GET_REVIEWER, {
    skip: !data || !data.search,
    variables: { reviewer: data && data.search && data.search[0].byline },
  });

  return (
    <>
      <Helmet>
        <title>whatcha think | {title}</title>
      </Helmet>
      <main>
        {loading ? <Loading /> : null}
        {error ? <Message message="something went wrong. try again" /> : null}

        {!loading && data && (
          <React.Fragment>
            {!data ||
              (!data.search ? (
                <Message message="no results found" />
              ) : (
                <Review
                  displayTitle={data?.search[0].display_title}
                  byline={data?.search[0].byline}
                  criticsPick={data?.search[0].critics_pick}
                  headline={data?.search[0].headline}
                  summaryShort={data?.search[0].summary_short}
                  publicationDate={data?.search[0].publication_date}
                  linkUrl={data?.search[0].link.url}
                  suggestedLinkText={data?.search[0].link.suggested_link_text}
                  imgSrc={data?.search[0].multimedia?.src}
                />
              ))}
          </React.Fragment>
        )}
        {!loading && Rloading ? <Loading /> : null}
        {Rerror ? <Message message="something went wrong. try again" /> : null}
        {!loading && data && !Rloading && Rdata && (
          <React.Fragment>
            {!Rdata.reviewer && <Message message="no results found" />}
            <MoreReviews
              reviews={Rdata.reviewer}
              reviewer={data?.search[0].byline}
              currentTitle={data?.search[0].display_title}
            />
          </React.Fragment>
        )}
      </main>
    </>
  );
};

export default ReviewDetail;
