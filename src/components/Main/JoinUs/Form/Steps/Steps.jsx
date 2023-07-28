import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepDone from "./StepDone";

function StepsPageChange({
  step,
  jobValue,
  formData,
  setFormData,
  onGetNewsChange,
  onPolicyChange,
}) {
  if (step === 1) {
    return (
      <StepOne
        formData={formData}
        setFormData={setFormData}
        onGetNewsChange={onGetNewsChange}
        onPolicyChange={onPolicyChange}
      />
    );
  } else if (step === 2) {
    return (
      <StepTwo
        jobValue={jobValue}
        formData={formData}
        setFormData={setFormData}
      />
    );
  } else if (step === 3) {
    return <StepThree formData={formData} setFormData={setFormData} />;
  }
}

export default function Steps({
  activeStep,
  jobValue,
  formData,
  setFormData,
  onGetNewsChange,
  onPolicyChange,
}) {
  return (
    <section className="form-section">
      <StepsPageChange
        step={activeStep}
        jobValue={jobValue}
        formData={formData}
        setFormData={setFormData}
        onGetNewsChange={onGetNewsChange}
        onPolicyChange={onPolicyChange}
      />
    </section>
  );
}
