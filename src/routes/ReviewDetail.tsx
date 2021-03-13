import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { IReview, ISearchVars } from "../apiSchema";
import Loading from "../components/Loading";
import Review from "../components/Review";

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

const ReviewDetail: React.FunctionComponent = () => {
  const { title } = useParams<IParams>();
  const { loading, error, data } = useQuery<IReview, ISearchVars>(GET_REVIEW, {
    variables: { query: title },
  });

  return (
    <>
      {loading ? <Loading /> : null}
      {error ? <h1>ERROR!</h1> : null}
      {!loading && data && (
        <main>
          <Review
            displayTitle={data?.search[0].display_title}
            byline={data?.search[0].byline}
            criticsPick={data?.search[0].critics_pick}
            headline={data?.search[0].headline}
            summaryShort={data?.search[0].summary_short}
            publicationDate={data?.search[0].publication_date}
            linkUrl={data?.search[0].link.url}
            suggestedLinkText={data?.search[0].link.suggested_link_text}
            imgSrc={data?.search[0].multimedia.src}
          />
        </main>
      )}
    </>
  );
};

export default ReviewDetail;
