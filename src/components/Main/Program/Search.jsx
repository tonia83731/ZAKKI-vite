import React, { useState, useEffect } from "react";

import { styled } from "styled-components";
import { breakpoints } from "../../../styles/Breakpoints";
import { colorList } from "../../../styles/ColorSettings";
import { FlexCenter } from "../Event/RecommendEvent";

import { ReactComponent as MagnifyIcon } from "../../../assets/svg/_Magnifyingglass.svg";
import { ReactComponent as MicIcon } from "../../../assets/svg/_Mic.svg";
import { ReactComponent as FilterIcon } from "../../../assets/svg/filter.svg";
import { ReactComponent as FilterDesktopIcon } from "../../../assets/svg/FilterDesktop.svg";

import FilterList from "./FilterList";

const programFilterData = [
  {
    id: 1,
    name: "Most Popular",
    value: "Popular",
    isChecked: false,
  },
  {
    id: 2,
    name: "Most Current",
    value: "Current",
    isChecked: true,
  },
  {
    id: 3,
    name: "From New to Old",
    value: "New",
    isChecked: false,
  },
  {
    id: 4,
    name: "From Old to New",
    value: "Old",
    isChecked: false,
  },
];

export default function Search() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const filterItem = programFilterData.map((item) => {
    return (
      <option className="filter-option" value={item.value}>
        {item.name}
      </option>
    );
  });
  const filterListItem = programFilterData.map((item) => {
    return (
      <FilterRadioDiv>
        <FilterRadioInput
          type="radio"
          name="filter"
          key={item.id}
          id={item.value}
          value={item.value}
          defaultChecked={item.value === "Current"}
        />
        <FilterRadioLabel htmlFor={item.value}>{item.name}</FilterRadioLabel>
      </FilterRadioDiv>
    );
  });
  return (
    <SearchDiv>
      <SearchGroup>
        <SearchInput type="text" placeholder="Enter keyword..." />
        <SearchBtnGroup>
          <SearchSubmit type="submit" title="search...">
            <MagnifyIcon />
          </SearchSubmit>
          <SearchMic>
            <MicIcon />
          </SearchMic>
        </SearchBtnGroup>
      </SearchGroup>
      <FilterGroup data-mode="mobile">
        <FilterToggle type="checkbox" id="filter-toggle" />
        <FilterToggleLabel htmlFor="filter-toggle">
          {windowWidth > 500 ? <FlexCenter>
            Filter <FilterDesktopIcon/>
          </FlexCenter> : (
            <FilterIcon />
          )}
        </FilterToggleLabel>
        <FilterDropdown>
          <div>{filterListItem}</div>
        </FilterDropdown>
      </FilterGroup>
      {/* <FilterGroup data-mode="desktop">
        <FilterSelect name="filter" id="filter-select" defaultValue="Current">
          {filterItem}
        </FilterSelect>
      </FilterGroup> */}
    </SearchDiv>
  );
}

const SearchDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1em;
  height: 40px;
  margin-bottom: 2em;
`;

const SearchGroup = styled.div`
  grid-column: 1/4;
  box-shadow: 0 4px 20px -2px #e9e9e9;
  position: relative;
  @media screen and (min-width: ${breakpoints.tablet}) {
    grid-column: 2/4;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border: 1px solid var(--box-border);
  border-radius: 5px;
  font-size: 0.75em;
  color: ${colorList.neutral_70};
  &:focus {
    border: 2px solid ${colorList.green_focus};
  }
`;

const SearchBtnGroup = styled.div`
  height: 40px;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
`;

const SearchSubmit = styled.button`
  svg {
    width: 2rem;
    height: 2rem;
    path {
      fill: ${colorList.neutral_60};
    }
  }
`;

const SearchMic = styled.button`
  border-left: 2px solid ${colorList.neutral_40};
  svg {
    width: 1.8rem;
    height: 1.8rem;
    path {
      fill: ${colorList.neutral_60};
    }
  }
`;

const FilterGroup = styled.div`
  @media screen and (min-width: 550px) {
    grid-column: 4/5;
    position: relative;
  }
`;

const FilterToggleLabel = styled.label`
  grid-column: 4/5;
  width: 100%;
  height: 100%;
  color: ${colorList.black_80};
  font-weight: 700;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid ${colorList.neutral_40};
  border-radius: 5px;
  box-shadow: 0 4px 20px -2px #e9e9e9;
  svg {
    height: 1.2rem;

    path {
      fill: ${colorList.black_80};
    }
  }
  @media screen and (min-width: 550px){
    svg {
      margin-left: 0.5em;
    }
  }
`;
const FilterDropdown = styled.div`
  width: 98%;
  background-color: ${colorList.white_80};
  position: fixed;
  bottom: 0.25em;
  left: 1%;

  z-index: 4;
  text-align: center;
  padding: 1em 0;
  border-radius: 10px 10px 0 0;

  transform: scale(1, 0);
  transform-origin: bottom;
  transition: transform 0.3s ease-out;
  @media screen and (min-width: 550px) {
    position: absolute;
    top: 40px;
    bottom: unset;
    z-index: 999;
    border-radius: 0 0 10px 10px;
    transform-origin: top;
  }
`;

const FilterRadioDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  padding: 0.5em 0;
  &:hover {
    background-color: ${colorList.black_20};
  }
`;

const FilterRadioLabel = styled.label`
  font-size: 1em;
  font-weight: 400;
  &:hover {
    font-weight: 600;
  }
`;

const FilterRadioInput = styled.input`
  display: none;
  &:checked + ${FilterRadioLabel} {
    font-weight: 700;
  }
  &:checked + ${FilterRadioLabel}::before {
    content: "✔";
    display: inline-block;
    width: 12px;
    height: 12px;
    padding-right: 1em;
  }
`;

const FilterToggle = styled.input`
  display: none;
  &:checked ~ ${FilterDropdown} {
    transform: scale(1, 1);
  }
  &:checked ~ ${FilterDropdown} ${FilterRadioDiv} {
    opacity: 1;
  }
`;

const FilterSelect = styled.select`
  width: 100%;
  height: 100%;
  border: 1px solid ${colorList.neutral_40};
  border-radius: 5px;
  box-shadow: 0 4px 20px -2px #e9e9e9;
  padding-left: 10px;
  &:focus {
    border: 2px solid ${colorList.green_focus};
  }
`;
