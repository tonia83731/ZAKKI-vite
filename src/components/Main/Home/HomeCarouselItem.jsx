import { Link } from "react-router-dom";

import { styled } from "styled-components";
import { PageContainer } from "../../../styles/Container";

import HomeMain from "../../../assets/Img/Home/Home_main.png";
import HomeProgram from "../../../assets/Img//Home/Home_program.png";
import HomeStory from "../../../assets/Img//Home/Home_stories.png";

import { breakpoints } from "../../../styles/Breakpoints";
import { colorList } from "../../../styles/ColorSettings";




export default function HomeCarouselItem({ page, title, boldTitle, data }) {
  return (
    <CarouselDiv data-page={page}>
      <CarouselContainer>
        {page === "program" ? <CarouselTag>Hottest</CarouselTag> : ""}
        <CarouselTitle>
          {title}
          <b>{boldTitle}</b>
        </CarouselTitle>
        <CarouselBtnGroup>
          {data.map((btn) => {
            return (
              <Link to={btn.link} key={btn.id}>
                <CarouselBtn>{btn.title}</CarouselBtn>
              </Link>
            );
          })}
        </CarouselBtnGroup>
      </CarouselContainer>
    </CarouselDiv>
  );
}

const CarouselDiv = styled.div`
  width: 100%;
  height: 60vh;
  min-height: 325px;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: left center;

  position: relative;
  &[data-page="main"] {
    background-image: url(${HomeMain});
  }
  &[data-page="program"] {
    background-image: url(${HomeProgram});
  }
  &[data-page="story"] {
    background-image: url(${HomeStory});
  }
  @media screen and (min-width: ${breakpoints.tablet}) {
    min-height: 350px;
    background-position: center center;
  }
`;
const CarouselContainer = styled(PageContainer)`
  max-width: 1200px;
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 45%;
    bottom: 50%;
    left: unset;
    right: 5%;
    transform: translate(0, 50%);
  }
`;

const CarouselTitle = styled.div`
  font-size: 2em;
  font-weight: 500;
  color: ${colorList.white};
  margin-bottom: 0.5em;
  b {
    font-weight: 700;
  }
`;

const CarouselBtnGroup = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(2, 1fr);
  text-align: center;
`;

const CarouselBtn = styled.div`
  width: 100%;
  min-height: 30px;
  line-height: 25px;
  color: ${colorList.white};
  background-color: ${colorList.primary};
  border-radius: 5px;
  @media screen and (min-width: ${breakpoints.tablet}) {
    min-width: 205px;
    min-height: 45px;
    line-height: 40px;
  }
`;

const CarouselTag = styled.p`
  font-size: 0.75em;
  font-weight: 500;
  color: ${colorList.white};
  background-color: ${colorList.warning};
  width: 15%;
  max-width: 60px;
  padding: 0.1em 0.3em;
  text-align: center;
  border-radius: 5px;
`;
