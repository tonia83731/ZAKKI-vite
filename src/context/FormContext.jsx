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
    firstName: "",
    lastName: "",
    age: 18,
    phoneNum: "",
    email: "",
    getNews: false,
    policy: false,
    availableLocation: "offline",
    availableTime: "anytime",
    timeZone: "",
    resume: "",
    otherDoc: "",
    comment: "",
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

  /* input that are not required */
  const { age, getNews, otherDoc, comment, ...requiredInputs } = formData;

  /* form validation */ /* take page into account */
  const canSubmit =
    [...Object.values(requiredInputs)].every(Boolean) &&
    currentPage === Object.keys(title).length;

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
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
