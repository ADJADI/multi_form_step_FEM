import react, { useEffect, useState } from "react";
import { Formik, Form, useField, validateYupSchema } from "formik";
import * as Yup from "yup";
import SelectPlan from "./components/SelectPlan";
import YourInfo from "./components/YourInfo";
import AddOns from "./components/AddOns";
import Summary from "./components/Summary";
import Finish from "./components/Finish";
import { useMediaQuery } from "react-responsive";
import sidebarMobile from "./assets/images/bg-sidebar-mobile.svg";
import sidebarDesktop from "./assets/images/bg-sidebar-desktop.svg";
import noEntry from "./assets/images/icons8-no-entry-16.png";
import { validationSchemaStep1 } from "./utils/validationSchema";
import { validationSchemaStep2 } from "./utils/validationSchema";
import { validationSchemaStep3 } from "./utils/validationSchema";
import { space } from "postcss/lib/list";
import pixel from "../../design/desktop-design-step-2-monthly.jpg";

function App({ ...props }) {
  const [isMonthly, setisMonthly] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [currentStep, setCurrentStep] = useState(1);
  const [errorStepOne, setErrorStepOne] = useState(false);
  const [errorStepTwo, setErrorStepTwo] = useState(false);
  const [errorStepThree, setErrorStepThree] = useState(false);

  const handleNextStep = async (values, setSubmitting) => {
    if (currentStep === 1) {
      try {
        await validationSchemaStep1.validate(values, { abortEarly: false });
        setCurrentStep(currentStep + 1);
        setErrorStepOne(false);
      } catch (errors) {
        setErrorStepOne(true);
      }
    } else if (currentStep === 2) {
      try {
        await validationSchemaStep2.validate(values, { abortEarly: false });
        setCurrentStep(currentStep + 1);
        setErrorStepTwo(false);
      } catch (errors) {
        setErrorStepTwo(true);
      }
    } else if (currentStep === 3) {
      try {
        await validationSchemaStep3.validate(values, { abortEarly: false });
        setCurrentStep(currentStep + 1);
        setErrorStepThree(false);
      } catch (errors) {
        setErrorStepThree(true);
      }
    }
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const initialValues = {
    firstName: "",
    email: "",
    phoneNumber: "",
    plan: "",
    services: {
      "Online Service": false,
      "Larger Storage": false,
      "Customizable Profile": false,
    },
  };

  const validationSchemas = [
    validationSchemaStep1,
    validationSchemaStep2,
    validationSchemaStep3,
    null,
  ];

  const handleSubChange = () => {
    setisMonthly(!isMonthly);
  };

  const handleConfirm = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleNavClick = (index) => {
    currentStep[index];
  };

  const multiStepForm = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemas[currentStep - 1]}
      onSubmit={() => {}}
    >
      {({ handleChange, values, isValid }) => (
        <Form>
          {/* <div className="absolute top-0">
            {" "}
            <img src={pixel} alt="" className="opacity-80" />
          </div> */}
          <div className="flex justify-center md:px-10 md:min-h-screen md:pt-[105px] bg-Alabaster">
            <div className="flex min-h-screen h-full w-full rounded-lg md:w-[940px] md:bg-white md:h-[600px] md:min-h-0 md:p-4 md:items-center md:relative md:mt-0 md:shadow-xl  opacity-70">
              <div className="fixed top-0 md:static h-full">
                {isMobile ? (
                  <div className="w-full h-full ">
                    <div className="flex justify-center gap-4 absolute w-full mt-[33px]">
                      {multiStepForm.map((form, index) => (
                        <div
                          key={index}
                          className={`rounded-full text-white w-8 h-8 flex items-center justify-center border ${
                            currentStep === index + 1
                              ? "bg-Pastel text-black"
                              : ""
                          }`}
                        >
                          <div className="flex">
                            <span>{index + 1}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <img
                      src={sidebarMobile}
                      alt=""
                      className="w-screen h-[172px] object-cover "
                    />
                  </div>
                ) : (
                  <div className="h-full  w-[275px] relative">
                    <img
                      src={sidebarDesktop}
                      alt=""
                      className="h-full w-full object-cover rounded-xl"
                    />
                    <div className="absolute top-5 w-[180px]">
                      <div className="flex flex-col items-left left-8 justify-center gap-7 absolute w-full mt-5">
                        {multiStepForm.map((form, index) => (
                          <div key={index} className="flex items-center">
                            <div className="flex gap-5 ">
                              <span
                                className={`rounded-full text-white w-8 h-8 flex items-center justify-center border ${
                                  currentStep === index + 1
                                    ? "bg-Pastel text-black "
                                    : ""
                                }`}
                              >
                                {index + 1}
                              </span>
                              <div className="flex flex-col text-white">
                                <div className="flex text-sm">
                                  <span>STEP</span>
                                  <span>{index + 1}</span>
                                </div>
                                <span className="text-sm font-bold tracking-widest -mt-1">
                                  {form}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex justify-center h-screen md:h-full md:bg-white w-full">
                <div className="h-full flex flex-col justify-between  z-20 md:h-full ">
                  <div className="mt-[80px] md:h-full md:mt-0 ">
                    {currentStep === 1 && <YourInfo />}
                    {currentStep === 2 && (
                      <SelectPlan
                        handleChange={handleChange}
                        handleSubChange={handleSubChange}
                        isMonthly={isMonthly}
                      />
                    )}
                    {currentStep === 3 && <AddOns />}
                    {currentStep === 4 && (
                      <Summary
                        handleSubChange={handleSubChange}
                        isMonthly={isMonthly}
                      />
                    )}
                    {currentStep === 5 && <Finish />}
                  </div>
                  <div
                    className={`justify-end flex bg-white p-5 md:items-center md:h-[15%] md:px-6 md:rounded-br-lg ${
                      currentStep === 1
                        ? "justify-end"
                        : currentStep > 5
                        ? ""
                        : "justify-between"
                    }`}
                  >
                    {currentStep > 1 && currentStep < 5 && (
                      <button
                        type="button"
                        onClick={handlePreviousStep}
                        className="text-sm font-bold opacity-50 md:text-[16px] md:pl-2.5"
                      >
                        Go Back
                      </button>
                    )}
                    {currentStep < 4 && (
                      <button
                        type="button"
                        onClick={() => handleNextStep(values)}
                        className="bg-Marine h-10 text-sm w-24 tracking-normal -mr-1 rounded-[4.2px] text-Alabaster relative md:w-[124px] md:rounded-lg md:h-[48px] md:text-[16px] md:font-semibold md:mt-1"
                      >
                        Next Step
                      </button>
                    )}
                    {currentStep === 4 && (
                      <button
                        type="button"
                        onClick={handleConfirm}
                        className="bg-Purplish h-10 text-sm w-24  rounded-[4.2px] text-Alabaster md:w-[124px] md:rounded-lg md:h-[46px] md:text-[16px] md:font-semibold"
                      >
                        Confirm
                      </button>
                    )}
                  </div>
                  <div className="text-Strawberry text-sm absolute bottom-6 left-10 md:left-80">
                    {errorStepOne && (
                      <span className="">You have missed a field!</span>
                    )}
                    {errorStepTwo && (
                      <span className="">You have missed a field!</span>
                    )}
                    {errorStepThree && (
                      <span className="">You have missed a field!</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default App;
