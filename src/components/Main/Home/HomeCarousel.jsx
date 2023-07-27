import { styled } from "styled-components";
import { colorList } from "../../../styles/ColorSettings";
import { useState, useEffect } from "react";

import HomeCarouselItemSwitch from "./HomeCarouselItemSwitch";

export default function HomeCarousel() {
  const homePage = ["main", "program", "story"];
  const [current, setCurrent] = useState(0);

  const handleFirstClick = () => {
    setCurrent(0)
  }
  const handleSecondClick = () => {
    setCurrent(1);
  };
  const handleThirdClick = () => {
    setCurrent(2);
  };

  useEffect(() => {
    const next = (current + 1) % homePage.length;
    const id = setTimeout(() => setCurrent(next), 5000);
    return () => clearTimeout(id);
  }, [current]);

  const currentPage = homePage[current];

  return (
    <>
      <HomeCarouselItemSwitch page={currentPage} />
      <DotBtnDiv>
        <DotBtn onClick={handleFirstClick} />
        <DotBreak />
        <DotBtn onClick={handleSecondClick} />
        <DotBreak />
        <DotBtn onClick={handleThirdClick} />
      </DotBtnDiv>
    </>
  );
}


const DotBtnDiv = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5em;
`;
const DotBreak = styled.div`
  margin: 0.5em;
`;
const DotBtn = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background-color: ${colorList.neutral_60};
`;
