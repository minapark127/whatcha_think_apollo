import styled from "styled-components";
import { RiSearchLine } from "react-icons/ri";

interface IProps {
  query?: string;
  reviewer?: string;
}

const SearchLayout: React.FC<IProps> = ({ query, reviewer, children }) => (
  <section>
    <Title>
      <RiSearchLine />
      {query ? (
        <>
          Showing results for <Search>{query}</Search>
        </>
      ) : reviewer ? (
        <>
          More reviews by <Search>{reviewer}</Search>
        </>
      ) : null}
    </Title>
    {children}
  </section>
);

const Title = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: flex-end;
  svg {
    margin-right: 3px;
  }
`;

const Search = styled.span`
  font-family: ${(props) => props.theme.fonts.title};
  text-decoration: underline;
  font-size: 1.15em;
  padding: 0 3px;
`;

export default SearchLayout;
