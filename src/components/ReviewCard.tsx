import { Link } from "react-router-dom";
import styled from "styled-components";

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
        <ImgWrapper scale={imgSrc ? true : false}>
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
  font-size: 1.4rem;
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

const ImgWrapper = styled.div<{ scale: boolean }>`
  position: relative;
  width: 100%;
  background-color: ${(props) => props.theme.colors.warmGrey};
  padding-top: 66.66%;
  overflow: hidden;
  &:hover {
    img {
      transform: ${(props) => (props.scale ? `scale(1.1)` : null)};
      transition: transform 0.5s linear;
    }
  }
  img {
    position: absolute;
    object-fit: cover;
    width: 100%;
    bottom: 0;
    left: 0;
  }
`;

export default ReviewCard;
