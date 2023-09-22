import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { colorList } from "../../../styles/ColorSettings";
import { SubTitle2 } from "../../../styles/Title";
import { breakpoints } from "../../../styles/Breakpoints";



export default function ProgramCard({props}) {
  return props.map((item) => {
    return (
      <Link to={`/ZAKKI-vite/programs/${item.id}`} key={item.id}>
        <CardDiv background={item.img} key={item.id}>
          <CardBody>
            <SubTitle2 className="title">{item.title}</SubTitle2>
            <CardParagraph>
              New update: <time>{item.update_time}</time>
            </CardParagraph>
          </CardBody>
        </CardDiv>
      </Link>
    );
  });
}

export const CardDiv = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 40vh;
  min-height: 200px;
  background: ${(props) => `url(${props.background}) no-repeat center`};
  background-size: cover;
  position: relative;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;

export const CardBody = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  min-height: 90px;
  background-color: ${colorList.white};
  padding: 0.5em 1em;
  @media screen and (min-width: ${breakpoints.tablet}) {
    min-height: 120px;
  }
`;
export const CardParagraph = styled.p`
  font-size: 12px;
  color: ${colorList.neutral_60};
`;