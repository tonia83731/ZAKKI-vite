
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
import { dummyEventData } from "../Data/EventData";

import { useState } from "react";

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
  const [eventSearchValue, setEventSearchValue] = useState("");
  const [eventData, setEventData] = useState(dummyEventData)
  const handleEventSearchChange = (e) => {
    setEventSearchValue(e.target.value)
  }
  const handleEventSearchClick = () => {
    if(eventSearchValue.length === 0) return
    const filterEvent = dummyEventData.filter((prop) =>
      prop.title.toLowerCase().trim().includes(eventSearchValue)
    );
    setEventData(filterEvent)
    setEventSearchValue("")
  }
  const handleEventSearchKeyDown = () => {
    if (eventSearchValue.length === 0) return;
    const filterEvent = dummyEventData.filter((prop) =>
      prop.title.toLowerCase().trim().includes(eventSearchValue)
    );
    setEventData(filterEvent);
    setEventSearchValue("");
  }
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
            <div>
              <SubTitle margin="0 0 1em">Recommended Event</SubTitle>
              <RecommendEvent />
            </div>
            <BreakPadding />
            <Search searchValue={eventSearchValue} onSearchChange={handleEventSearchChange} onSearchClick={handleEventSearchClick} onSearchKeyDown={handleEventSearchKeyDown}/>
            <div>
              <SubTitle margin="0 0 1em">Event List</SubTitle>
              <EventList props={eventData}/>
            </div>
            <Pagination data={pageData} />
          </PageContainer>
        </section>
        <Subscribe />
      </MainContainer>
    </main>
  );
}