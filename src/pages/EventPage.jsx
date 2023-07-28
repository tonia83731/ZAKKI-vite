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
import { dummyRecommendData } from "../Data/RecommendEventData";
import {
  compareDatesNewToOld,
  compareDatesOldToNew,
} from "../components/Main/Event/EventTimeCompare";

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
  const [eventData, setEventData] = useState(dummyEventData);

  const [currentPage, setCurrentPage] = useState(1);
  // items / per page
  const recordsPerPage = 6;
  // last item index of the page ex: page=1 last item index+1 = 6
  const lastIndex = currentPage * recordsPerPage;
  // first item index of the page ex: page=1 first item index = 0
  const firstIndex = lastIndex - recordsPerPage;
  // divide data into each page
  const record = eventData.slice(firstIndex, lastIndex);
  // how many page after divide item 43/6 => 8
  const nPage = Math.ceil(eventData.length / recordsPerPage);
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

  const handleEventSearchChange = (e) => {
    setEventSearchValue(e.target.value);
  };
  const handleEventSearchClick = () => {
    if (eventSearchValue.length === 0) return;
    const filterEvent = dummyEventData.filter((prop) =>
      prop.title
        .toLowerCase()
        .trim()
        .includes(eventSearchValue.toLowerCase().trim())
    );
    setEventData(filterEvent);
    setEventSearchValue("");
  };
  const handleEventSearchKeyDown = () => {
    if (eventSearchValue.length === 0) return;
    const filterEvent = dummyEventData.filter((prop) =>
      prop.title
        .toLowerCase()
        .trim()
        .includes(eventSearchValue.toLowerCase().trim())
    );
    setEventData(filterEvent);
    setEventSearchValue("");
  };
  const handleEventFilterChange = (e) => {
    const value = e.target.value;
    if (value === "Old") {
      const oldToNew = dummyEventData.sort(compareDatesOldToNew);
      const sortData = [...oldToNew];
      // console.log(sortData);
      setEventData(sortData);
    } else if (value === "New") {
      const newToOld = dummyEventData.sort(compareDatesNewToOld);
      const sortData = [...newToOld];
      // console.log(sortData);
      setEventData(newToOld);
    }
  };
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
              <RecommendEvent props={dummyRecommendData} />
            </div>
            <BreakPadding />
            <Search
              defaultValue="New"
              onFilterChange={handleEventFilterChange}
              searchValue={eventSearchValue}
              onSearchChange={handleEventSearchChange}
              onSearchClick={handleEventSearchClick}
              onSearchKeyDown={handleEventSearchKeyDown}
            />
            <div>
              <SubTitle margin="0 0 1em">Event List</SubTitle>
              <EventList props={record} />
            </div>
            <Pagination
              data={numbers}
              currentPage={currentPage}
              onPrevClick={handlePrevClick}
              onNextClick={handleNextClick}
              onPageClick={handlePageClick}
            />
          </PageContainer>
        </section>
        <Subscribe />
      </MainContainer>
    </main>
  );
}
