import { styled } from "styled-components";
import { breakpoints } from "../../styles/Breakpoints";
import { colorList } from "../../styles/ColorSettings";

// default title
export function PageTitle({ title, subtitle }) {
  return (
    <PageTitleDiv>
      <PageBorderTitle>{title}</PageBorderTitle>
      <PageBorderSubTitle>{subtitle}</PageBorderSubTitle>
    </PageTitleDiv>
  );
}


const PageTitleDiv = styled.div`
  margin: 0 1.5em 3em;
  text-align: center;
`;
export const PageBorderTitle = styled.div`
  width: 50%;
  padding: 1rem 0;
  margin: 0 auto 1.2em;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 1.6em;
  color: ${(props) => props.color || colorList.black};
  border-bottom: 4px solid ${colorList.warning};
  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 30%;
    max-width: 300px;
  }
`;
export const PageBorderSubTitle = styled.div`
  font-weight: 600;
  font-size: 1em;
`