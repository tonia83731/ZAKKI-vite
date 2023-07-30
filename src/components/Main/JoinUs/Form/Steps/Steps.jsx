import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

import useFormContext from "../../../../../hooks/useFormContext";

// function StepsPageChange({
//   step,
//   jobValue,
//   formData,
//   setFormData,
//   onGetNewsChange,
//   onPolicyChange,
// }) {
//   if (step === 1) {
//     return (
//       <StepOne
//         formData={formData}
//         setFormData={setFormData}
//         onGetNewsChange={onGetNewsChange}
//         onPolicyChange={onPolicyChange}
//       />
//     );
//   } else if (step === 2) {
//     return (
//       <StepTwo
//         jobValue={jobValue}
//         formData={formData}
//         setFormData={setFormData}
//       />
//     );
//   } else if (step === 3) {
//     return <StepThree formData={formData} setFormData={setFormData} />;
//   }
// }

export default function Steps({
  jobValue
}) {
  const { currentPage } = useFormContext();

  const display = {
    1: <StepOne />,
    2: <StepTwo jobValue={jobValue} />,
    3: <StepThree />,
  };

  return (
    <section className="form-section">
      {display[currentPage]}
    </section>
  );
}
