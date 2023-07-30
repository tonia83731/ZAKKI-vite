import { ShortResponse } from "../../../../RepeatComponent/ShortResponse";

import { CheckboxResponse } from "../../../../RepeatComponent/CheckboxResponse";

import { styled } from "styled-components";
import { breakpoints } from "../../../../../styles/Breakpoints";
import { SubTitle2 } from "../../../../../styles/Title";


import useFormContext from "../../../../../hooks/useFormContext";


export default function StepOne() {
  const { formData, handleFormChange } = useFormContext();
  // console.log(formData)
  return (
    <form>
      <StepSubTitle>
        Interested to be Part of Us? <br />
        Please fill in the following form.
      </StepSubTitle>
      <StepSection>
        <NameSection>
          <ShortResponse
            title="First Name"
            name="basicFirstName"
            placeholder="Beatrix C."
            isRequired="true"
            inputValue={formData.basicFirstName}
            onChange={handleFormChange}
          />
          <ShortResponse
            title="Last Name"
            name="basicLastName"
            placeholder="Beatrix C."
            isRequired="true"
            inputValue={formData.basicLastName}
            onChange={handleFormChange}
          />
        </NameSection>
        <ShortResponse
          title="Age"
          name="basicAge"
          type="number"
          placeholder="20"
          inputValue={formData.basicAge}
          onChange={handleFormChange}
        />
        <ShortResponse
          title="Phone Number"
          name="basicPhoneNum"
          type="tel"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          placeholder="+62 08525678889"
          isRequired="true"
          inputValue={formData.basicPhoneNum}
          onChange={handleFormChange}
        />
        <ShortResponse
          title="Email"
          name="basicEmail"
          type="email"
          placeholder="ecendana@gmail.com"
          isRequired="true"
          inputValue={formData.basicEmail}
          onChange={handleFormChange}
        />
        <CheckboxResponse
          id="get-news"
          title="Get update news from ZAKKI every 2 months"
          name="basicGetNews"
          isChecked={formData.basicGetNews}
          onChange={handleFormChange}
          isRequired="false"
        />
        <CheckboxResponse
          id="policy"
          title="I agree to follow ZAKKI’s"
          name="basicPolicy"
          link="privacy policy"
          isChecked={formData.basicPolicy}
          onChange={handleFormChange}
          isRequired="true"
        />
      </StepSection>
    </form>
  );
}

export const StepSubTitle = styled(SubTitle2)`
  text-align: center;
  padding: 3em 0 1em;
`;

export const StepSection = styled.section`
  @media screen and (min-width: ${breakpoints.desktop}) {
    height: 500px;
  }
`;

const NameSection = styled.div`
  @media screen and (min-width: ${breakpoints.tablet}) {
    display: grid;
    grid-gap: 1em;
    grid-template-columns: repeat(2, 1fr);
  }
`;

// export default function StepOne({jobValue}){
//   return (
//     <form>
//       <StepSubTitle>
//         Interested to be Part of Us? <br />
//         Please fill in the following form.
//       </StepSubTitle>
//       <StepSection>
//         <ShortResponse
//           name="Full Name"
//           type="text"
//           placeholder="Beatrix C."
//           isRequired="true"
//         />
//         <ShortResponse name="Age" type="number" placeholder="20" />
//         <ShortResponse
//           name="Phone Number"
//           type="text"
//           placeholder="+62 08525678889"
//           isRequired="true"
//         />
//         <ShortResponse
//           name="Email"
//           type="email"
//           placeholder="ecendana@gmail.com"
//           isRequired="true"
//         />
//         <RadioResponse
//           className="location-radio"
//           name="Online / Offline"
//           data={locationData}
//           isRequired="true"
//         />
//         <RadioResponse
//           className="time-radio"
//           name="Available Time Hour"
//           data={timeData}
//           isRequired="true"
//         />
//         <ResponseGroup>
//           <FormLabel>
//             Job Title <span>*</span>
//           </FormLabel>
//           <JobInput>
//             <p>{jobValue}</p>
//           </JobInput>
//         </ResponseGroup>
//         <ShortResponse
//           name="Time Zone"
//           type="text"
//           placeholder="PST"
//           isRequired="true"
//         />
//         <CheckboxResponse className="checkbox-group" data={policyData} />
//       </StepSection>
//     </form>
//   );
// }
