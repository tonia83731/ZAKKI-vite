import { styled } from "styled-components";
import { breakpoints } from "../../../styles/Breakpoints";
import { colorList } from "../../../styles/ColorSettings";

export function Guide({ first, firstLink, second, secondLink }) {
  return (
    <GuideDiv>
      <a href={firstLink}>
        <GuideTag>{first}</GuideTag>
      </a>
      <GuideSpan>&#8250;</GuideSpan>
      <a href={secondLink}>
        <GuideTag>{second}</GuideTag>
      </a>
    </GuideDiv>
  );
}

const GuideDiv = styled.div`
  font-size: 12px;
  padding-bottom: 3rem;
  display: flex;
  align-items: center;
  @media screen and (min-width: ${breakpoints.tablet}) {
    padding-bottom: 3em;
  }
`;
const GuideSpan = styled.span`
  margin: 0 1em;
`
const GuideTag = styled.p`
  color: ${colorList.neutral_70};
  &:hover{
    text-decoration: underline;
  }
`