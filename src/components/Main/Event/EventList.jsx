import { Link } from "react-router-dom";

import { styled } from "styled-components";
import { colorList } from "../../../styles/ColorSettings";
import { SubTitle2 } from "../../../styles/Title";
import { FlexCenter, EventCardParagraph, CardItemParagraph } from "./RecommendEvent";
import { EventTimeSVG, EventLocationSVG } from "../../../styles/EventSVG";

import { dummyEventData } from '../../../Data/EventData';




export default function EventList(){
  return (
    <Link to="">
      <EventListUL>
        {dummyEventData.map((event) => {
          return (
            <EventItem>
              <SubTitle2 margin="0 0 0.8em">{event.title}</SubTitle2>
              <EventCardParagraph>
                <FlexCenter>
                  <EventLocationSVG />
                  <CardItemParagraph>
                    Location: {event.location}
                  </CardItemParagraph>
                </FlexCenter>
                <FlexCenter>
                  <EventTimeSVG />
                  <CardItemParagraph>Date: {event.date}</CardItemParagraph>
                </FlexCenter>
              </EventCardParagraph>
            </EventItem>
          );
        })}
      </EventListUL>
    </Link>
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