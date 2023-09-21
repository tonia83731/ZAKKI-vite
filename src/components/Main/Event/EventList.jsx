import { Link } from "react-router-dom";

import { styled } from "styled-components";
import { colorList } from "../../../styles/ColorSettings";
import { SubTitle2 } from "../../../styles/Title";
import { FlexCenter, EventCardParagraph, CardItemParagraph, EventInfoAdjust, SpaceDiv } from "./RecommendEvent";
import { EventTimeSVG, EventLocationSVG } from "../../../styles/EventSVG";

import { dummyEventData } from '../../../Data/EventData';




export default function EventList({props}){
  return (
      <EventListUL>
        {props.map((event) => {
          return (
            <EventItem>
              <Link to={`/ZAKKI-vite/events/${event.id}`}>
                <SubTitle2 margin="0 0 0.8em">{event.title}</SubTitle2>
                <EventCardParagraph>
                  <EventInfoAdjust>
                    <EventLocationSVG />
                    <CardItemParagraph>
                      Location: {event.location}
                    </CardItemParagraph>
                  </EventInfoAdjust>
                  <SpaceDiv></SpaceDiv>
                  <EventInfoAdjust>
                    <EventTimeSVG />
                    <CardItemParagraph>Date: {event.date}</CardItemParagraph>
                  </EventInfoAdjust>
                </EventCardParagraph>
              </Link>
            </EventItem>
          );
        })}
      </EventListUL>
  );
}


const EventListUL = styled.ul`
  margin: 0 24px 8px;
`
const EventItem = styled.li`
  padding: 10px;
  &:hover {
    border: none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  &:not(:last-child) {
    border-bottom: 1px dotted ${colorList.green_border};
  }
`;