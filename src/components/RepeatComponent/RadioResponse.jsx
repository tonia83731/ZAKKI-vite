import { styled } from "styled-components";
import { breakpoints } from "../../styles/Breakpoints";
import { ResponseGroup, FormLabel } from "./ShortResponse";

export function RadioResponse({ className, name, data, isRequired }) {
  const inputRadioItem = data.map((item, index) => {
    return (
      <RadioWrapper key={item.id}>
        <input
          id={item.id}
          type="radio"
          name={name}
          defaultChecked={index === 0}
        />
        <RadioLabel htmlFor={item.id}>{item.name}</RadioLabel>
      </RadioWrapper>
    );
  });
  return (
    <ResponseGroup>
      <FormLabel>
        {name} {isRequired === "true" ? <span>*</span> : ""}
      </FormLabel>
      <RadioGroup>{inputRadioItem}</RadioGroup>
    </ResponseGroup>
  );
}

const RadioGroup = styled.div`
  width: 100%;
  @media screen and (min-width: ${breakpoints.tablet}) {
    display: grid;
    grid-gap: 1em;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(auto-fit, minmax(2rem, 1fr));
  }
`;

const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const RadioLabel = styled.label`
  font-size: 0.9em;
`

