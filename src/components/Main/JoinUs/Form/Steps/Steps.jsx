import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import StepDone from './StepDone'

function StepsPageChange({step}){
  if(step === 1) {return <StepOne/>}
  else if (step === 2) {
    return <StepTwo />;
  }
  else if (step === 3) {
    return <StepThree />;
  }
}


export default function Steps({ activeStep }) {
  return (
    <section className="form-section">
      <StepsPageChange step={activeStep} />
    </section>
  );
}