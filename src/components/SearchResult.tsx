import { Link } from "react-router-dom";
import { SiNewyorktimes } from "react-icons/si";
import styled from "styled-components";
import ImgWrapper from "./ImgWrapper";
import { Pick } from "./Review";

interface IProps {
  key: number;
  criticsPick: number;
  byline: string;
  displayTitle: string;
  headline: string;
  publicationDate: string;
  imgSrc?: string;
}

const SearchResult: React.FC<IProps> = ({
  criticsPick,
  byline,
  displayTitle,
  headline,
  publicationDate,
  imgSrc,
}) => {
  return (
    <Wrapper>
      <Date>{publicationDate}</Date>

      <Link to={`/review/${displayTitle}`}>
        <Dl>
          {criticsPick ? (
            <Pick>
              <SiNewyorktimes /> <span>critic's pick</span>
            </Pick>
          ) : null}
          <dt>{headline}</dt>
          <dd>By {byline}</dd>
        </Dl>
      </Link>

      <ImgWrapper>
        <img
          src={imgSrc ? imgSrc : process.env.REACT_APP_ALT_IMG_URL}
          alt={imgSrc ? headline : process.env.REACT_APP_ALT_IMG_DESC}
        />
      </ImgWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: max-content 2fr minmax(100px, 280px);
  column-gap: 2rem;
  padding: 2rem 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.warmGrey};
`;

const Date = styled.span`
  opacity: 0.6;
  font-size: 0.95rem;
  margin-top: 0.3rem;
`;

const Dl = styled.dl`
  height: 100%;
  display: flex;
  flex-direction: column;
  &:hover {
    dt {
      text-decoration: underline;
    }
  }
  dt {
    font-family: ${(props) => props.theme.fonts.title};
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.7rem;
  }
  dd {
    text-transform: uppercase;
  }
`;

export default SearchResult;