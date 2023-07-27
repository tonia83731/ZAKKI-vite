import { styled } from "styled-components";
import { breakpoints } from "../styles/Breakpoints";
import { colorList } from "../styles/ColorSettings";
import { SubTitle2 } from "../styles/Title";
import {
  OneProgramContainer,
  OneProgramSection,
  ProgramTitle,
  OneProgramImg,
  OneProgramParagraph,
} from "./OneProgramPage";
import { GreenBgBtn } from "../components/Main/OneProgram/DonateCard";

import { Guide } from "../components/Main/OneProgram/Guide";

import { ReactComponent as EventTimeIcon } from "../assets/Img/event/event_time.svg";
import { ReactComponent as EventLocationIcon } from "../assets/Img/event/event_location.svg";
import { ReactComponent as EventProgramIcon } from "../assets/Img/event/event_program.svg";
import { ReactComponent as EventBellIcon } from "../assets/Img/event/event_bell.svg";

export default function OneEventPage() {
  return (
    <OneProgramContainer>
      <OneProgramSection id="one-event">
        <div>
          <Guide first="Event" firstLink="/events" second="Event Name" />
          <div>
            <ProgramTitle>Event Name</ProgramTitle>
            <OneProgramImg src="https://picsum.photos/300" alt="" />
            <OneEventInfo data-mode="mobile">
              <OneEventItem>
                <EventTimeIcon />
                <span>04/27/2023, 1pm-5pm</span>
              </OneEventItem>
              <OneEventItem>
                <EventLocationIcon />
                <span>(Online / Offline) Indonesia, Jakarta</span>
              </OneEventItem>
              <OneEventItem>
                <EventProgramIcon />
                <span>From Program Name</span>
              </OneEventItem>
              <BtnMode data-mode="desktop">
                <GreenBgBtn>Book the Event &#8250;</GreenBgBtn>
              </BtnMode>
            </OneEventInfo>
            <div>
              <SubTitle2>Description</SubTitle2>
              <OneProgramParagraph>
                &nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Nulla volutpat molestie neque. Proin non ante felis.
                Integer dignissim ex vel enim varius suscipit. Pellentesque
                dignissim laoreet sem, ac maximus est consectetur quis. Donec at
                mollis risus. Aenean venenatis mi rhoncus, elementum turpis nec,
                semper mi. Fusce consectetur ultrices faucibus. Nulla congue
                tempor magna, et molestie mi commodo a. Vivamus suscipit enim
                non mauris maximus, vel laoreet lorem iaculis.
              </OneProgramParagraph>
            </div>
            <BtnMode data-mode="mobile">
              <GreenBgBtn>Book the Event &#8250;</GreenBgBtn>
            </BtnMode>
          </div>
        </div>
        <OneEventInfo data-mode="desktop">
          <OneEventItem>
            <EventTimeIcon />
            <span>04/27/2023, 1pm-5pm</span>
          </OneEventItem>
          <OneEventItem>
            <EventLocationIcon />
            <span>(Online / Offline) Indonesia, Jakarta</span>
          </OneEventItem>
          <OneEventItem>
            <EventProgramIcon />
            <span>From Program Name</span>
          </OneEventItem>
          <BtnMode data-mode="desktop">
            <GreenBgBtn>Book the Event &#8250;</GreenBgBtn>
          </BtnMode>
        </OneEventInfo>
      </OneProgramSection>
    </OneProgramContainer>
  );
}

const BtnMode = styled.div`
  &[data-mode="desktop"] {
    display: none;
  }
  @media screen and (min-width: ${breakpoints.desktop}) {
    &[data-mode="desktop"] {
      display: block;
    }
    &[data-mode="mobile"] {
      display: none;
    }
  }
`;

const OneEventInfo = styled.div`
  &[data-mode="desktop"] {
    display: none;
  }
  @media screen and (min-width: ${breakpoints.desktop}) {
    &[data-mode="mobile"] {
      display: none;
    }
    &[data-mode="desktop"] {
      display: block;
      width: 100%;
      height: 200px; 
      padding: 1.5em 2em;
      margin-top: 7rem;
      border-radius: 10px;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
  }
`;
const OneEventItem = styled.div`
  font-size: 1em;
  color: ${colorList.green_focus_80};
  display: flex;
  align-items: center;
  svg {
    width: 1em;
    height: auto;
    path {
      fill: ${colorList.green_focus_80};
    }
  }
  span {
    margin-left: 0.5em;
  }
`;
