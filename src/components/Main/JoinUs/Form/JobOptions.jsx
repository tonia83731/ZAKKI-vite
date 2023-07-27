import { ReactComponent as LocationIcon } from "../../../../assets/svg/location.svg";
import { ReactComponent as DurationIcon } from "../../../../assets/svg/duration.svg";

import { dummyJobData } from "../../../../Data/JobData";

import { styled } from "styled-components";
import { breakpoints } from "../../../../styles/Breakpoints";
import { colorList } from "../../../../styles/ColorSettings";
import { CardDiv, CardBody, CardParagraph } from "../../Program/ProgramCard";
import { FlexCenter } from "../../Event/RecommendEvent";
import { SubTitle2 } from "../../../../styles/Title";

export default function JobOptions({ onInfoClick, onJobOptionsChange }) {
  const jobCard = dummyJobData.map((job) => {
    return (
      <>
        <JobCheckbox
          type="radio"
          id={job.name}
          name="job-option"
          value={job.title}
          onChange={onJobOptionsChange}
        />
        <JobCardLabel background={job.url} htmlFor={job.name}>
          <JobCardBody>
            <FlexCenter justify="space-between">
              <SubTitle2>{job.title}</SubTitle2>
              <MoreInfoLink onClick={() => onInfoClick?.(job.id)}>
                More Info.
              </MoreInfoLink>
            </FlexCenter>
            <CardParagraph>
              <JobCardItem>
                <JobIconSVG>
                  <LocationIcon />
                </JobIconSVG>
                <span>{job.location}</span>
              </JobCardItem>
              <JobCardItem>
                <JobIconSVG>
                  <DurationIcon />
                </JobIconSVG>
                <span>{job.duration}</span>
              </JobCardItem>
            </CardParagraph>
          </JobCardBody>
        </JobCardLabel>
      </>
    );
  });
  return <JobOptionsContainer>{jobCard}</JobOptionsContainer>;
}

// const JobLabel = styled.label`
//   border: 2px solid ${colorList.green_focus_80};
// `;

const JobOptionsContainer = styled.div`
  white-space: nowrap;
  width: 95%;
  margin: 0 auto;
  overflow-x: scroll;
  @media screen and (min-width: ${breakpoints.desktop}) {
    width: 100%;
    margin: 0;
    white-space: unset;
    padding-right: 1em;
    overflow-x: hidden;
    overflow-y: scroll;
    height: 124vh;
    min-height: 920px;
  }
`;

const JobCardLabel = styled.label`
  display: inline-block;
  border-radius: 10px;
  margin-right: 1em;
  margin-bottom: 1em;
  width: 100%;
  max-width: 400px;
  height: 40vh;
  min-height: 200px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  background: ${(props) => `url(${props.background}) no-repeat center`};
  background-size: cover;
  position: relative;
  @media screen and (min-width: ${breakpoints.desktop}) {
    display: block;
    max-width: unset;
  }
`;
const JobCheckbox = styled.input`
  display: none;
  &:checked + ${JobCardLabel} {
    border: 2px solid ${colorList.green_focus_80};
  }
`;

const JobCardBody = styled(CardBody)`
  min-height: 60px;
  border-radius: 0 0 10px 10px;
`;

const MoreInfoLink = styled.button`
  font-size: 0.75em;
  text-decoration: underline;
  color: ${colorList.primary};
  &:hover {
    font-weight: 700;
    color: ${colorList.green_hover};
  }
`;
const JobCardItem = styled.span`
  &:last-child {
    padding-left: 0.8em;
  }
`;

const JobIconSVG = styled.i`
  margin-right: 0.5em;
  svg {
    width: 12px;
    height: 12px;
    path {
      fill: rgb(10, 62, 25, 0.8);
    }
  }
`;
