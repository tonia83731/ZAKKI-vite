import { styled } from "styled-components";
import { breakpoints } from "../../../../../styles/Breakpoints";
import { colorList } from "../../../../../styles/ColorSettings";

export function PreviewList({ className, data }) {
  const previewListItem = data.map((item) => {
    return (
      <PreviewItem>
        <PreviewItemTitle>{item.title}</PreviewItemTitle>
        <PreviewValue>{item.value}</PreviewValue>
      </PreviewItem>
    );
  });
  return <PreviewUl>{previewListItem}</PreviewUl>;
}


const PreviewUl = styled.ul`
  color: ${colorList.black_80};
  font-size: 1em;
`
const PreviewItem = styled.li`
  display: grid;
  grid-template-columns: repeat(3. 1fr);
  align-items: start;
  padding: 0.5em 0;
`;

const PreviewItemTitle = styled.span`
  grid-column: 1/2;
  font-weight: 500;
`

const PreviewValue = styled.span`
  grid-column: 3/4;
  text-align: end;
`