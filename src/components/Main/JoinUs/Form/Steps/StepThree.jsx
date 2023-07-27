import { styled } from "styled-components"
import { breakpoints } from "../../../../../styles/Breakpoints"
import { colorList } from "../../../../../styles/ColorSettings"
import { StepSubTitle, StepSection } from "./StepOne"
import { PreviewList } from "./PreviewList";

const infoPreviewData = [
  {
    id: 1,
    title: "Full Name",
    value: "Beatrix C."
  },
  {
    id: 2,
    title: "Age",
    value: "20"
  },
  {
    id: 3,
    title: "Phone Number",
    value: "+62 08525678889"
  },
  {
    id: 4,
    title: "Email",
    value: "ecendana@gmail.com"
  },
  {
    id: 5,
    title: "Online / Offline",
    value: "Offine"
  },
  {
    id: 6,
    title: "Available Time Hour",
    value: "Anytime"
  },
  {
    id: 7,
    title: "Job Title",
    value: "UX Designer"
  },
  {
    id: 8,
    title: "Time Zone",
    value: "PST"
  }

]


const docPreviewData = [
  {
    id: 1,
    title: "Resume / CV",
    value: "resume.pdf"
  },
  {
    id: 2,
    title: "Other Documents",
    value: "portfolio.pdf"
  },
  {
    id: 3,
    title: "Questions / Comments",
    value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et ligula ac magna maximus imperdiet. Interdum et malesuada fames ac."
  },
]

export default function StepThree(){
  return (
    <form>
      <StepSubTitle>
        Review your info to make sure everything is right.
      </StepSubTitle>
      <StepSection>
        <div>
          <PreviewList className="info-preview" data={infoPreviewData} />
        </div>
        <BreakHr/>
        <div>
          <PreviewList className="doc-preview" data={docPreviewData} />
        </div>
      </StepSection>
    </form>
  );
}

const BreakHr = styled.hr`
  border-top: 1px dotted ${colorList.primary};
  margin: 0.25em 0 0.5em;
`;
