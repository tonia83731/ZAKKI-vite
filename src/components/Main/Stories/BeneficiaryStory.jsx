import { styled } from "styled-components";
import { breakpoints } from "../../../styles/Breakpoints";
import { CommaUpSVG, CommaDownSVG } from "../../../styles/StorySVG";
import { CenterSubTitle } from "./VolunteerStory";
import { SubTitle2 } from "../../../styles/Title";
import { StoryImg, StoryCaptionGroup } from "./VolunteerStory";
import BeneficiaryImg from "../../../assets/Img/Story/beneficiary.png";
import { ReactComponent as CommaUpIcon } from "../../../assets/Img/Story/CommaUp.svg";
import { ReactComponent as CommaDownIcon } from "../../../assets/Img/Story/CommaDown.svg";


export default function BeneficiaryStory() {
  return (
    <div id="beneficiary-story">
      <div>
        <CenterSubTitle margin="0 0 1em">Beneficiary's Stories</CenterSubTitle>
        <BeneficiaryStoryBody>
          <StoryImg src={BeneficiaryImg} alt="beneficiary" />
          <div>
            <CommaUpSVG>
              <CommaUpIcon />
            </CommaUpSVG>
            <SubTitle2 margin="0 0 1em">
              ZAKKI helped us to find a donor to provide a diet program in our
              village.
            </SubTitle2>
            <p className="stories">
              Before getting help from ZAKKI, we had a hard time funding the
              diet program for the elderly. Luckily, we met the ZAKKI community
              that can help us to overcome our financial problem. We are very
              grateful for the material assistance and suggestions provided
              during the workshop.
            </p>
            <CommaDownSVG>
              <CommaDownIcon />
            </CommaDownSVG>
            <StoryCaptionGroup>
              <p>Prawoko</p>
              <p>Principle of Poksila RW 03, Randusari-Semarang</p>
            </StoryCaptionGroup>
          </div>
        </BeneficiaryStoryBody>
      </div>
    </div>
  );
}

const BeneficiaryStoryBody = styled.div`
  @media screen and (min-width: ${breakpoints.tablet}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1em;
    align-items: center;
  }
`;