import { styled } from "styled-components";
import { breakpoints } from "./Breakpoints";

export const MainContainer = styled.div`
  padding-top: 45px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  @media screen and (min-width: ${breakpoints.tablet}){
    padding-top: 60px;
  }
`;

export const PageContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 2em 2em 2.5em;
`;