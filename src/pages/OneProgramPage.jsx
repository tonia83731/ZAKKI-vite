import { styled } from "styled-components";
import { breakpoints } from "../styles/Breakpoints";
import { colorList } from "../styles/ColorSettings";
import { PageContainer } from "../styles/Container";
import { SubTitle } from "../styles/Title";

import { Link, useParams } from "react-router-dom";
import { dummyProgramData } from "../Data/ProgramData";
import { dummyEventData } from "../Data/EventData";
import { Guide } from "../components/Main/OneProgram/Guide";
import DonateCard from "../components/Main/OneProgram/DonateCard";
import ProgramEventCard from "../components/Main/OneProgram/ProgramEventCard";
import DonateModal from "../components/Main/OneProgram/DonateModal";

import { getDataInObject } from "../utilities/dataInData";

import { useState } from "react";

export default function OneProgramPage() {
  const [donateToggle, setDonateToggle] = useState(false);
  const [donateModalContent, setDonateModalContent] = useState([]);

  const [nameValue, setNameValue] = useState("")
  const [emailValue, setEmailValue] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const object = useParams();
  const id = object.id;
  const numId = Number(id);
  const oneProgramData = dummyProgramData.filter((data) => data.id === numId);
  const eventInProgram = getDataInObject(oneProgramData, dummyEventData)
  const allEvent = Object.values(eventInProgram)
  
  const handleDonateClick = (id) => {
    const modalData = dummyProgramData.filter((data) => data.id === id);
    setDonateToggle(true);
    setDonateModalContent(modalData);
  };
  const handleDonateSubmit = (e) => {
    e.preventDefault()
    if(nameValue !== "" && emailValue !== ""){
      setIsSubmitted(true)
    }
    setDonateToggle(false)
  };
  const handleNameChange = (e) => {
    setNameValue(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };

  if(isSubmitted){
    window.location.href = "https://www.paypal.com/tw/home";
  }



  return (
    <OneProgramContainer>
      {oneProgramData.map((prop) => {
        return (
          <OneProgramSection id="one-program">
            <div>
              <Guide
                first="Programs"
                firstLink="/ZAKKI-vite/programs"
                second={prop.title}
                secondLink={`/ZAKKI-vite/propgrams/${prop.id}`}
              />
              <div>
                <ProgramTitle>{prop.title}</ProgramTitle>
                <OneProgramImg src={prop.img} alt="" />
                <OneProgramParagraph>
                  &nbsp;&nbsp;{prop.description}
                </OneProgramParagraph>
              </div>
              <DonateCard
                mode="mobile"
                prop={prop}
                onDonateClick={handleDonateClick}
              />
              <UpcommingEventDiv>
                <ProgramEventCard props={allEvent} />
                <Link to="/ZAKKI-vite/events">
                  <MoreEventLink>More Events</MoreEventLink>
                </Link>
              </UpcommingEventDiv>
              <OneProgramBtnGroup>
                <Link to="/ZAKKI-vite/team">
                  <BorderBtn>Project Team Member &#8250;</BorderBtn>
                </Link>
                <Link to="/ZAKKI-vite/joinus">
                  <BorderBtn>Become Volunteer &#8250;</BorderBtn>
                </Link>
                <Link to="#">
                  <BorderBtn>View Past Event &#8250;</BorderBtn>
                </Link>
              </OneProgramBtnGroup>
            </div>
            <DonateCard
              mode="desktop"
              prop={prop}
              onDonateClick={handleDonateClick}
            />
          </OneProgramSection>
        );
      })}
      {donateToggle && (
        <DonateModal
          prop={donateModalContent}
          nameValue={nameValue}
          emailValue={emailValue}
          onModalClose={() => setDonateToggle(false)}
          onDonateSubmit={handleDonateSubmit}
          onNameChange={handleNameChange}
          onEmailChange={handleEmailChange}
        />
      )}
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
  color: ${colorList.black_80};
`;

const UpcommingEventDiv = styled.div`
  padding: 2em 0;
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

const ErrorCaption = styled.p`
  font-size: 0.75em;
  color: ${colorList.error};
`;