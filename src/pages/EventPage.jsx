
import { breakpoints } from "../styles/Breakpoints";
import { BreakPadding } from "../styles/BreakPadding";
import { PageTitle } from "../components/RepeatComponent/PageTitle";
import { SubTitle } from "../styles/Title";
import { MainContainer, PageContainer } from "../styles/Container";
import { Pagination } from "../components/RepeatComponent/Pagination";
import Search from "../components/Main/Program/Search";
import Subscribe from "../components/Main/Subscribe";

import RecommendEvent from "../components/Main/Event/RecommendEvent";
import EventList from "../components/Main/Event/EventList";

const pageData = [
  {
    id: 1,
    isActive: true,
  },
  {
    id: 2,
    isActive: false,
  },
  {
    id: 3,
    isActive: false,
  },
  {
    id: 4,
    isActive: false,
  },
  {
    id: 5,
    isActive: false,
  },
];

export default function EventPage() {
  return (
    <main className="site-main">
      <MainContainer>
        <section id="event">
          <PageContainer>
            <PageTitle
              title="Our Event"
              subtitle="Other ways to support those who need.
    Attend our event to know how our program process"
            />
            <Search />
            <div>
              <SubTitle margin="0 0 1em">Recommended Event</SubTitle>
              <RecommendEvent />
            </div>
            <BreakPadding />
            <div>
              <SubTitle margin="0 0 1em">Event List</SubTitle>
              <EventList />
            </div>
            <Pagination data={pageData} />
          </PageContainer>
        </section>
        <Subscribe />
      </MainContainer>
    </main>
  );
}