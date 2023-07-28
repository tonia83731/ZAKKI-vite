import { ShortResponse } from "../../../../RepeatComponent/ShortResponse"
import { RadioResponse } from "../../../../RepeatComponent/RadioResponse"
import { CheckboxResponse } from "../../../../RepeatComponent/CheckboxResponse"

import { styled } from "styled-components"
import { breakpoints } from "../../../../../styles/Breakpoints"
import { colorList } from "../../../../../styles/ColorSettings"
import { SubTitle2 } from "../../../../../styles/Title"
import { ResponseGroup,FormLabel } from "../../../../RepeatComponent/ShortResponse"


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



export default function StepOne({formData, setFormData, isGetNewsChecked, isPolicyChecked, onGetNewsChange, onPolicyChange}){
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
          inputValue={formData.name}
          onChange={(event) => {
            setFormData({ ...formData, name: event.target.value });
          }}
        />
        <ShortResponse
          name="Age"
          type="number"
          placeholder="20"
          inputValue={formData.age}
          onChange={(event) =>
            setFormData({ ...formData, age: event.target.value })
          }
        />
        <ShortResponse
          name="Phone Number"
          type="tel"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          placeholder="+62 08525678889"
          isRequired="true"
          inputValue={formData.phone}
          onChange={(event) =>
            setFormData({ ...formData, phone: event.target.value })
          }
        />
        <ShortResponse
          name="Email"
          type="email"
          placeholder="ecendana@gmail.com"
          isRequired="true"
          inputValue={formData.email}
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
        />
        <CheckboxResponse
          id="get-news"
          name="Get update news from ZAKKI every 2 months"
          isChecked={formData.getNews}
          onChange={onGetNewsChange}
        />
        <CheckboxResponse
          id="policy"
          name="I agree to follow ZAKKI’s"
          link="privacy policy"
          isChecked={formData.policy}
          onChange={onPolicyChange}
        />
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
    height: 500px;
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

