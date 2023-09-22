import { styled } from "styled-components";
import { breakpoints } from "../../../styles/Breakpoints";
import { colorList } from "../../../styles/ColorSettings";
import { SubTitle } from "../../../styles/Title";
import { JobModalSection } from "../JoinUs/JobModal";
import { FormLabel } from "../../RepeatComponent/ShortResponse";
import { BreakPadding } from "../../../styles/BreakPadding";
import { ShortResponse } from "../../RepeatComponent/ShortResponse";
import { Link } from "react-router-dom";


const donateAmount = [
  {
    id: 1,
    amount: "100K",
  },
  {
    id: 2,
    amount: "500K",
  },
  {
    id: 3,
    amount: "1,000K",
  },
  {
    id: 4,
    amount: "2,000K",
  },
];

export default function DonateModal({prop, onModalClose, onDonateSubmit, nameValue, emailValue, onNameChange, onEmailChange, nameError}) {
  
  const donateRadioData = donateAmount.map((prop) => {
    return (
      <div key={prop.amount}>
        <DonateRadioInput
          id={prop.amount}
          type="radio"
          name="amount"
          defaultChecked={prop.id === 1}
        />
        <DonateRadioLabel htmlFor={prop.amount}>{prop.amount}</DonateRadioLabel>
      </div>
    );
  })
  
  return (
    <JobModalSection>
      {prop.map((donate) => {
        return (
          <>
            <SubTitle>Donate to {donate.title}</SubTitle>
            <DonateModalForm onSubmit={onDonateSubmit}>
              <div>
                <ShortResponse
                  title="Full Name"
                  name="Full Name"
                  type="text"
                  placeholder="Please enter your name..."
                  isRequired="true"
                  inputValue={nameValue}
                  onChange={onNameChange}
                />
                <ShortResponse
                  title="Email"
                  name="Email"
                  type="email"
                  placeholder="Please enter your email..."
                  isRequired="true"
                  inputValue={emailValue}
                  onChange={onEmailChange}
                />
                <div>
                  <FormLabel>
                    Donate Amount (IDR) <span>*</span>
                  </FormLabel>
                  <DonateCaption>
                    If you want to donate more, please mail to&nbsp;
                    <a href="mailto:info@zakki.org">info@zakki.org</a>.
                  </DonateCaption>
                  <DonateRadioGroup>{donateRadioData}</DonateRadioGroup>
                </div>
              </div>
              <BreakPadding />
              <DonateModalBtnGroup>
                <DonateCancelBtn onClick={onModalClose}>Cancel</DonateCancelBtn>
                <DonateNextBtn>
                  <Link to="#">To Payment</Link>
                </DonateNextBtn>
              </DonateModalBtnGroup>
            </DonateModalForm>
          </>
        );
      })}
    </JobModalSection>
  );
}

const DonateModalForm = styled.form`
  margin-top: 1em;
`;

const DonateModalBtnGroup = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: 100%;
  grid-template-rows: repeat(2, 40px);
  @media screen and (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 100%;
  }
`;

const DonateCancelBtn = styled.button`
  font-size: 0.9em;

  width: 100%;
  height: 100%;
  background-color: ${colorList.disabled};
  border-radius: 5px;
  padding: 0.5em 0;
  color: ${colorList.white_80};
  &:hover {
    color: ${colorList.white};
  }
`;
const DonateNextBtn = styled.button`
  font-size: 0.9em;
  width: 100%;
  height: 100%;
  background-color: ${colorList.green_focus_80};
  border-radius: 5px;
  padding: 0.5em 0;
  &:hover {
    background-color: ${colorList.green_focus};
  }
  a {
    color: ${colorList.white};
  }
`;

const DonateRadioGroup = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 40px);
  @media screen and (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 100%;
  }
`;
const DonateCaption = styled.div`
  font-size: 0.75em;
  color: ${colorList.green_focus_80};
  margin-bottom: 0.5em;
  a {
    text-decoration: underline;
    color: ${colorList.green_focus_80};
  }
`;


const DonateRadioLabel = styled.label`
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
  border: 1px solid ${colorList.disabled};
  border-radius: 5px;
  padding: 0.2em 1.2em;
  color: ${colorList.disabled};
  cursor: pointer;
`;
const DonateRadioInput = styled.input`
  display: none;
  &:checked + ${DonateRadioLabel} {
    border: 2px solid ${colorList.green_focus};
    color: ${colorList.green_focus};
    font-weight: 700;
  }
`;