import { Link } from "react-router-dom";
import { SiNewyorktimes } from "react-icons/si";
import { RiExternalLinkLine } from "react-icons/ri";
import styled from "styled-components";
import ImgWrapper from "./ImgWrapper";
import { media } from "../styles/GlobalStyles";

interface IProps {
  displayTitle: string;
  byline: string;
  criticsPick: number;
  headline: string;
  summaryShort: string;
  publicationDate: string;
  linkUrl: string;
  suggestedLinkText: string;
  imgSrc?: string;
}

const Review: React.FunctionComponent<IProps> = ({
  displayTitle,
  byline,
  criticsPick,
  headline,
  summaryShort,
  publicationDate,
  linkUrl,
  suggestedLinkText,
  imgSrc,
}) => {
  return (
    <Wrapper>
      <ImgWrapper>
        <img
          src={imgSrc ? imgSrc : process.env.REACT_APP_ALT_IMG_URL}
          alt={imgSrc ? displayTitle : process.env.REACT_APP_ALT_IMG_DESC}
        />
      </ImgWrapper>

      <Dl>
        <Pick>
          {criticsPick ? (
            <>
              <SiNewyorktimes /> <span>critic's pick</span>
            </>
          ) : null}
        </Pick>
        <Dt>{headline}</Dt>

        <Info>
          by <Link to={`/reviewer/${byline}`}>{byline}</Link> |{" "}
          {publicationDate}
        </Info>
        <Summary>{summaryShort}</Summary>
        <A href={linkUrl} target="_blank">
          <RiExternalLinkLine />
          {suggestedLinkText}
        </A>
      </Dl>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  align-items: center;
  column-gap: 1rem;
  line-height: 1.2;
  svg {
    margin-right: 3px;
  }
  ${media.w576} {
    grid-template-columns: minmax(200px, 1fr);
    grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
    align-items: start;
    row-gap: 1rem;
  }
`;

const Dl = styled.dl`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  ${media.w576} {
    padding: 0.2rem;
  }
`;

export const Pick = styled.div`
  display: flex;
  align-items: flex-end;
  text-transform: uppercase;
  font-weight: 800;
  margin-bottom: 0.5rem;
`;

const Dt = styled.dt`
  font-size: 1.8em;
  font-family: ${(props) => props.theme.fonts.title};
  padding: 0.3rem 0 1rem 0;
`;

const Info = styled.dd`
  opacity: 0.7;
  margin-bottom: 1rem;
  font-size: 0.9em;
  a {
    font-size: 1rem;
    font-family: ${(props) => props.theme.fonts.title};
    border-bottom: 1px solid ${(props) => props.theme.colors.warmGrey};
    &:hover {
      border-bottom: 1px solid transparent;
    }
  }
`;

const Summary = styled.dd`
  font-size: 1.2em;
  letter-spacing: 1px;
  margin-bottom: 1rem;
`;

const A = styled.a`
  display: flex;
  align-items: center;
  &:hover {
    opacity: 0.6;
  }
`;

export default Review;
