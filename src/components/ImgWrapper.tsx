import styled from "styled-components";

interface IProps {
  scale?: number;
}

const Wrapper = styled.figure<IProps>`
  position: relative;
  background-color: ${(props) => props.theme.colors.lightGrey};
  padding-top: 66.66%; // 3:2 propportion
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  overflow: hidden;
  img {
    position: absolute;
    object-fit: cover;
    width: 100%;
    bottom: 0;
    left: 0;
  }
  &:hover {
    img {
      transform: ${(props) => (props.scale ? `scale(1.1)` : null)};
      transition: ${(props) => (props.scale ? `transform 0.5s linear` : null)};
    }
  }
`;

const ImgWrapper: React.FC<IProps> = ({ scale, children }) => (
  <Wrapper scale={scale}>{children}</Wrapper>
);

export default ImgWrapper;
