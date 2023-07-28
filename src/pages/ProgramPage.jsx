import { PageTitle } from "../components/RepeatComponent/PageTitle";
import Search from "../components/Main/Program/Search";
import ProgramCard from "../components/Main/Program/ProgramCard";
import { Pagination } from "../components/RepeatComponent/Pagination";
import Subscribe from "../components/Main/Subscribe";

import styled from "styled-components";
import { breakpoints } from "../styles/Breakpoints";
import { MainContainer, PageContainer } from "../styles/Container";

import { extractTimeFromDate } from "../utilities/sortDate";

import { dummyProgramData } from "../Data/ProgramData";

import { useState } from "react";

export default function ProgramPage() {
  const [searchValue, setSearchValue] = useState("")
  const [programData, setProgramData] = useState(dummyProgramData)

  const [currentPage, setCurrentPage] = useState(1);
  // items / per page
  const recordsPerPage = 8;
  // last item index of the page ex: page=1 last item index+1 = 8
  const lastIndex = currentPage * recordsPerPage;
  // first item index of the page ex: page=1 first item index = 0
  const firstIndex = lastIndex - recordsPerPage;
  // divide data into each page
  const record = programData.slice(firstIndex, lastIndex);
  // how many page after divide item 43/8 => 4
  const nPage = Math.ceil(programData.length / recordsPerPage);
  // turn nPage into array
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  const handlePrevClick = () => {
    if (currentPage !== 1) {
      return setCurrentPage(currentPage - 1);
    }
  };
  const handleNextClick = () => {
    if (currentPage !== nPage) {
      return setCurrentPage(currentPage + 1);
    }
  };
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };
  
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value)
  }
  const handleSearchClick = () => {
    if(searchValue.length === 0) return
    const filterProgram = dummyProgramData.filter((prop) => prop.title.toLowerCase().trim().includes(searchValue.toLowerCase().trim()))
    setProgramData(filterProgram)
    setSearchValue("")
  }
  const handleSearchKeyDown = () => {
    if (searchValue.length === 0) return;
    const filterProgram = dummyProgramData.filter((prop) =>
      prop.title.toLowerCase().trim().includes(searchValue.toLowerCase().trim())
    );
    setProgramData(filterProgram);
    setSearchValue("");
  }
  const handleProgramFilterChange = (e) => {
    const value = e.target.value
    const programTimeArr = dummyProgramData.map(obj => extractTimeFromDate(obj.update_time))
    const indices = dummyProgramData.map((_, index) => index);
    
    if(value === "New"){
      const compareDatesNewToOld = (indexA, indexB) => {
        const timeA = programTimeArr[indexA];
        const timeB = programTimeArr[indexB];
        return timeB - timeA;
      };
      indices.sort(compareDatesNewToOld)
      const sortData = []

      for(const index of indices){
        sortData.push(dummyProgramData[index])
      }
      console.log(sortData);
      setProgramData(sortData)
    } else if (value === "Old"){
      const compareDatesNewToOld = (indexA, indexB) => {
        const timeA = programTimeArr[indexA];
        const timeB = programTimeArr[indexB];
        return timeA - timeB;
      };
      indices.sort(compareDatesNewToOld);
      const sortData = [];

      for (const index of indices) {
        sortData.push(dummyProgramData[index]);
      }
      console.log(sortData)
      setProgramData(sortData);
    }
    
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
              onFilterChange={handleProgramFilterChange}
            />
            <ProgramCardGroup>
              <ProgramCard props={record} />
            </ProgramCardGroup>
          </PageContainer>
          <Pagination
            data={numbers}
            currentPage={currentPage}
            onPrevClick={handlePrevClick}
            onNextClick={handleNextClick}
            onPageClick={handlePageClick}
          />
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


