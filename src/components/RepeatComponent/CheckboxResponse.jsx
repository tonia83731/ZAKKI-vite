import { styled } from "styled-components";
import { ResponseGroup } from "./ShortResponse";
import { RadioLabel } from "./RadioResponse";


export function CheckboxResponse({ className, data }) {
  const inputCheckboxItem = data.map((item) => {
    return (
      <div key={item.id}>
        <input type="checkbox" />
        <CheckboxLabel>
          {item.name} <a herf="">{item.link}</a>
        </CheckboxLabel>
      </div>
    );
  });
  return <ResponseGroup margin="0">{inputCheckboxItem}</ResponseGroup>;
}

const CheckboxLabel = styled(RadioLabel)`
  margin-left: 0.5em;
`