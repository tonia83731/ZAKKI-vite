import { styled } from "styled-components";
import { breakpoints } from "../../../styles/Breakpoints";
import { colorList } from "../../../styles/ColorSettings";
import { PageBorderTitle, PageBorderSubTitle } from "../../RepeatComponent/PageTitle";
import { PageContainer } from "../../../styles/Container";
import AboutUsDiagram from "./AboutUsDiagram";

export default function AboutUs() {
  return (
    <section id="about-us">
      <AboutUsContainer>
        <PageBorderTitle>About Us</PageBorderTitle>
        <AboutUsSubTitle data-mode="mobile">
          ZAKKI aims to help the elderly people financially through zakat and
          donation. ZAKKI’s foundation is based on the understanding that all
          people have the equal rights to have a decent life.
        </AboutUsSubTitle>
        <AboutUsGroup>
          <div>
            <AboutUsSubTitle data-mode="desktop">
              ZAKKI aims to help the elderly people financially through zakat
              and donation. ZAKKI’s foundation is based on the understanding
              that all people have the equal rights to have a decent life.
            </AboutUsSubTitle>
            <AboutUsDiagram />
          </div>
          <AboutUsIframe
            src="https://www.youtube.com/embed/tYmvsrkN8po"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></AboutUsIframe>
        </AboutUsGroup>
      </AboutUsContainer>
    </section>
  );
}

const AboutUsContainer = styled(PageContainer)`
  max-width: 1200px;
  text-align: center;
`;
const AboutUsGroup = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: 100%;
  grid-template-rows: 1fr 1.5fr;
  @media screen and (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 100%;
  }
`;

const AboutUsSubTitle = styled(PageBorderSubTitle)`
  &[data-mode="desktop"] {
    display: none;
  }
  @media screen and (min-width: ${breakpoints.tablet}) {
    &[data-mode="mobile"] {
      display: none;
    }
    &[data-mode="desktop"] {
      display: block;
      text-align: start;
    }
  }
`;

const AboutUsIframe = styled.iframe`
  width: 100%;
  height: 100%;
`