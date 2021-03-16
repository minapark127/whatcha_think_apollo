import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router";
import { IReview, ISearchVars } from "../apiSchema";
import Loading from "../components/Loading";
import SearchResult from "../components/SearchResult";

interface IParams {
  query: string;
}

const GET_REVIEW = gql`
  query search($query: String) {
    search(query: $query) {
      critics_pick
      byline
      headline
      display_title
      publication_date
      multimedia {
        src
      }
    }
  }
`;

const SearchDetail = () => {
  const { query } = useParams<IParams>();
  const { loading, error, data } = useQuery<IReview, ISearchVars>(GET_REVIEW, {
    variables: { query },
  });
  return (
    <>
      <main>
        <div>showing results for '{query}'...</div>
        {loading ? <Loading /> : null}
        {error ? <h1>ERROR!</h1> : null}
        {!loading && data && (
          <section>
            {/* if data.search === null, no result */}
            {/* handle no result */}
            {data?.search?.map((review, index) => (
              <SearchResult
                key={index}
                criticsPick={review.critics_pick}
                byline={review.byline}
                displayTitle={review.display_title}
                headline={review.headline}
                publicationDate={review.publication_date}
                imgSrc={review.multimedia?.src}
              />
            ))}
          </section>
        )}
      </main>
    </>
  );
};

export default SearchDetail;
