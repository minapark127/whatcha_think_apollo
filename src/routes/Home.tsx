import { useQuery, gql } from "@apollo/client";
import ReviewCard from "../components/ReviewCard";

interface Link {
  url: string;
  suggested_link_text: string;
}

interface Multimedia {
  src: string;
  width: number;
  height: number;
}

interface Review {
  display_title: string;
  critics_pick: number;
  byline: string;
  headline: string;
  summary_short: string;
  publication_date: string;
  opening_date: string;
  date_updated: string;
  link: Link;
  multimedia: Multimedia;
}

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
          {data.reviews.map((review, index) => (
            <ReviewCard
              key={index}
              display_title={review.display_title}
              imgSrc={review.multimedia?.src}
            ></ReviewCard>
          ))}
        </>
      )}
    </>
  );
};

export default Home;
