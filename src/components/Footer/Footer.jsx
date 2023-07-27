import { styled } from "styled-components";
import { breakpoints } from "../../styles/Breakpoints";
import { colorList } from "../../styles/ColorSettings";

import FooterSection from "./FooterSection";
import FooterFollowSection from "./FooterFollowSection";

import { ReactComponent as FooterLogoIcon } from "../../assets/logo/logo main white.svg";

const aboutUsData = [
  {id: 1, name: "Vision and Mission"}
]

const involvedData = [
  {
    id: 1,
    name: "Donate"
  },
  {
    id: 2,
    name: "Volunteer"
  },
  {
    id: 3,
    name: "Partner"
  },
]

const contactData = [
  {
    id: 1,
    name: "info@zakki.org",
    herf: "mailto:info@zakki.org"
  },
  {
    id: 2,
    name: "+62 819 9919 1498",
    herf: "tel:+6281999191498"
  }
]

const infoData = [
  {
    id: 1,
    name: "FAQ"
  },
  {
    id: 2,
    name: "Privacy Policy"
  },
  {
    id: 3,
    name: "Cookie Policy"
  },
  {
    id: 4,
    name: "Terms and Conditions"
  },
]


export default function Footer(){
  return (
    <SiteFooter>
      <FooterContainer>
        <FooterLogoContainer>
          <FooterLogoIcon />
        </FooterLogoContainer>
        <FooterSection title="About Us" data={aboutUsData} />
        <FooterSection title="Get Involved" data={involvedData} />
        <div>
          <FooterSection title="Contact Us" data={contactData} />
          <FooterFollowSection title="Follow Us" />
        </div>
        <FooterSection title="More Info" data={infoData} />
      </FooterContainer>
    </SiteFooter>
  );
}

// @media screen and (min-width: ${breakpoints.tablet}) {
// }
// @media screen and (min-width: ${breakpoints.desktop}) {
// }

const SiteFooter = styled.footer`
  background-color: ${colorList.neutral_80};
  color: ${colorList.white};
  width: 100%;
  margin-top: auto;
  
`;

const FooterContainer = styled.div`
  padding: 40px 24px;
  max-width: 1200px;
  margin: 0 auto;
  @media screen and (min-width: ${breakpoints.tablet}) {
    display: flex;
    justify-content: space-between;
  }
`;

const FooterLogoContainer = styled.div`
  display: none;
  @media screen and (min-width: ${breakpoints.desktop}) {
    display: block;
  }
`;