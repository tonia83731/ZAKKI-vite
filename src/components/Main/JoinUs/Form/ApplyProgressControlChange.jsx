// import { NextStep } from "./NextStep";
// import { PreviousStep } from "./PreviousStep";

import { Link } from "react-router-dom";

// export default function ApplyProgressControlChange({ phase, onClick }) {
//   if (phase === "basic-info") {
//     return (
//       <section className="button-group" data-phase="basic-info">
//         <NextStep onClick={onClick} />
//       </section>
//     );
//   }
//   if (phase === "document") {
//     return (
//       <section className="button-group" data-phase="document">
//         <PreviousStep onClick={onClick} />
//         <NextStep onClick={onClick} />
//       </section>
//     );
//   }
//   if (phase === "preview") {
//     return (
//       <section className="button-group" data-phase="preview">
//         <PreviousStep onClick={onClick} />
//         <button className="next submit light-green-btn" onClick={onClick}>
//           Submit
//         </button>
//       </section>
//     );
//   }
//   if (phase === "submit") {
//     return (
//       <section className="button-group-done" data-phase="submit">
//         <Link to="/" className="light-green-btn back-home">
//           Back to Home
//         </Link>
//       </section>
//     );
//   }
// }

export default function ApplyProgressControlChange({ phase, onClick }) {
  if (phase === "basic-info") {
    return (
      <section className="button-group" data-phase="basic-info">
        <NextStep onClick={onClick} />
      </section>
    );
  }
  if (phase === "document") {
    return (
      <section className="button-group" data-phase="document">
        <PreviousStep onClick={onClick} />
        <NextStep onClick={onClick} />
      </section>
    );
  }
  if (phase === "preview") {
    return (
      <section className="button-group" data-phase="preview">
        <PreviousStep onClick={onClick} />
        <button className="next submit light-green-btn" onClick={onClick}>
          Submit
        </button>
      </section>
    );
  }
  if (phase === "submit") {
    return (
      <section className="button-group-done" data-phase="submit">
        <Link to="/" className="light-green-btn back-home">
          Back to Home
        </Link>
      </section>
    );
  }
}

