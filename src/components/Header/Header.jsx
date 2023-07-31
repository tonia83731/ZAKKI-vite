import { styled } from "styled-components";
import { breakpoints } from "../../styles/Breakpoints";
import { colorList } from "../../styles/ColorSettings";

import { UnorderedList } from "../RepeatComponent/UnorderedList";

import { Link } from "react-router-dom";

import { ReactComponent as HeaderLogo } from "../../assets/logo/logo main.svg";
import { ReactComponent as HamburgerIcon } from "../../assets/svg/Hamburger.svg";

const headerData = [
  {
    id: 1,
    name: "Home",
    link: "/ZAKKI-vite/",
  },
  {
    id: 2,
    name: "Programs",
    link: "/ZAKKI-vite/programs",
  },
  {
    id: 3,
    name: "Events",
    link: "/ZAKKI-vite/events",
  },
  {
    id: 4,
    name: "Join Us",
    link: "/ZAKKI-vite/joinus",
  },
];

export default function Header() {
  const headerList = headerData.map((nav) => {
    return(
      <NavItem key={nav.id}>
        <NavLink href={nav.link}>
          {nav.name}
        </NavLink>
      </NavItem>
    )
  })
  return (
    <SiteHeader>
      <HeaderContainer>
        <NavToggle type="checkbox" id="nav-toggle" />
        <NavToggleLabel for="nav-toggle">
          <HamburgerIcon />
        </NavToggleLabel>
        <HeaderLogoContainer>
          <HeaderLogo />
        </HeaderLogoContainer>
        <NavBar>
          <NavList>
            {headerList}
          </NavList>
        </NavBar>
        <NavSelect name="language" id="nav-select">
          <NavOption value="ENG" selected>
            ENG
          </NavOption>
          <NavOption value="INA" disabled>
            INA
          </NavOption>
        </NavSelect>
      </HeaderContainer>
    </SiteHeader>
  );
}

const SiteHeader = styled.header`
  position: fixed;
  z-index: 999;
  width: 100%;
  background: #FFFFFF;
  -webkit-box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.1);
`;

const HeaderContainer = styled.div`
  height: 45px;
  display: grid;
  grid-template-columns: 5% 12% 54% 12% 5%;
  grid-gap: 3%;
  align-items: center;
  @media screen and (min-width: ${breakpoints.tablet}) {
    height: 60px;
    grid-template-columns: 5% 24% 42% 12% 5%;
  }
  @media screen and (min-width: ${breakpoints.desktop}) {
    max-width: 1200px;
    margin: 0 auto;
  }
`;



const NavBar = styled.nav`
  position: absolute;
  top: 100%;
  width: 100%;
  background: var(--nav-bg);
  text-align: center;
  padding-top: 8px;
  transition: transform 0.2s ease-out;
  transform-origin: top;
  transform: scale(1, 0);
  background-color: ${colorList.white_80};
  @media screen and (min-width: ${breakpoints.tablet}) {
    all: unset;
    width: 100%;
    grid-column: 3/4;
    justify-self: center;
  }
`;

const NavList = styled.ul`
  font-size: 1em;
  font-weight: 500;
  color: ${colorList.black_80};
  @media screen and (min-width: ${breakpoints.tablet}) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1%;
  }
`;
const NavItem = styled.li`
  padding-bottom: 8px;
  opacity: 0;
  @media screen and (min-width: ${breakpoints.tablet}) {
    padding-bottom: 0px;
    opacity: 100;
    justify-self: end;
  }
`;
const NavLink = styled.a`
  font-size: 1em;
  font-weight: 500;
  color: ${colorList.black_80};
`;

const NavToggle = styled.input`
  display: none;
  &:checked ~ ${NavBar} {
    transform: scale(1, 1);
  }
  &:checked ~ ${NavBar} ${NavItem} {
    opacity: 1;
    transition: opacity 0.2s ease-out 0.15s;
  }
`;
const NavToggleLabel = styled.label`
  grid-column: 2/3;
  @media screen and (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

const HeaderLogoContainer = styled.div`
  grid-column: 3/4;
  justify-self: center;
  svg {
    width: 120px;
    height: auto;
  }
  @media screen and (min-width: ${breakpoints.tablet}) {
    grid-column: 2/3;
    justify-self: start;
  }
`;

const NavSelect = styled.select`
  grid-column: 4/5;
  justify-self: end;
  border: none;
`;

const NavOption = styled.option`
  font-size: 1em;
  font-weight: 500;
`;
