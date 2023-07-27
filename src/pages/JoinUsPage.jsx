import ApplyProgress from "../components/Main/JoinUs/Form/ApplyProgress";
import ApplyProgressControl from "../components/Main/JoinUs/Form/ApplyProgressControl";
import Steps from "../components/Main/JoinUs/Form/Steps/Steps";
import JobOptions from "../components/Main/JoinUs/Form/JobOptions";

import { styled } from "styled-components";
import { breakpoints } from "../styles/Breakpoints";
import { MainContainer, PageContainer } from "../styles/Container";

import { useState } from "react";

const steps = [
  {
    label: "BasicInfo.",
    step: 1,
  },
  {
    label: "Document",
    step: 2,
  },
  {
    label: "Summary",
    step: 3,
  },
];

export default function JoinUsPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };
  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1);
  };
  const totalPage = steps.length;
  const width = `${(100 / (totalPage - 1)) * (currentPage - 1)}%`;

  return (
    <main className="site-main">
      <MainContainer>
        <section id="join-us">
          <JoinUsContainer>
            <JobOptions />
            <FormContainer>
              <ApplyProgress
                props={steps}
                width={width}
                activeStep={currentPage}
              />
              <Steps activeStep={currentPage} />
              <ApplyProgressControl
                onPreClick={handlePrevClick}
                onNextClick={handleNextClick}
                activeStep={currentPage}
              />
            </FormContainer>
          </JoinUsContainer>
        </section>
      </MainContainer>
    </main>
  );
}

const JoinUsContainer = styled.div`
  @media screen and (min-width: ${breakpoints.desktop}) {
    padding: 2em 2em 2.5em;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 1em;
  }
`;

const FormContainer = styled(PageContainer)`
  @media screen and (min-width: ${breakpoints.tablet}) {
    max-width: 800px;
    margin: 0 auto;
  }
  @media screen and (min-width: ${breakpoints.desktop}) {
    max-width: 1200px;
  }
`;
