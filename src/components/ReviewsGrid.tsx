import styled from "styled-components";

const ReviewsGrid: React.FunctionComponent = ({ children }) => {
  return (
    <Wrapper>
      <H1>Latest NYT Critic's Picks</H1>
      <Grid>{children}</Grid>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 1.5rem;
  //same as header padding width
`;
const H1 = styled.h1`
  font-size: 1.5em;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-align: center;
  text-decoration: underline;
  margin: 1rem 0 2rem 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1.5em 1rem;
`;

export default ReviewsGrid;
