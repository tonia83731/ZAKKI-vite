import { styled } from "styled-components";

import { ReactComponent as EventTimeIcon } from "../assets/Img/event/event_time.svg";
import { ReactComponent as EventLocationIcon } from "../assets/Img/event/event_location.svg";
import { ReactComponent as EventBell } from "../assets/Img/event/event_bell.svg";

export const EventLocationSVG = styled(EventLocationIcon)`
  width: 0.8rem;
  height: auto;
  path {
    fill: rgb(10, 62, 25, 0.8);
  }
`;

export const EventTimeSVG = styled(EventTimeIcon)`
  width: 0.8rem;
  height: auto;
  path {
    fill: rgb(10, 62, 25, 0.8);
  }
`;