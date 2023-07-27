import { styled } from "styled-components";
import { breakpoints } from "../../../styles/Breakpoints";
import { colorList } from "../../../styles/ColorSettings";
import { MainTitle } from "../../../styles/Title";

import { ReactComponent as ProgramDonateIcon } from "../../../assets/svg/noun-donate-1230954.svg";
import { ReactComponent as ProgramVolunteerIcon } from "../../../assets/svg/noun-volunteer-3842725.svg";
import { ReactComponent as ProgramBeneficiaryIcon } from "../../../assets/svg/noun-people-5730407.svg";

const donateData = [
  {
    id: 1,
    name: "Donors",
    num: "123",
    icon: <ProgramDonateIcon />,
  },
  {
    id: 1,
    name: "Volunteers",
    num: "145",
    icon: <ProgramVolunteerIcon />,
  },
  {
    id: 1,
    name: "Beneficieries",
    num: "023",
    icon: <ProgramBeneficiaryIcon />,
  },
];


export default function DonateCard({ mode }) {
  const donateItem = donateData.map((item) => {
    return (
      <DonateNumItem key={item.id}>
        <DonateNumCount>
          <DonateNumCountIcon>
            {item.icon}
          </DonateNumCountIcon>
          <DonateNumCountNumber>
            {item.num}
          </DonateNumCountNumber>
        </DonateNumCount>
        <DonateName>
          Total
          <br />
          {item.name}
        </DonateName>
      </DonateNumItem>
    );
  });
  return (
    <DonateCardDiv data-mode={mode}>
      <MainTitle>
        Rp. <span>000000</span>
      </MainTitle>
      <DonateCardBody>
        <DontateCardProgress>
          <label for="card-body-progress">Current donate status</label>
          <div>
            <span>10</span>%
          </div>
        </DontateCardProgress>
        <Progress id="card-body-progress" value="10" max="100"></Progress>
      </DonateCardBody>
      <DonateNumDiv>{donateItem}</DonateNumDiv>
      <GreenBgBtn>Donate &rsaquo;</GreenBgBtn>
    </DonateCardDiv>
  );
}

const DonateCardDiv = styled.div`
  &[data-mode="mobile"] {
    text-align: center;
    width: 100%;
    padding: 15px;
    border: 3px solid ${colorList.green_focus_80};
    border-radius: 10px;
    margin: 2em 0;
  }
  &[data-mode="desktop"] {
    display: none;
  }
  @media screen and (min-width: ${breakpoints.desktop}) {
    &[data-mode="mobile"] {
      display: none;
    }
    &[data-mode="desktop"] {
      position: sticky;
      top: 12.5rem;

      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      width: 100%;
      max-height: 500px;
      padding: 1.5em 2em;
      border: 3px solid ${colorList.green_focus_80};
      border-radius: 10px;
    }
  }
`;

const DonateCardBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const DontateCardProgress = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  
  font-size: 1em;
  color: ${colorList.black_80};
`;
const Progress = styled.progress`
  width: 100%;
  height: 20px;
  margin-bottom: 0.8em;
  accent-color: ${colorList.green_focus};
`;

export const GreenBgBtn = styled.button`
  width: 100%;
  color: ${colorList.white};
  background-color: ${colorList.green_focus_80};
  border-radius: 5px;
  padding: 0.5em 0;
  margin: 0.8em 0;
  &:hover {
    background-color: ${colorList.green_focus};
  }
`;

const DonateNumDiv = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: ${breakpoints.desktop}) {
    flex-direction: column;
  }
`;
const DonateNumItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const DonateNumCount = styled.div`
  display: flex;
  align-items: center;
`;

const DonateNumCountIcon = styled.i`
  svg {
    width: 3em;
    height: 3em;
    path {
      fill: ${colorList.green_focus};
    }
  }
`;

const DonateNumCountNumber = styled.span`
  font-size: 1.5em;
  font-weight: 700;
  color: ${colorList.green_focus};
`;

const DonateName = styled.div`
  font-size: 0.8em;
  font-weight: 700;
  color: ${colorList.green_focus};
`;