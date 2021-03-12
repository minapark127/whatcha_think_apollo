import { Link } from "react-router-dom";
import styled from "styled-components";

const ALT_IMG_URL =
  "https://developer.nytimes.com/files/poweredby_nytimes_200a.png?v=1583354208344";
const ALT_IMG_DESC = "The New York Times Logo provided by The New York Times";

interface IProps {
  displayTitle: string;
  imgSrc: string;
  summaryShort: string;
  byline: string;
  publicationDate: string;
}

const ReviewCard: React.FunctionComponent<IProps> = ({
  displayTitle,
  imgSrc,
  summaryShort,
  byline,
  publicationDate,
}) => {
  const encodedTitle = encodeURI(displayTitle);

  return (
    <Container>
      <Link to={`/review/${encodedTitle}`}>
        <ImgWrapper scale={imgSrc ? true : false}>
          <img
            src={imgSrc ? imgSrc : ALT_IMG_URL}
            alt={imgSrc ? displayTitle : ALT_IMG_DESC}
          />
        </ImgWrapper>

        <H2>{displayTitle}</H2>
      </Link>
      <P>{summaryShort}</P>
      <By>By {byline}</By>
      <Date>{publicationDate}</Date>
    </Container>
  );
};

const H2 = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.23;
  margin: 0.5em 0;
  &:hover {
    text-decoration: underline;
  }
`;

const By = styled.span`
  margin: 1.1em 0 0.5em 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${By}, ${H2} {
    font-family: ${(props) => props.theme.fonts.title};
  }
  span {
    text-align: right;
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

const P = styled.p`
  letter-spacing: 0.5px;
  font-size: 1.03rem;
  line-height: 1.25;
`;

const Date = styled.span`
  font-size: 0.85rem;
  opacity: 0.6;
`;

export default ReviewCard;
