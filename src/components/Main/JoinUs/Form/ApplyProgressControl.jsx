import { styled } from "styled-components"
import { colorList } from "../../../../styles/ColorSettings"

export default function ApplyProgressControl({
  onPreClick,
  onNextClick,
  onFormSubmit,
  activeStep,
  disabled,
  nextDisabled,
}) {
  return (
    <StepBtnContainer>
      <StepBtnStyle onClick={onPreClick} disabled={activeStep === 1}>
        Previous
      </StepBtnStyle>
      {activeStep !== 3 ? (
        <StepBtnStyle onClick={onNextClick} disabled={nextDisabled}>
          Next
        </StepBtnStyle>
      ) : (
        <StepBtnStyle onClick={onFormSubmit} disabled={disabled}>
          Submit
        </StepBtnStyle>
      )}
    </StepBtnContainer>
  );
}


const StepBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 -15px;
  margin-top: 2em;
`
const StepBtnStyle = styled.button`
  border-radius: 5px;
  border: 0;
  background: ${colorList.primary};
  color: ${colorList.white};
  cursor: pointer;
  padding: 8px;
  width: 90px;
  &:active {
    transform: scale(0.98);
  }
  &:disabled {
    background: ${colorList.disabled};
    color: ${colorList.black_40};
    cursor: not-allowed;
  }
`;