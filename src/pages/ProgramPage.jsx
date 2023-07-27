import { PageTitle } from "../components/RepeatComponent/PageTitle";
import Search from "../components/Main/Program/Search";
import ProgramCard from "../components/Main/Program/ProgramCard";
import Subscribe from "../components/Main/Subscribe";

import styled from "styled-components";
import { breakpoints } from "../styles/Breakpoints";
import { MainContainer, PageContainer } from "../styles/Container";

import { dummyProgramData } from "../Data/ProgramData";

import { useState } from "react";

export default function ProgramPage() {
  const [searchValue, setSearchValue] = useState("")
  const [programData, setProgramData] = useState(dummyProgramData)
  
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value)
  }
  const handleSearchClick = () => {
    if(searchValue.length === 0) return
    const filterProgram = dummyProgramData.filter((prop) => prop.title.toLowerCase().trim().includes(searchValue))
    setProgramData(filterProgram)
    setSearchValue("")
  }
  const handleSearchKeyDown = () => {
    if (searchValue.length === 0) return;
    const filterProgram = dummyProgramData.filter((prop) =>
      prop.title.toLowerCase().trim().includes(searchValue)
    );
    setProgramData(filterProgram);
    setSearchValue("");
  }

  return (
    <main>
      <MainContainer>
        <section id="program">
          <PageContainer>
            <PageTitle
              title="Our Program"
              subtitle="Our program consists of healthcare check-up, elderly training/workshops, tai chi, and many more. Let’s explore below."
            />
            <Search
              searchValue={searchValue}
              onSearchChange={handleSearchChange}
              onSearchClick={handleSearchClick}
              onSearchKeyDown={handleSearchKeyDown}
            />
            <ProgramCardGroup>
              <ProgramCard props={programData} />
            </ProgramCardGroup>
          </PageContainer>
        </section>
        <Subscribe />
      </MainContainer>
    </main>
  );
}
const ProgramCardGroup = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 1em;
  @media screen and (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;


