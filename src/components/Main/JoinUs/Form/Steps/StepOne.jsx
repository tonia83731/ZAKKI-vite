import { ShortResponse } from "../../../../RepeatComponent/ShortResponse"
import { RadioResponse } from "../../../../RepeatComponent/RadioResponse"
import { CheckboxResponse } from "../../../../RepeatComponent/CheckboxResponse"

import { styled } from "styled-components"
import { breakpoints } from "../../../../../styles/Breakpoints"
import { colorList } from "../../../../../styles/ColorSettings"
import { SubTitle2 } from "../../../../../styles/Title"
import { ResponseGroup,FormLabel } from "../../../../RepeatComponent/ShortResponse"

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
  }
]

const timeData = [
  {
    id: "anytime",
    name: "Anytime",
  },
  {
    id: "5to8",
    name: "5-8 pm"
  },
  {
    id: "9to12",
    name: "9-12 am"
  },
  {
    id: "13to16",
    name: "1-4 pm"
  }
]

const policyData = [
  {
    id: 1,
    name: "Get update news from ZAKKI every 2 months",
  },
  {
    id: 2,
    name: "I agree to follow ZAKKI’s",
    link: "privacy policy"
  },
]



export default function StepOne({jobValue}){
  return (
    <form>
      <StepSubTitle>
        Interested to be Part of Us? <br />
        Please fill in the following form.
      </StepSubTitle>
      <StepSection>
        <ShortResponse
          name="Full Name"
          type="text"
          placeholder="Beatrix C."
          isRequired="true"
        />
        <ShortResponse name="Age" type="number" placeholder="20" />
        <ShortResponse
          name="Phone Number"
          type="text"
          placeholder="+62 08525678889"
          isRequired="true"
        />
        <ShortResponse
          name="Email"
          type="email"
          placeholder="ecendana@gmail.com"
          isRequired="true"
        />
        <RadioResponse
          className="location-radio"
          name="Online / Offline"
          data={locationData}
          isRequired="true"
        />
        <RadioResponse
          className="time-radio"
          name="Available Time Hour"
          data={timeData}
          isRequired="true"
        />
        <ResponseGroup>
          <FormLabel>
            Job Title <span>*</span>
          </FormLabel>
          <JobInput>
            <p>{jobValue}</p>
          </JobInput>
        </ResponseGroup>
        <ShortResponse
          name="Time Zone"
          type="text"
          placeholder="PST"
          isRequired="true"
        />
        <CheckboxResponse className="checkbox-group" data={policyData} />
      </StepSection>
    </form>
  );
}

export const StepSubTitle = styled(SubTitle2)`
  text-align: center;
  padding: 3em 0 1em;
`

export const StepSection = styled.section`
  @media screen and (min-width: ${breakpoints.desktop}) {
    height: 655px;
  }
`;

const JobInput = styled.div`
  width: 100%;
  height: 2rem;
  line-height: 2em;
  border: 1px solid ${colorList.neutral_60};
  border-radius: 5px;
  padding: 0 10px;
  font-size: 0.75em;
  color: ${colorList.neutral_70};
  display:flex;
  align-items: center;
`;