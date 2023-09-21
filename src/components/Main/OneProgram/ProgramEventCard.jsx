import { styled } from "styled-components";
import { breakpoints } from "../../../styles/Breakpoints";
import { colorList } from "../../../styles/ColorSettings";
import { SubTitle2 } from "../../../styles/Title";
import { EventInfoAdjust, SpaceDiv } from "../Event/RecommendEvent";
import { EventCard, EventCardBody, EventCardParagraph } from "../Event/RecommendEvent";
import { CardItemParagraph } from "../Event/RecommendEvent";
import { EventLocationSVG, EventTimeSVG } from "../../../styles/EventSVG";

import { Link } from "react-router-dom";

const programEventData = [
  {
    id: 3,
    title: "Glam Gals",
    time: "03/18/2023 05:24:41 AM",
    location: "Jawa Tengah, Indonesia",
    url: "https://picsum.photos/300?text=3",
  },
  {
    id: 8,
    title: "Golder Generation",
    time: "01/05/2023 09:46:19 AM",
    location: "Jawa Tengah, Indonesia",
    url: "https://picsum.photos/300?text=8",
  },
];

export default function ProgramEventCard({props}) {
  return (
    <UpcommingEventList>
      {props.map((item) => {
        return (
          <UpcommingEventCard background={item.img} key={item.id}>
            <EventCardBody>
              <Link to={`/ZAKKI-vite/events/${item.id}`}>
                <SubTitle2>{item.title}</SubTitle2>
              </Link>
              <SpaceDiv></SpaceDiv>
              <EventCardParagraph>
                <EventInfoAdjust>
                  <EventLocationSVG />
                  <CardItemParagraph>
                    Location: {item.location}
                  </CardItemParagraph>
                </EventInfoAdjust>
                <SpaceDiv></SpaceDiv>
                <EventInfoAdjust>
                  <EventTimeSVG />
                  <CardItemParagraph>Date: {item.date}</CardItemParagraph>
                </EventInfoAdjust>
              </EventCardParagraph>
            </EventCardBody>
          </UpcommingEventCard>
        );
      })}
    </UpcommingEventList>
  );
}

const UpcommingEventList = styled.div`
  display: grid;
  grid-gap: 0.5em;
  grid-template-columns: 100%;
  grid-template-rows: repeat(auto-fit, minmax(150px, 1fr));
  width: 100%;
  @media screen and (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 100%;
  }
`;

const UpcommingEventCard = styled(EventCard)`
  max-width: unset;
`