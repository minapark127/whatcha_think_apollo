import { gql, useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import { Review } from "../apiSchema";

interface IParams {
  title: string;
}

export interface IReview {
  search: Review[];
}

export interface ISearchVars {
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

const ReviewDetail: React.FunctionComponent = () => {
  const { title } = useParams<IParams>();

  const { loading, error, data } = useQuery<IReview, ISearchVars>(GET_REVIEW, {
    variables: { query: title },
  });

  return (
    <>
      <div>review for {title}</div>
      {!loading && (
        <>
          <div>{data?.search[0].display_title}</div>
          <div>{data?.search[0].byline}</div>
          <Link to={`/reviewer/${data?.search[0].byline}`}>
            more reviews by {data?.search[0].byline}
          </Link>
        </>
      )}
    </>
  );
};

export default ReviewDetail;
