import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import SearchForm from "./SearchForm";
import { IconContext } from "react-icons";
import { RiSearchLine } from "react-icons/ri";
import { hiddenToShow } from "../styles/animations";
import { media } from "../styles/GlobalStyles";

interface WrapperProps {
  onClick: () => void;
}

const Header = () => {
  const { pathname } = useLocation();
  const [showSearch, setShowSearch] = useState(false);
  const [currentLocation, setLocation] = useState(pathname);
  if (pathname !== currentLocation) {
    setLocation(pathname);
    setShowSearch(false);
  }

  const toggleForm = () => {
    setShowSearch(!showSearch);
  };

  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setInnerWidth(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () =>
        setInnerWidth(window.innerWidth)
      );
    };
  });

  return (
    <>
      <SHeader>
        <Link to="/">
          <Logo>{innerWidth > 576 ? `WHATCHA THINK` : `W`}</Logo>
        </Link>

        <SearchContainer animation={showSearch}>
          <IconWrapper onClick={toggleForm}>
            <IconContext.Provider
              value={{ size: "1.5em", className: "searchIcon" }}
            >
              <RiSearchLine />
            </IconContext.Provider>
          </IconWrapper>
          {showSearch && <SearchForm />}
        </SearchContainer>
      </SHeader>
    </>
  );
};

const slideAnimation = css`
  animation: ${hiddenToShow} 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

const SHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 2em;
  text-transform: uppercase;
`;

const SearchContainer = styled.section<{ animation: boolean }>`
  display: flex;
  align-items: center;
  ${(props) => (props.animation ? slideAnimation : null)};
  .searchIcon {
    cursor: pointer;
    color: ${(props) => props.theme.colors.black};
  }
  width: ${(props) => (props.animation ? `30%` : null)};
  ${media.w1024} {
    width: ${(props) => (props.animation ? `50%` : null)};
  }
  ${media.w576} {
    width: ${(props) => (props.animation ? `80%` : null)};
  }
`;

const IconWrapper = styled.div<WrapperProps>`
  padding: 0 0.3rem;
`;

export default Header;
