import { useQuery, gql } from "@apollo/client";
import ReviewCard from "../components/ReviewCard";
import { Review } from "../apiSchema";
import ReviewsGrid from "../components/ReviewsGrid";
import Loading from "../components/Loading";
import SearchForm from "../components/SearchForm";
import styled from "styled-components";
import Message from "../components/Message";
import { media } from "../styles/GlobalStyles";
import { Helmet } from "react-helmet";

interface Reviews {
  reviews: Review[];
}

interface ReviewVars {
  limit: number;
}

const GET_REVIEWS = gql`
  query reviews($limit: Int) {
    reviews(limit: $limit) {
      display_title
      byline
      multimedia {
        src
      }
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery<Reviews, ReviewVars>(GET_REVIEWS, {
    variables: { limit: 20 },
  });

  return (
    <>
      <Helmet>
        <title>whatcha think</title>
      </Helmet>
      <Div>
        <SearchForm />
      </Div>
      {loading ? <Loading /> : null}
      {error ? <Message message="something went wrong. try again" /> : null}
      {!loading && data?.reviews && (
        <ReviewsGrid title="Latest NYT Critic's Picks" home={true}>
          {data.reviews.map((review, index) => (
            <ReviewCard
              key={index}
              displayTitle={review.display_title}
              imgSrc={review.multimedia?.src}
              byline={review.byline}
            ></ReviewCard>
          ))}
        </ReviewsGrid>
      )}
    </>
  );
};

const Div = styled.div`
  padding: 5rem 1rem;
  margin: 0 auto;
  width: 60%;
  ${media.w1024} {
    width: 80%;
  }
  ${media.w768} {
    width: 90%;
    padding: 3.5rem 1rem;
  }
  ${media.w576} {
    width: 100%;
    padding: 2rem 1rem;
  }
`;

export default Home;
