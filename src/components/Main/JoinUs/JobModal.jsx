import { styled } from "styled-components";
import { breakpoints } from "../../../styles/Breakpoints";
import { colorList } from "../../../styles/ColorSettings";
import { SubTitle, SubTitle2 } from "../../../styles/Title";

const modalData = [
  {
    id: 6,
    name: "videoprapher",
    title: "Videographer",
    location: "Vurtual / In Person",
    duration: "3-months",
    url: "https://picsum.photos/300?text=5",
    requirements: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Maecenas posuere turpis tristique nisl tempus, eu semper lacus accumsan.",
      "Nullam ac tellus a dui accumsan condimentum at eget ipsum.",
      "Vivamus vel eros in risus vestibulum placerat.",
      "Vivamus vel leo nec mauris tristique euismod nec sed enim.",
    ],
  },
];

export default function JobModal({prop, onModalClose}) {
  return (
    <JobModalSection id="job-modal">
      <JobModalBtn onClick={onModalClose}>✖</JobModalBtn>
      <JobModalHr />
      {prop.map((job) => {
        return (
          <>
            <SubTitle>{job.title}</SubTitle>
            <JobModalInfo>
              <SubTitle2>Requirements</SubTitle2>
              <JobModalList>
                {
                  job.requirements.map((item) => {
                    return (
                      <JobModalItem>
                        {item}
                      </JobModalItem>
                    );
                  })
                }
              </JobModalList>
            </JobModalInfo>
          </>
        );
      })}
    </JobModalSection>
  );
}

export const JobModalSection = styled.section`
  position: fixed;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  padding: 1em;
  background-color: ${colorList.white};
  color: ${colorList.green_focus};
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 75%;
    max-width: 900px;
  }
`;
const JobModalBtn = styled.button`
  font-size: 1.2em;
  color: ${colorList.green_focus_80};
  &:hover {
    color: ${colorList.green_focus};
  }
`;
const JobModalHr = styled.hr`
  border-top: 1px solid ${colorList.neutral_60};
  margin: 0.5em 0;
`;

const JobModalInfo = styled.div`
  margin-top: 1em;
  padding: 0 1em;
`;
const JobModalList = styled.ul`
  margin-top: 0.5em;
`;
const JobModalItem = styled.li`
  margin: 0.2em 1em;
  list-style-type: disc;
  font-size: 0.9em;
`;
