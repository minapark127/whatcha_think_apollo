import styled from "styled-components";
import { SiNewyorktimes } from "react-icons/si";
import { IoMailOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { IconContext } from "react-icons";
import { media } from "../styles/GlobalStyles";

const Footer = () => (
  <SFooter>
    <section>
      <Contact>
        <IconContext.Provider value={{ size: "1.3rem" }}>
          <a href="mailto:mina.park127@gmail.com">
            <li>
              <IoMailOutline />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/mina-p-1a04571a9/">
            <li>
              <RiLinkedinBoxLine />
            </li>
          </a>
          <a href="https://github.com/minapark127">
            <li>
              <FiGithub />
            </li>
          </a>
        </IconContext.Provider>
      </Contact>
      <ul>
        <li>&copy; {new Date().getFullYear()}</li>
        <li>WHATCHA THINK</li>
        <li>All rights reserved</li>
      </ul>
    </section>

    <Credit>
      <SiNewyorktimes />
      Data provided by&nbsp;
      <a href="https://www.nytimes.com/">The New York Times</a>
    </Credit>
  </SFooter>
);

const Credit = styled.div`
  display: flex;
  align-items: flex-end;
  svg {
    margin-right: 3px;
  }
  a {
    font-family: ${(props) => props.theme.fonts.title};
    :hover {
      text-decoration: underline;
    }
  }
`;

const SFooter = styled.footer`
  min-height: 20vh;
  margin-top: 10rem;
  padding-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-top: 1px solid ${(props) => props.theme.colors.warmGrey};
  opacity: 0.6;
  font-size: 0.9em;
  ul {
    display: flex;
    li:not(:last-child),
    a:not(:last-child) {
      margin-right: 0.5em;
    }
  }
  ${media.w576} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 2rem;
    ul {
      margin-bottom: 0.4rem;
    }
  }
  ${media.w320} {
    ul:last-child,
    ${Credit} {
      flex-direction: column;
      align-items: center;
      line-height: 1.5em;
      margin-bottom: 2rem;
    }
  }
`;

const Contact = styled.ul`
  margin-bottom: 0.4rem;
  align-items: flex-end;
  a {
    :hover {
      color: ${(props) => props.theme.colors.warmGrey};
    }
  }
  ${media.w576} {
    justify-content: center;
  }
`;

export default Footer;
