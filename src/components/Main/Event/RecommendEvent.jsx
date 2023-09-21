import { ReactComponent as EventTimeIcon } from "../../../assets/Img/event/event_time.svg";
import { ReactComponent as EventLocationIcon } from "../../../assets/Img/event/event_location.svg";

import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { colorList } from "../../../styles/ColorSettings";
import { SubTitle2 } from "../../../styles/Title";
import { EventTimeSVG, EventLocationSVG } from "../../../styles/EventSVG";

export default function RecommendEvent({props}) {
  return (
    <EventCardGroup>
      {props.map((item) => {
        return (
          <Link to={`/ZAKKI-vite/events/${item.id}`}>
            <EventCard background={item.img} key={item.id}>
              <EventCardBody>
                <SubTitle2 className="title">{item.title}</SubTitle2>
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
            </EventCard>
          </Link>
        );
      })}
    </EventCardGroup>
  );
}




const EventCardGroup = styled.div`
  white-space: nowrap;
  width: 100%;
  overflow-x: scroll;
  @media screen and (min-width: 1140px) {
    all: unset;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1em;
  }
`;

export const EventCard = styled.div`
  display: inline-block;
  margin-right: 1em;
  width: 100%;
  height: 40vh;
  max-width: 400px;
  min-height: 200px;
  margin-bottom: 1em;
  border-radius: 10px;
  background: ${(props) => `url(${props.background}) no-repeat center`};
  background-size: cover;
  position: relative;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;

export const EventCardBody = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  min-height: 110px;
  background-color: ${colorList.white_80};
  padding: 0.5em 1em;
  &:hover {
    background-color: ${colorList.white};
  }
`;
export const EventCardParagraph = styled.div`
  font-size: 12px;
  min-height: 50px;
  color: ${colorList.green_focus_80};
`;

export const FlexCenter = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify};
  align-items: center;
`;

export const EventInfoAdjust = styled.div`
  display: grid;
  grid-template-columns:20px auto;
  align-items: start;
`;

export const CardItemParagraph = styled.span`
  margin-left: 0.8em;
  white-space: normal;
`;
export const SpaceDiv = styled.div`
  margin: 0.5em 0;
`
