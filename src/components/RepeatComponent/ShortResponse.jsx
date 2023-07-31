import { styled } from "styled-components";
import { colorList } from "../../styles/ColorSettings";

export function ShortResponse({
  title,
  name,
  type,
  placeholder,
  pattern,
  isRequired,
  margin,
  inputValue,
  onChange,
}) {
  return (
    <ResponseGroup margin={margin}>
      <FormLabel>
        {title} {isRequired === "true" ? <span>*</span> : ""}
      </FormLabel>
      <FormInput
        type={type || "text"}
        name={name}
        placeholder={placeholder}
        required={isRequired}
        value={inputValue}
        onChange={onChange}
      />
    </ResponseGroup>
  );
}

export const ResponseGroup = styled.div`
  margin-bottom: ${(props) => props.margin || "0.75em"};
`;

export const FormLabel = styled.div`
  font-size: 1rem;
  font-weight: 700;
  span {
    color: ${colorList.error};
  }
`;
export const FormInput = styled.input`
  width: 100%;
  height: 2rem;
  border: 1px solid ${colorList.neutral_60};
  border-radius: 5px;
  padding: 0 10px;
  font-size: 0.75em;
  font-weight: 600;
  color: ${colorList.black_80};
  &:focus {
    border: 2px solid ${colorList.green_focus};
  }
  &::placeholder {
    color: ${colorList.neutral_60};
    font-weight: 400;
  }
`;
