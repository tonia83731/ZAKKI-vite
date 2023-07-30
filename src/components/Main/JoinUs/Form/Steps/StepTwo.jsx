import { ShortResponse } from "../../../../RepeatComponent/ShortResponse";
import { RadioResponse } from "../../../../RepeatComponent/RadioResponse";

import { styled } from "styled-components";
import { breakpoints } from "../../../../../styles/Breakpoints";
import { colorList } from "../../../../../styles/ColorSettings";
import { StepSubTitle, StepSection } from "./StepOne";

import {
  ResponseGroup,
  FormLabel,
} from "../../../../RepeatComponent/ShortResponse";

import useFormContext from "../../../../../hooks/useFormContext";

const locationData = [
  {
    id: "offline",
    name: "Offline",
    isRequired: true,
  },
  {
    id: "online",
    name: "Online",
    isRequired: false,
  },
];

const timeData = [
  {
    id: "anytime",
    name: "Anytime",
  },
  {
    id: "5to8",
    name: "5-8 pm",
  },
  {
    id: "9to12",
    name: "9-12 am",
  },
  {
    id: "13to16",
    name: "1-4 pm",
  },
];

export default function StepTwo({ jobValue }) {
  const { formData, handleFormChange } = useFormContext();

  return (
    <form>
      <StepSubTitle>
        Interested to be Part of Us? <br />
        Please fill in the following form.
      </StepSubTitle>
      <StepSection>
        <ResponseGroup>
          <FormLabel>
            Job Title <span>*</span>
          </FormLabel>
          <JobInput>
            <p>{jobValue}</p>
          </JobInput>
        </ResponseGroup>
        <RadioResponse
          className="location-radio"
          title="Available Location"
          name="jobAvailableLocation"
          data={locationData}
          isRequired="true"
          inputValue={formData.jobAvailableLocation}
          onChange={handleFormChange}
        />
        <RadioResponse
          className="time-radio"
          title="Available Time"
          name="jobAvailableTime"
          data={timeData}
          isRequired="true"
          inputValue={formData.jobAvailableTime}
          onChange={handleFormChange}
        />
        <ShortResponse
          title="Time Zone"
          name="jobTimeZone"
          type="text"
          placeholder="PST"
          isRequired="true"
          inputValue={formData.jobTimeZone.toUpperCase()}
          onChange={handleFormChange}
        />
        <JobCaption>
          Look up your time zone{" "}
          <a href="https://www.ge.com/digital/documentation/meridium/V36160/Help/Master/Subsystems/AssetPortal/Content/Time_Zone_Mappings.htm">
            here
          </a>
          .
        </JobCaption>
      </StepSection>
    </form>
  );
}

const JobInput = styled.div`
  width: 100%;
  height: 2rem;
  line-height: 2em;
  border: 1px solid ${colorList.neutral_60};
  border-radius: 5px;
  padding: 0 10px;
  font-size: 0.75em;
  color: ${colorList.neutral_80};
  display: flex;
  align-items: center;
`;

const JobCaption = styled.p`
  font-size: 0.75em;
  color: ${colorList.neutral_80};
  margin-bottom: 0.5em;
  a {
    text-decoration: underline;
    color: ${colorList.neutral_80};
  }
`;
// export default function StepTwo(){
//   return (
//     <form>
//       <StepSubTitle>
//         Interested to be Part of Us? <br />
//         Please fill in the following form.
//       </StepSubTitle>
//       <StepSection>
//         <FileResponse />
//         <ResponseGroup>
//           <FormLabel>Questions / Comments</FormLabel>
//           <TextAreaInput
//             id="questions"
//             name="questions"
//             rows="4"
//             placeholder="Write your questions or comments here..."
//           />
//         </ResponseGroup>
//       </StepSection>
//     </form>
//   );
// }

// const TextAreaInput = styled.textarea`
//   width: 100%;
//   height: 100px;
//   border: 1px solid ${colorList.neutral_60};
//   border-radius: 5px;
//   padding: 10px;
//   font-size: 0.75em;
//   resize: none;
// `;
