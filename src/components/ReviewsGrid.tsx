import styled from "styled-components";

interface IProps {
  home: boolean;
  title: string;
}

const ReviewsGrid: React.FunctionComponent<IProps> = ({
  home,
  title,
  children,
}) => {
  return (
    <Wrapper home={home}>
      <H1 home={home}>{title}</H1>
      <Grid home={home}>{children}</Grid>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ home: boolean }>`
  padding: ${(props) => (props.home ? `0 1.5rem` : `0`)};
  margin-top: ${(props) => (props.home ? null : `3rem`)};
  //same as header padding width
`;
const H1 = styled.h1<{ home: boolean }>`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => (props.home ? `1.5em` : `1.3em`)};
  font-weight: ${(props) => (props.home ? `600` : `500`)};
  letter-spacing: 0.5px;
  text-transform: ${(props) => (props.home ? null : `capitalize`)};
  text-decoration: underline;
  margin: 1rem 0;
`;

const Grid = styled.div<{ home: boolean }>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1.5em 1rem;
  display: ${(props) => (props.home ? null : "flex")};
  div {
    min-width: ${(props) => (props.home ? null : "270px")};
  }
  overflow-x: ${(props) => (props.home ? null : "scroll")};
  -webkit-overflow-scrolling: ${(props) => (props.home ? null : "touch")};
`;

export default ReviewsGrid;
