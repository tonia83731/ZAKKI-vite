import { styled } from "styled-components";
import { breakpoints } from "../../styles/Breakpoints";
import { colorList } from "../../styles/ColorSettings";
import { ResponseGroup, FormLabel } from "./ShortResponse";

export function FileResponse({forId, title1, title2, accept, isRequired, onChange, title}) {
  return (
    <FileResponseGroup>
      <FormLabel>
        {title1} {isRequired === "true" ? <span>*</span> : ""}
        <br />
        {title2 || ""}
      </FormLabel>
      <FileInput
        type="file"
        name={forId}
        id={forId}
        accept={accept || ".doc,.docx,.pdf"}
        required={isRequired}
        onChange={onChange}
        title={title}
      ></FileInput>
      <FileLabel htmlFor={forId}>{title}</FileLabel>
    </FileResponseGroup>
  );
}

const FileResponseGroup = styled(ResponseGroup)`
  position: relative;
`


const FileInput = styled.input`
  display: none;
`; 

const FileLabel = styled.label`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100px;
  line-height: 100px;
  border: 1px solid ${colorList.neutral_60};
  border-radius: 5px;
  padding: 0 10px;
  font-size: 0.75em;
  color: ${colorList.neutral_70};
  cursor:pointer;
  &:focus {
    border: 2px solid ${colorList.green_focus};
  }
  @media screen and (min-width: ${breakpoints.desktop}) {
    height: 135px;
    line-height: 135px;
  }
`;