import { FileResponse } from "../../../../RepeatComponent/FileResponse";
import { styled } from "styled-components";
import { colorList } from "../../../../../styles/ColorSettings";
import { StepSubTitle, StepSection } from "./StepOne";
import {
  ResponseGroup,
  FormLabel,
} from "../../../../RepeatComponent/ShortResponse";

import useFormContext from "../../../../../hooks/useFormContext";

export default function StepThree() {
  const { formData, handleFormChange } = useFormContext();
  return (
    <form>
      <StepSubTitle>
        Interested to be Part of Us? <br />
        Please fill in the following form.
      </StepSubTitle>
      <StepSection>
        <FileResponse
          forId="resume"
          title={
            formData.resume === ""
              ? "Click to choose a file"
              : formData.resume.name
          }
          title1="Resume / CV"
          isRequired="true"
          onChange={handleFormChange}
        />
        <FileResponse
          forId="otherDoc"
          title={
            formData.otherDoc === ""
              ? "Click to choose a file"
              : formData.otherDoc.name
          }
          title1="Other Documents"
          title2="(Portfolio, Recommendation letter, etc.)"
          isRequired="false"
          onChange={handleFormChange}
        />
        <ResponseGroup>
          <FormLabel>Questions / Comments</FormLabel>
          <TextAreaInput
            id="comment"
            name="comment"
            rows="4"
            placeholder="Write your questions or comments here..."
            value={formData.comment}
            onChange={handleFormChange}
          />
        </ResponseGroup>
      </StepSection>
    </form>
  );
}

const TextAreaInput = styled.textarea`
  width: 100%;
  height: 100px;
  border: 1px solid ${colorList.neutral_60};
  border-radius: 5px;
  padding: 10px;
  font-size: 0.75em;
  font-weight: 600;
  resize: none;
  color: ${colorList.black_80};
  &:focus {
    border: 2px solid ${colorList.green_focus};
  }
  &::placeholder {
    color: ${colorList.neutral_60};
    font-weight: 400;
  }
`;

// import { styled } from "styled-components"
// import { colorList } from "../../../../../styles/ColorSettings"
// import { StepSubTitle, StepSection } from "./StepOne"
// import { PreviewList } from "./PreviewList";

// const infoPreviewData = [
//   {
//     id: 1,
//     title: "Full Name",
//     value: "Beatrix C."
//   },
//   {
//     id: 2,
//     title: "Age",
//     value: "20"
//   },
//   {
//     id: 3,
//     title: "Phone Number",
//     value: "+62 08525678889"
//   },
//   {
//     id: 4,
//     title: "Email",
//     value: "ecendana@gmail.com"
//   },
//   {
//     id: 5,
//     title: "Online / Offline",
//     value: "Offine"
//   },
//   {
//     id: 6,
//     title: "Available Time Hour",
//     value: "Anytime"
//   },
//   {
//     id: 7,
//     title: "Job Title",
//     value: "UX Designer"
//   },
//   {
//     id: 8,
//     title: "Time Zone",
//     value: "PST"
//   }

// ]

// const docPreviewData = [
//   {
//     id: 1,
//     title: "Resume / CV",
//     value: "resume.pdf"
//   },
//   {
//     id: 2,
//     title: "Other Documents",
//     value: "portfolio.pdf"
//   },
//   {
//     id: 3,
//     title: "Questions / Comments",
//     value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et ligula ac magna maximus imperdiet. Interdum et malesuada fames ac."
//   },
// ]

// export default function StepThree(){
//   return (
//     <form>
//       <StepSubTitle>
//         Review your info to make sure everything is right.
//       </StepSubTitle>
//       <StepSection>
//         <div>
//           <PreviewList className="info-preview" data={infoPreviewData} />
//         </div>
//         <BreakHr/>
//         <div>
//           <PreviewList className="doc-preview" data={docPreviewData} />
//         </div>
//       </StepSection>
//     </form>
//   );
// }

// const BreakHr = styled.hr`
//   border-top: 1px dotted ${colorList.primary};
//   margin: 0.25em 0 0.5em;
// `;
