import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import StepDone from './StepDone'

function StepsPageChange({ step, jobValue }) {
  if (step === 1) {
    return <StepOne jobValue={jobValue}/>;
  } else if (step === 2) {
    return <StepTwo />;
  } else if (step === 3) {
    return <StepThree />;
  }
}


export default function Steps({ activeStep, jobValue }) {
  return (
    <section className="form-section">
      <StepsPageChange
        step={activeStep}
        jobValue={jobValue}
      />
    </section>
  );
}