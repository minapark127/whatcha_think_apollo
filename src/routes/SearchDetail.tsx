import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router";
import { IReview, ISearchVars } from "./ReviewDetail";

interface IParams {
  query: string;
}
const GET_REVIEW = gql`
  query search($query: String) {
    search(query: $query) {
      display_title
      byline
    }
  }
`;

const SearchDetail = () => {
  const { query } = useParams<IParams>();
  const { loading, error, data } = useQuery<IReview, ISearchVars>(GET_REVIEW, {
    variables: { query },
  });
  console.log(data);
  return (
    <>
      <div>showing results for '{query}'...</div>
      <section>
        {data?.search.map((review, index) => (
          <ul key={index}>
            <li>title: {review.display_title}</li>
            <li>author: {review.byline}</li>
          </ul>
        ))}
      </section>
    </>
  );
};

export default SearchDetail;
