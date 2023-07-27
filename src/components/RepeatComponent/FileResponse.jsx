import { styled } from "styled-components";
import { breakpoints } from "../../styles/Breakpoints";
import { colorList } from "../../styles/ColorSettings";
import { ResponseGroup, FormLabel } from "./ShortResponse";

const fileData = [
  {
    id: 1,
    title1: "Resume / CV",
    for: "resume",
    accept: ".doc,.docx,.pdf",
    isRequired: true,
  },
  {
    id: 2,
    title1: "Other Documents",
    title2: "(Portfolio, Recommendation letter, etc.)",
    for: "other-doc",
    accept: ".doc,.docx,.pdf",
    isRequired: false,
  },
];

export function FileResponse() {
  return fileData.map((item) => {
    return (
      <ResponseGroup key={item.id}>
        <FormLabel>
          {item.title1} {item.isRequired === true ? <span>*</span> : ""}
          <br />
          {item.title2}
        </FormLabel>
        <FileInput
          type="file"
          className="input-file-item"
          id={item.for}
          accept={item.accept}
          required={item.isRequired}
        ></FileInput>
      </ResponseGroup>
    );
  });
}



const FileInput = styled.input`
  display: flex;
  width: 100%;
  height: 100px;
  line-height: 100px;
  text-align-last: center;
  border: 1px solid ${colorList.neutral_60};
  border-radius: 5px;
  padding: 0 10px;
  font-size: 0.75em;
  color: ${colorList.neutral_70};
  &:focus {
    border: 2px solid ${colorList.green_focus};
  }
  @media screen and (min-width: ${breakpoints.desktop}) {
    height: 135px;
    line-height: 135px;
  }
`; 

// const FileLabel = styled.label`
//   display: flex;
//   width: 100%;
//   height: 20vh;
//   min-height: 135px;
//   justify-content: center;
//   align-items: center;
//   border: 1px solid ${colorList.neutral_60};
//   border-radius: 5px;
//   padding: 0 10px;
//   font-size: 0.75em;
//   color: ${colorList.neutral_70};
//   &:focus {
//     border: 2px solid ${colorList.green_focus};
//   }
// `;