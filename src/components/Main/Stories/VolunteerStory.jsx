import { styled } from "styled-components";
import { breakpoints } from "../../../styles/Breakpoints";
import { colorList } from "../../../styles/ColorSettings";
import { CommaUpSVG, CommaDownSVG } from "../../../styles/StorySVG";
import { SubTitle } from "../../../styles/Title";
import { SubTitle2 } from "../../../styles/Title";


import VolunteerImg from "../../../assets/Img/Story/volunteer.png";
import { ReactComponent as CommaUpIcon } from "../../../assets/Img/Story/CommaUp.svg";
import { ReactComponent as CommaDownIcon } from "../../../assets/Img/Story/CommaDown.svg";

export default function VolunteerStory() {
  return (
    <div id="volunteer-story">
      <div>
        <CenterSubTitle margin="0 0 1em">Volunteer's Stories</CenterSubTitle>
        <VolunteerStoryBody>
          <div>
            <CommaUpSVG>
              <CommaUpIcon />
            </CommaUpSVG>
            <SubTitle2 margin="0 0 1em">
              I appreciate how ZAKKI fight for the elderly to survive.
            </SubTitle2>
            <p className="stories">
              ZAKKI is a startup that started from zero. Despite of that, after
              I joined them for few months, I got so much benefit, from earning
              experiences working with elderly to being able volunteer my time
              and skills to help people in need. So exciting!
            </p>
            <CommaDownSVG>
              <CommaDownIcon />
            </CommaDownSVG>
            <StoryCaptionGroup>
              <p>Lu’llyatul Mutmainah</p>
              <p>Mahasiswi, Tegal</p>
            </StoryCaptionGroup>
          </div>
          <StoryImg src={VolunteerImg} alt="volunteer" />
        </VolunteerStoryBody>
      </div>
    </div>
  );
}

export const CenterSubTitle = styled(SubTitle)`
  text-align: center;
`;

const VolunteerStoryBody = styled.div`
  display: flex;
  flex-direction: column;
  div {
    order: 2;
  }
  img {
    order: 1;
  }
  @media screen and (min-width: ${breakpoints.tablet}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 100%;
    grid-gap: 1em;
    div {
      order: 1;
    }
    img {
      order: 2;
    }
  }
`;

export const StoryImg = styled.img`
  padding-bottom: 0.5em;
  width: 100%;
  height: 40%;
  object-fit: cover;
  @media screen and (min-width: ${breakpoints.tablet}) {
    height: 90%;
  }
`;

export const StoryCaptionGroup = styled.div`
  font-size: 0.75em;
  color: ${colorList.neutral_70};
  p:first-child {
    font-weight: bold;
  }
`;