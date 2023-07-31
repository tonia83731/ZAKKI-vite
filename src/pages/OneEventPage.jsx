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

import { dummyEventData } from "../Data/EventData";
import { useParams } from "react-router-dom";

export default function OneEventPage() {
  const object = useParams()
  const id = object.id
  const numId = Number(id)
  const oneEventData = dummyEventData.filter(prop => prop.id === numId)
  console.log(object)
  return (
    <OneProgramContainer>
     {
      oneEventData.map((prop) => {
        return (
          <OneProgramSection id="one-event">
            <div>
              <Guide
                first="Event"
                firstLink="/ZAKKI-vite/events"
                second={prop.title}
                secondLink={`/ZAKKI-vite/events/${prop.id}`}
              />
              <div>
                <ProgramTitle>{prop.title}</ProgramTitle>
                <OneProgramImg src={prop.img} alt="" />
                <OneEventInfo data-mode="mobile">
                  <OneEventItem>
                    <EventTimeIcon />
                    <span>{prop.date}</span>
                  </OneEventItem>
                  <OneEventItem>
                    <EventLocationIcon />
                    <span>(Online / Offline) {prop.location}</span>
                  </OneEventItem>
                  <OneEventItem>
                    <EventProgramIcon />
                    <span>From {prop.program}</span>
                  </OneEventItem>
                  <BtnMode data-mode="desktop">
                    <GreenBgBtn>Book the Event &#8250;</GreenBgBtn>
                  </BtnMode>
                </OneEventInfo>
                <div>
                  <SubTitle2>Description</SubTitle2>
                  <OneProgramParagraph>
                    &nbsp;&nbsp;{prop.description}
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
                <span>{prop.date}</span>
              </OneEventItem>
              <OneEventItem>
                <EventLocationIcon />
                <span>(Online / Offline) {prop.location}</span>
              </OneEventItem>
              <OneEventItem>
                <EventProgramIcon />
                <span>From {prop.program}</span>
              </OneEventItem>
              <BtnMode data-mode="desktop">
                <GreenBgBtn>Book the Event &#8250;</GreenBgBtn>
              </BtnMode>
            </OneEventInfo>
          </OneProgramSection>
        );
      })
     }
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
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      height: 300px; 
      padding: 1.5em 2em;
      margin-top: 7rem;
      border-radius: 10px;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
  }
`;
const OneEventItem = styled.div`
  font-size: 0.9em;
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
