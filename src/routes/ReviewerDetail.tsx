import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { IReviewer } from "../apiSchema";

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
      <h2>reviewer detail for {reviewer}</h2>
      {!loading &&
        data?.reviewer.map((review, index) => (
          <section key={index}>
            <Link to={`/review/${review.display_title}`}>
              <div>{review.display_title}</div>
            </Link>
            <div>{review.critics_pick ? "critic's pick" : "x"}</div>
          </section>
        ))}
    </>
  );
};

export default ReviewerDetail;
