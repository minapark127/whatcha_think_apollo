import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  h2 {
    margin-top: 10px;
  }
`;

interface IProps {
  display_title: string;
  imgSrc: string;
}

const ReviewCard: React.FunctionComponent<IProps> = ({
  display_title,
  imgSrc,
}) => {
  const encodedTitle = encodeURI(display_title);
  return (
    <Container>
      <Link to={`/review/${encodedTitle}`}>
        <img src={imgSrc} width="250" alt={display_title} />
        <h2>{display_title}</h2>
      </Link>
    </Container>
  );
};

export default ReviewCard;
