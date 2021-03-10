import { useQuery, gql } from "@apollo/client";

interface Review {
  display_title: string;
  critics_pick: number;
  byline: string;
  headline: string;
  summary_short: string;
  publication_date: string;
  opening_date: string;
  date_updated: string;
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
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery<Reviews, ReviewVars>(GET_REVIEWS, {
    variables: { limit: 20 },
  });
  if (loading) {
    return <h1>loading...</h1>;
  }
  if (error) {
    console.error(error);
  }
  if (!loading && data?.reviews) {
    data.reviews.map((review, index) => {
      console.log(review.display_title);
    });
  }
  return <h1>Home</h1>;
};

export default Home;
