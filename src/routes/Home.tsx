import { useQuery, gql } from "@apollo/client";
import ReviewCard from "../components/ReviewCard";
import { Review } from "../apiSchema";
import ReviewsGrid from "../components/ReviewsGrid";
import Loading from "../components/Loading";
import SearchForm from "../components/SearchForm";
import styled from "styled-components";

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
      <Div>
        <SearchForm />
      </Div>
      {loading ? <Loading /> : null}
      {error ? <h1>ERROR!</h1> : null}
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
  padding: 5rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default Home;
