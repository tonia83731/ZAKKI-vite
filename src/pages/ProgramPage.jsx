import { PageTitle } from "../components/RepeatComponent/PageTitle";
import Search from "../components/Main/Program/Search";
import ProgramCard from "../components/Main/Program/ProgramCard";
import Subscribe from "../components/Main/Subscribe";

import styled from "styled-components";
import { breakpoints } from "../styles/Breakpoints";
import { MainContainer, PageContainer } from "../styles/Container";

export default function ProgramPage() {
  return (
    <main>
      <MainContainer>
        <section id="program">
          <PageContainer>
            <PageTitle
              title="Our Program"
              subtitle="Our program consists of healthcare check-up, elderly training/workshops, tai chi, and many more. Let’s explore below."
            />
            <Search />
            <ProgramCardGroup>
              <ProgramCard />
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


