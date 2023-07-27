import { styled } from "styled-components";
import { breakpoints } from "../styles/Breakpoints";
import { colorList } from "../styles/ColorSettings";
import { PageContainer } from "../styles/Container";
import AboutUs from "../components/Main/Home/AboutUs";
import Subscribe from "../components/Main/Subscribe";
import HomeCarousel from "../components/Main/Home/HomeCarousel";

export default function HomePage() {
  return (
    <>
      <HomeCarouselSection id="home-carousel">
        <HomeCarousel />
      </HomeCarouselSection>
      <AboutUs />
      <Subscribe />
    </>
  );
}


const HomeCarouselSection = styled.section`
  padding-top: 45px;
  @media screen and (min-width: ${breakpoints.tablet}) {
    padding-top: 60px;
  }
`;

