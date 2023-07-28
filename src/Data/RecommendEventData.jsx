import { dummyEventData } from "./EventData";
import { compareDatesNewToOld } from "../components/Main/Event/EventTimeCompare";


const dumEvent = dummyEventData
const dummySortData = dumEvent.sort(compareDatesNewToOld);
export const dummyRecommendData = dummySortData.slice(0, 8)