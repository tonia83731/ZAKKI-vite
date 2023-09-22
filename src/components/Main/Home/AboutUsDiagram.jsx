import { styled } from "styled-components";

import { ReactComponent as ElderlyIcon } from "../../../assets/Img/Home/elderly.svg";
import { ReactComponent as CommunityIcon } from "../../../assets/Img/Home/community.svg";
import { ReactComponent as DisabledIcon } from "../../../assets/Img/Home/disabled.svg";

const diagramData = [
  {
    id: 1,
    diagram: <ElderlyIcon />,
    title: "Elderly",
  },
  {
    id: 2,
    diagram: <CommunityIcon />,
    title: "Community of elderly",
  },
  {
    id: 3,
    diagram: <DisabledIcon />,
    title: "Disabled elderly",
  },
];

export default function AboutUsDiagram() {
  return (
    <AboutUsDiagramGroup>
       {diagramData.map((item) => {
        return (
          <AboutUsDigramItem key={item.id}>
            <AboutUsDiagramImg>
              {item.diagram}
            </AboutUsDiagramImg>
            <p>{item.title}</p>
          </AboutUsDigramItem>
        );
      })}
    </AboutUsDiagramGroup>
  );
}

const AboutUsDiagramGroup = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1em 0;
`;

const AboutUsDigramItem = styled.div`
  width: 100%;
  font-size: 1em;
  font-weight: 600;
`
const AboutUsDiagramImg = styled.div`
  svg {
    width: auto;
    height: 3em;
  }
`;