import { styled } from "styled-components";
import { colorList } from "../../styles/ColorSettings";
import { ResponseGroup } from "./ShortResponse";
import { RadioLabel } from "./RadioResponse";

export function CheckboxResponse({
  id,
  title,
  name,
  link,
  isChecked,
  onChange,
  isRequired,
}) {
  return (
    <ResponseGroup margin="0">
      <div key={id}>
        <input
          type="checkbox"
          name={name}
          id={id}
          checked={isChecked}
          onChange={onChange}
        />
        <CheckboxLabel htmlFor={id}>
          {title} <a herf="">{link}</a>{" "}
          {isRequired === "true" ? <span>*</span> : ""}
        </CheckboxLabel>
      </div>
    </ResponseGroup>
  );
}

const CheckboxLabel = styled(RadioLabel)`
  margin-left: 0.5em;
  a {
    text-decoration: underline;
  }
  span {
    color: ${colorList.error};
    font-weight: 700;
  }
`;
