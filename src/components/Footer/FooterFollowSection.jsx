import { styled } from "styled-components";
import { breakpoints } from "../../styles/Breakpoints";
import { colorList } from "../../styles/ColorSettings";
import { SubTitle } from "../../styles/Title";
import { FooterGroup } from "./FooterSection";


import { ReactComponent as TwitterIcon } from "../../assets/svg/icons8-twitter-circled-50.svg";
import { ReactComponent as LinkedInIcon } from "../../assets/svg/icons8-linkedin-50.svg";
import { ReactComponent as YoutubeIcon } from "../../assets/svg/Youtube.svg";

export default function FooterFollowSection({ title, data }) {
  return (
    <FooterGroup>
      <SubTitle color={colorList.white}>{title}</SubTitle>
      <FooterSocList>
        <FooterSocLink>
          <a href="https://twitter.com/AksiZAKKI">
            <TwitterIcon />
          </a>
        </FooterSocLink>
        <FooterSocLink>
          <a href="https://www.linkedin.com/company/zakki/?trk=public_profile_volunteering-position_profile-section-card_full-click&originalSubdomain=in">
            <LinkedInIcon />
          </a>
        </FooterSocLink>
        <FooterSocLink>
          <a href="https://www.youtube.com/channel/UCKFr6Tc9VgQvANzUpVJIgrg">
            <YoutubeIcon />
          </a>
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

  @media screen and (min-width: ${breakpoints.tablet}) {
    svg {
      width: 35px;
      height: 35px;
    }
  }
`;