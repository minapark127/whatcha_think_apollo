import { useQuery, gql } from "@apollo/client";
import ReviewCard from "../components/ReviewCard";
import { Review } from "../apiSchema";
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
      summary_short
      publication_date
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
      {loading ? <h1>loading...</h1> : null}
      {error ? <h1>ERROR!</h1> : null}
      {!loading && data?.reviews && (
        <>
          <h1>Latest critic's picks</h1>
          <Grid>
            {data.reviews.map((review, index) => (
              <ReviewCard
                key={index}
                displayTitle={review.display_title}
                imgSrc={review.multimedia?.src}
                summaryShort={review.summary_short}
                byline={review.byline}
                publicationDate={review.publication_date}
              ></ReviewCard>
            ))}
          </Grid>
        </>
      )}
    </>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 1rem;
  grid-gap: 1em;
`;

export default Home;
