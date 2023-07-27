import { styled } from "styled-components";
import { breakpoints } from "../../styles/Breakpoints";
import { colorList } from "../../styles/ColorSettings";
import { SubTitle } from "../../styles/Title";
import { FooterGroup } from "./FooterSection";


import { ReactComponent as TwitterIcon } from "../../assets/svg/icons8-twitter-circled-50.svg";
import { ReactComponent as FacebookIcon } from "../../assets/svg/icons8-facebook-50.svg";
import { ReactComponent as InstagramIcon } from "../../assets/svg/icons8-instagram-circle-50.svg";

export default function FooterFollowSection({ title, data }) {
  return (
    <FooterGroup>
      <SubTitle color={colorList.white}>{title}</SubTitle>
      <FooterSocList>
        <FooterSocLink>
          <TwitterIcon />
        </FooterSocLink>
        <FooterSocLink>
          <FacebookIcon />
        </FooterSocLink>
        <FooterSocLink>
          <InstagramIcon />
        </FooterSocLink>
      </FooterSocList>
    </FooterGroup>
  );
}


const FooterSocList = styled.div`
  margin-top: 1.2em;
`;
const FooterSocLink = styled.a`
  &:not(:last-child) {
    margin-right: 8px;
  }
  svg {
    width: 30px;
    height: 30px;
    path {
      fill: ${colorList.white};
    }
  }
  &:last-child {
    svg {
      width: 32px;
      height: 32px;
      path {
        fill: ${colorList.white};
      }
    }
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    svg {
      width: 35px;
      height: 35px;
    }
    &:last-child {
      svg {
        width: 37px;
        height: 37px;
      }
    }
  }
`;