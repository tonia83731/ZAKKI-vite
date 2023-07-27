import { styled } from "styled-components"
import { breakpoints } from "../styles/Breakpoints"
import { colorList } from "../styles/ColorSettings"
import { PageContainer } from "../styles/Container"
import { SubTitle } from "../styles/Title"

import { Link } from "react-router-dom"




import { Guide } from "../components/Main/OneProgram/Guide"
import DonateCard from "../components/Main/OneProgram/DonateCard"
import ProgramEventCard from "../components/Main/OneProgram/ProgramEventCard"






export default function OneProgramPage(){
  return (
    <OneProgramContainer>
      <OneProgramSection id="one-program">
        <div>
          <Guide first="Programs" firstLink="/programs" second="Program Title" />
          <div>
            <ProgramTitle>Program Title</ProgramTitle>
            <OneProgramImg src="https://picsum.photos/300" alt="" />
            <OneProgramParagraph>
              &nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Nulla volutpat molestie neque. Proin non ante felis. Integer
              dignissim ex vel enim varius suscipit. Pellentesque dignissim
              laoreet sem, ac maximus est consectetur quis. Donec at mollis
              risus. Aenean venenatis mi rhoncus, elementum turpis nec, semper
              mi. Fusce consectetur ultrices faucibus. Nulla congue tempor
              magna, et molestie mi commodo a. Vivamus suscipit enim non mauris
              maximus, vel laoreet lorem iaculis.
              <br />
              &nbsp;&nbsp;Integer pulvinar sit amet turpis ut elementum. Sed
              pretium a erat eu pharetra. Donec eu nulla luctus ex pulvinar
              commodo. Vivamus sit amet eleifend purus. Vivamus tempus mi risus,
              non malesuada massa tincidunt sit amet. Nulla consequat lobortis
              quam ac maximus. Curabitur maximus risus tristique justo finibus,
              vel convallis neque rutrum. Cras tincidunt laoreet erat, ac
              condimentum nibh condimentum ac. Sed vel risus nisl. Aliquam
              dignissim blandit ligula. Etiam quam neque, pellentesque a
              placerat sed, sagittis vel neque. Cras orci nibh, rhoncus sed
              posuere nec, ornare non urna.
            </OneProgramParagraph>
          </div>
          <DonateCard mode="mobile" />
          <UpcommingEventDiv>
            <ProgramEventCard />
            <Link to="/events">
              <MoreEventLink>More Events</MoreEventLink>
            </Link>
          </UpcommingEventDiv>
          <OneProgramBtnGroup>
            <Link to="/team">
              <BorderBtn>Project Team Member &#8250;</BorderBtn>
            </Link>
            <Link to="/joinus">
              <BorderBtn>Become Volunteer &#8250;</BorderBtn>
            </Link>
            <Link to="#">
              <BorderBtn>View Past Event &#8250;</BorderBtn>
            </Link>
          </OneProgramBtnGroup>
        </div>
        <DonateCard mode="desktop" />
      </OneProgramSection>
    </OneProgramContainer>
  );
}

export const OneProgramContainer = styled(PageContainer)`
  padding-top: calc(45px + 2em);
  @media screen and (min-width: ${breakpoints.tablet}) {
    padding-top: calc(60px + 2em);
  }
`;

export const OneProgramSection = styled.section`
  @media screen and (min-width: ${breakpoints.desktop}) {
    display: grid;
    grid-template-columns: 70% 30%;
    grid-gap: 1em;
  }
`;

export const ProgramTitle = styled(SubTitle)`
  text-align: center;
  margin-bottom: 1.5rem;
`;
export const OneProgramImg = styled.img`
  width: 100%;
  height: 50vh;
  min-height: 300px;
  object-fit: cover;
  margin-bottom: 1em;
`;

export const OneProgramParagraph = styled.p`
  font-size: 14px;
  color: ${colorList.black_80}
`

const UpcommingEventDiv = styled.div`
  padding:2em 0;
`;

const MoreEventLink = styled.div`
  display: flex;
  justify-content: end;
  text-decoration: underline;
  font-size: 0.8em;
  font-weight: 500;
  color: ${colorList.green_focus_80};
  &:hover {
    font-weight: 700;
    color: ${colorList.green_focus};
  }
`;

const OneProgramBtnGroup = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  @media screen and (min-width: ${breakpoints.tablet}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
    grid-gap: 1em;
  }
`;

const BorderBtn = styled.div`
  height: 40px;
  line-height: 40px;
  font-size: 1em;
  font-weight: 700;
  color: ${colorList.green_focus_80};
  border: 2px solid ${colorList.green_focus_80};
  border-radius: 5px;
  margin-bottom: 0.5em;
  &:hover {
    background-color: ${colorList.green_focus_80};
    color: ${colorList.white};
    box-shadow:
      rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
  @media screen and (min-width: ${breakpoints.tablet}) {
    margin-bottom: 0;
  }
`;