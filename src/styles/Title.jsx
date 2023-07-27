import { styled } from "styled-components"
import { colorList } from "./ColorSettings"

export const MainTitle = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  color: ${(props) => props.color || colorList.black};
  font-size: 1.6em;
`;

export const SubTitle = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  color: ${(props) => props.color || colorList.black};
  font-size: 1.2em;
  margin: ${(props) => props.margin || 0};
`;

export const SubTitle2 = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  color: ${(props) => props.color || colorList.black};
  font-size: 1em;
  margin: ${(props) => props.margin || 0};
`;