import styled from "styled-components";
import { loadingAnimation } from "../styles/animations";

const Loading = () => (
  <Wrapper>
    <Container>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Container>
  </Wrapper>
);

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 5rem;
  min-height: 75vh;
`;

const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  font-size: 0;
  color: ${(props) => props.theme.colors.warmGrey};
  width: 32px;
  height: 32px;
  & > div {
    position: relative;
    box-sizing: border-box;
    display: inline-block;
    float: none;
    background-color: ${(props) => props.theme.colors.warmGrey};
    border: 0 solid ${(props) => props.theme.colors.warmGrey};
    position: absolute;
    width: 8px;
    height: 8px;
    margin-top: -4px;
    margin-left: -4px;
    top: 50%;
    left: 50%;
    border-radius: 100%;
    animation: ${loadingAnimation} 1s infinite linear;
  }
  & > div:nth-child(1) {
    top: 5%;
    left: 50%;
    animation-delay: -0.875s;
  }
  & > div:nth-child(2) {
    top: 18.1801948466%;
    left: 81.8198051534%;
    animation-delay: -0.75s;
  }
  & > div:nth-child(3) {
    top: 50%;
    left: 95%;
    animation-delay: -0.625s;
  }
  & > div:nth-child(4) {
    top: 81.8198051534%;
    left: 81.8198051534%;
    animation-delay: -0.5s;
  }
  & > div:nth-child(5) {
    top: 94.9999999966%;
    left: 50.0000000005%;
    animation-delay: -0.375s;
  }
  & > div:nth-child(6) {
    top: 81.8198046966%;
    left: 18.1801949248%;
    animation-delay: -0.25s;
  }
  & > div:nth-child(7) {
    top: 49.9999750815%;
    left: 5.0000051215%;
    animation-delay: -0.125s;
  }
  & > div:nth-child(8) {
    top: 18.179464974%;
    left: 18.1803700518%;
    animation-delay: 0s;
  }
`;

export default Loading;
