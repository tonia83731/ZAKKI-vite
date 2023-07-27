import { ReactComponent as CheckedIcon } from "../../../../assets/svg/Checked.svg";

import { styled } from "styled-components";
import { colorList } from "../../../../styles/ColorSettings";

import {useState} from 'react'
import { MainContainer } from "../../../../styles/Container";

const steps = [
  {
    label: "BasicInfo.",
    step: 1,
  },
  {
    label: "Document",
    step: 2,
  },
  {
    label: "Summary",
    step: 3,
  },
];

// export default function ApplyProgress() {
//   const progress = progressData.map((step) => {
//     return (
//       <>
//         <div className="progress-group" key={step.id} data-step={step.id}>
//           <span className="progress-icon-group">
//             <div className="progress-icon">
//               <CheckedIcon />
//             </div>
//           </span>
//           <div className="progress-label">{step.name}</div>
//         </div>
//         {step.id === 4 ? (
//           ""
//         ) : (
//           <hr className="progress-bar" data-step={step.id} />
//         )}
//       </>
//     );
//   });

//   return (
//     <section className="apply-progress">
//       <div className="apply-progress-container">{progress}</div>
//     </section>
//   );
// }

export default function ApplyProgress({props, width, activeStep}){
  return (
    <MainStepContainer>
      <StepContainer width={width}>
        {props.map((prop) => (
          <StepWrapper key={prop.step}>
            <StepStyle
              step={activeStep >= prop.step ? "completed" : "incompleted"}
            >
              {activeStep > prop.step ? (
                <CheckMark>&#10003;</CheckMark>
              ) : (
                <StepCount>{prop.step}</StepCount>
              )}
            </StepStyle>
            <StepsLabelContainer>
              <StepLabel>{prop.label}</StepLabel>
            </StepsLabelContainer>
          </StepWrapper>
        ))}
      </StepContainer>
    </MainStepContainer>
  );
}

const MainStepContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
`;
// max-width: 600px;

const StepContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    background: ${colorList.neutral_30};
    height: 4px;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }
  &::after {
    content: '';
    position: absolute;
    background: ${colorList.primary};
    height: 4px;
    width: ${(props) => props.width};
    top: 50%;
    transition: 0.4s ease;
    transform: translateY(-50%);
    left: 0;
`;

const StepWrapper= styled.div`
  position: relative;
  z-index: 1;
`

const StepStyle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${colorList.white};
  border: 3px solid
    ${({ step }) => (step === "completed" ? "#1EBA4B" : "#EDEDED")};
  transition: 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CheckMark = styled.div`
  font-size: 1em;
  font-weight: 700;
  color: ${colorList.primary};
`;

const StepCount = styled.span`
  font-size: 1em;
  color: ${colorList.neutral_30};
`;

const StepsLabelContainer = styled.div`
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StepLabel = styled.span`
  font-size: 1em;
  color: ${colorList.primary};
`;