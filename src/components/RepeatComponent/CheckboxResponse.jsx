import { styled } from "styled-components";
import { ResponseGroup } from "./ShortResponse";
import { RadioLabel } from "./RadioResponse";

export function CheckboxResponse({ id, name, link, isChecked, onChange }) {
  return (
    <ResponseGroup margin="0">
      <div key={id}>
        <input
          type="checkbox"
          id={id}
          checked={isChecked}
          onChange={onChange}
        />
        <CheckboxLabel htmlFor={id}>
          {name} <a herf="">{link}</a>
        </CheckboxLabel>
      </div>
    </ResponseGroup>
  );
}

const CheckboxLabel = styled(RadioLabel)`
  margin-left: 0.5em;
`;
