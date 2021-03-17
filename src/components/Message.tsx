import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import styled from "styled-components";

interface IProp {
  message: string;
}

const Message: React.FC<IProp> = ({ message }) => (
  <Section>
    <div>{message}</div>
    <Link to="/">
      <BiArrowBack />
      home
    </Link>
  </Section>
);

const Section = styled.section`
  padding: 1.5rem 0;
  div {
    opacity: 0.6;
    margin-bottom: 1rem;
  }
  a {
    display: flex;
    align-items: flex-end;
    svg {
      margin-right: 3px;
    }
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Message;
