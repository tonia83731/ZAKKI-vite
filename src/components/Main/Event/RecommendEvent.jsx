import { ReactComponent as EventTimeIcon } from "../../../assets/Img/event/event_time.svg";
import { ReactComponent as EventLocationIcon } from "../../../assets/Img/event/event_location.svg";

import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { colorList } from "../../../styles/ColorSettings";
import { SubTitle2 } from "../../../styles/Title";
import { EventTimeSVG, EventLocationSVG } from "../../../styles/EventSVG";

// const eventData = [
//   {
//     id: 1,
//     title: "Fresh Fashion",
//     time: "05/06/2023 10:23:31 PM",
//     location: "Dki Jakarta, Indonesia",
//     url: "https://picsum.photos/300?text=1",
//   },
//   {
//     id: 2,
//     title: "Trendy Threads",
//     time: "04/05/2024 03:36:55 AM",
//     location: "Dki Jakarta, Indonesia",
//     url: "https://picsum.photos/300?text=2",
//   },
//   {
//     id: 3,
//     title: "Glam Gals",
//     time: "03/18/2023 05:24:41 AM",
//     location: "Jawa Tengah, Indonesia",
//     url: "https://picsum.photos/300?text=3",
//   },
//   {
//     id: 4,
//     title: "Active Aging",
//     time: "12/09/2023 09:32:29 AM",
//     location: "Jawa Barat, Indonesia",
//     url: "https://picsum.photos/300?text=4",
//   },
//   {
//     id: 5,
//     title: "Elderly Empowerment",
//     time: "11/06/2023 10:10:10 AM",
//     location: "Jawa Barat, Indonesia",
//     url: "https://picsum.photos/300?text=5",
//   },
//   {
//     id: 6,
//     title: "wise Wellness",
//     time: "06/08/2023 01:44:01 PM",
//     location: "Dki Jakarta, Indonesia",
//     url: "https://picsum.photos/300?text=6",
//   },
//   {
//     id: 7,
//     title: "Sliver Strength",
//     time: "08/30/2023 07:24:20 AM",
//     location: "Dki Jakarta, Indonesia",
//     url: "https://picsum.photos/300?text=7",
//   },
//   {
//     id: 8,
//     title: "Golder Generation",
//     time: "01/05/2023 09:46:19 AM",
//     location: "Jawa Tengah, Indonesia",
//     url: "https://picsum.photos/300?text=8",
//   },
// ];




export default function RecommendEvent({props}) {
  return (
    <EventCardGroup>
      {props.map((item) => {
        return (
          <Link to={`/ZAKKI-vite/events/${item.id}`}>
            <EventCard background={item.img} key={item.id}>
              <EventCardBody>
                <SubTitle2 className="title">{item.title}</SubTitle2>
                <EventCardParagraph>
                  <FlexCenter>
                    <EventLocationSVG />
                    <CardItemParagraph>
                      Location: {item.location}
                    </CardItemParagraph>
                  </FlexCenter>
                  <FlexCenter>
                    <EventTimeSVG />
                    <CardItemParagraph>Date: {item.date}</CardItemParagraph>
                  </FlexCenter>
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
  min-height: 135px;
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

export const CardItemParagraph = styled.span`
  margin-left: 0.8em;
`;
