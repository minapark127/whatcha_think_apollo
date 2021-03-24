import { Link } from "react-router-dom";
import styled from "styled-components";
import ImgWrapper from "./ImgWrapper";

interface IProps {
  displayTitle: string;
  imgSrc: string;
  byline: string;
}

const ReviewCard: React.FunctionComponent<IProps> = ({
  displayTitle,
  imgSrc,
  byline,
}) => {
  const encodedTitle = encodeURI(displayTitle);

  return (
    <Container>
      <Link to={`/review/${encodedTitle}`}>
        <ImgWrapper scale={imgSrc ? 1 : 0}>
          <img
            src={imgSrc ? imgSrc : process.env.REACT_APP_ALT_IMG_URL}
            alt={imgSrc ? displayTitle : process.env.REACT_APP_ALT_IMG_DESC}
          />
        </ImgWrapper>
        <H2>{displayTitle}</H2>
      </Link>
      <By>By {byline}</By>
    </Container>
  );
};

const H2 = styled.h2`
  font-size: 1.4em;
  font-weight: 700;
  line-height: 1.23;

  &:hover {
    text-decoration: underline;
  }
`;

const By = styled.span`
  opacity: 0.8;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${By}, ${H2} {
    font-family: ${(props) => props.theme.fonts.title};
    padding: 0 0.5rem;
    margin-top: 0.5em;
  }
`;

export default ReviewCard;
