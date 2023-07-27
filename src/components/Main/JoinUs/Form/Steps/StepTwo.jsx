import { FileResponse } from "../../../../RepeatComponent/FileResponse"
import { styled } from "styled-components";
import { colorList } from "../../../../../styles/ColorSettings";
import { StepSubTitle, StepSection } from "./StepOne";
import { ResponseGroup, FormLabel } from "../../../../RepeatComponent/ShortResponse";

export default function StepTwo(){
  return (
    <form>
      <StepSubTitle>
        Interested to be Part of Us? <br />
        Please fill in the following form.
      </StepSubTitle>
      <StepSection>
        <FileResponse />
        <ResponseGroup>
          <FormLabel>Questions / Comments</FormLabel>
          <TextAreaInput
            id="questions"
            name="questions"
            rows="4"
            placeholder="Write your questions or comments here..."
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
  resize: none;
`;