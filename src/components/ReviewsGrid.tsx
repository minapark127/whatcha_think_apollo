import styled from "styled-components";

const ReviewsGrid: React.FunctionComponent = ({ children }) => {
  return (
    <main>
      <H1>Latest NYT Critic's Picks</H1>
      <Grid>{children}</Grid>
    </main>
  );
};

const H1 = styled.h1`
  font-size: 1.5em;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-align: center;
  text-decoration: underline;
  margin-bottom: 1.3rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 1rem;
  grid-gap: 1em;
`;

export default ReviewsGrid;
