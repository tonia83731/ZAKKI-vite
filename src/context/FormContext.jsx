import { createContext, useState, useEffect } from "react";

const FormContext = createContext({});

export const FormProvider = ({ children }) => {
  // title of each page
  const title = {
    1: "Basic Info",
    2: "Job Info",
    3: "Job File",
  };

  // track current locat page
  const [currentPage, setCurrentPage] = useState(1);

  // data that need to be track
  const [formData, setFormData] = useState({
    basicFirstName: "",
    basicLastName: "",
    basicAge: 18,
    basicPhoneNum: "",
    basicEmail: "",
    basicGetNews: false,
    basicPolicy: false,
    jobTitleValue:"",
    jobAvailableLocation: "offline",
    jobAvailableTime: "anytime",
    jobTimeZone: "",
    fileResume: "",
    fileOtherDoc: "",
    fileComment: "",
  });
  // onChange of every type input
  const handleFormChange = (e) => {
    /* input type */
    const type = e.target.type;
    /* input name */
    const name = e.target.name;

    let value = "";

    if (type === "checkbox") {
      value = e.target.checked;
    } else if (type === "file") {
      value = e.target.files[0];
    } else {
      value = e.target.value;
    }

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleJobOptionsChange = (e) => {
    setFormData((prevData) => ({...prevData, jobTitleValue: e.target.value}))
  };

  /* input that are not required */
  const {
    basicAge,
    basicGetNews,
    fileOtherDoc,
    fileComment,
    ...requiredInputs
  } = formData;

  /* form validation */ /* take page into account */
  const canSubmit =
    [...Object.values(requiredInputs)].every(Boolean) &&
    currentPage === Object.keys(title).length;

  const canNextPage1 = Object.keys(formData)
    .filter(
      (key) =>
        key.startsWith("basic") && key !== "basicAge" && key !== "basicGetNews"
    )
    .map((key) => formData[key])
    .every(Boolean);

  const canNextPage2 = Object.keys(formData)
    .filter((key) => key.startsWith("job"))
    .map((key) => formData[key])
    .every(Boolean);

  const disableNext = (currentPage === 1 && !canNextPage1) ||
    (currentPage === 2 && !canNextPage2);

  return (
    <FormContext.Provider
      value={{
        title,
        currentPage,
        setCurrentPage,
        formData,
        setFormData,
        canSubmit,
        handleFormChange,
        handleJobOptionsChange,
        disableNext,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
