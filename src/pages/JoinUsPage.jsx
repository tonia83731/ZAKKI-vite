import ApplyProgress from "../components/Main/JoinUs/Form/ApplyProgress";
import ApplyProgressControl from "../components/Main/JoinUs/Form/ApplyProgressControl";
import Steps from "../components/Main/JoinUs/Form/Steps/Steps";
import JobOptions from "../components/Main/JoinUs/Form/JobOptions";
import JobModal from "../components/Main/JoinUs/JobModal";

import useFormContext from "../hooks/useFormContext";

import { styled } from "styled-components";
import { breakpoints } from "../styles/Breakpoints";
import { MainContainer, PageContainer } from "../styles/Container";

import { dummyJobData } from "../Data/JobData";

import Swal from "sweetalert2";

import { useState } from "react";

export default function JoinUsPage() {
  const {
    currentPage,
    setCurrentPage,
    formData,
    setFormData,
    canSubmit,
    disableNext,
    handleJobOptionsChange
  } = useFormContext();

  
  // const [jobValue, setJobValue] = useState("");
  // const [currentPage, setCurrentPage] = useState(1);
  const [modalContent, setModalContent] = useState([]);
  const [modalToggle, setModalToggle] = useState(false);

  // const [isGetNewsChecked, setIsGetNewsChecked] = useState(false);
  // const [isPolicyChecked, setIsPolicyChecked] = useState(false);

  

  const steps = [
    {
      label: "BasicInfo.",
      step: 1,
    },
    {
      label: "JobInfo.",
      step: 2,
    },
    {
      label: "File/Comments",
      step: 3,
    },
  ];
  // const [formData, setFormData] = useState({
  //   name: "",
  //   age: 18,
  //   phone: "",
  //   email: "",
  //   getNews: isGetNewsChecked,
  //   policy: isPolicyChecked,
  //   location: "offline",
  //   time: "anytime",
  //   timeZone: "",
  //   file: "",
  //   otherFile: "",
  //   comment: "",
  // });
  // const [errors, setErrors] = useState({
  //   name: "",
  //   phone: "",
  //   email: "",
  //   timeZone: "",
  //   file: "",
  // });

  const handleInfoClick = (id) => {
    const jobModal = dummyJobData.filter((prop) => prop.id === id);
    setModalContent(jobModal);
    setModalToggle(true);
  };
  const handleModalClose = () => {
    setModalToggle(false);
  };

  // const handleJobOptionsChange = (e) => {
  //   setJobValue(e.target.value);
  // };
  // const handleGetNewsChange = () => {
  //   setIsGetNewsChecked(!isGetNewsChecked);
  //   setFormData({
  //     ...formData,
  //     getNews: isGetNewsChecked,
  //   });
  // };
  // const handlePolicyChange = () => {
  //   setIsPolicyChecked(!isPolicyChecked);
  //   setFormData({
  //     ...formData,
  //     policy: isPolicyChecked,
  //   });
  // };

  // handle previous button
  const handlePrevClick = () => {
    setCurrentPage((prev) => prev - 1);
  };
  // handle next button
  const handleNextClick = () => {
    setCurrentPage((prev) => prev + 1);
  };
  /* sumit form at the final page */
  const handleFormSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      icon: "success",
      title: "Your application has been submitted",
      showConfirmButton: false,
      timer: 1500,
    });
    setCurrentPage(1);
    setFormData({
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
  };
  /* submit form at the final page */

  const totalPage = steps.length;
  const width = `${(100 / (totalPage - 1)) * (currentPage - 1)}%`;

  return (
    <main>
      <MainContainer>
        <section id="join-us">
          <JoinUsContainer>
            <JobOptions
              onInfoClick={handleInfoClick}
              onJobOptionsChange={handleJobOptionsChange}
            />
            <FormContainer>
              <ApplyProgress
                props={steps}
                width={width}
                activeStep={currentPage}
              />
              <Steps jobValue={formData.jobTitleValue} />
              <ApplyProgressControl
                onPreClick={handlePrevClick}
                onNextClick={handleNextClick}
                onFormSubmit={handleFormSubmit}
                activeStep={currentPage}
                disabled={!canSubmit}
                nextDisabled={disableNext}
              />
            </FormContainer>
          </JoinUsContainer>
        </section>
      </MainContainer>
      {modalToggle && (
        <JobModal prop={modalContent} onModalClose={handleModalClose} />
      )}
    </main>
  );
}

const JoinUsContainer = styled.div`
  @media screen and (min-width: ${breakpoints.desktop}) {
    padding: 2em 2em 2.5em;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 1em;
  }
`;

const FormContainer = styled(PageContainer)`
  @media screen and (min-width: ${breakpoints.tablet}) {
    max-width: 800px;
    margin: 0 auto;
  }
  @media screen and (min-width: ${breakpoints.desktop}) {
    max-width: 1200px;
  }
`;
