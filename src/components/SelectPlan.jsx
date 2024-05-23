import React, { useState } from "react";
import { Field, ErrorMessage, useField } from "formik";
import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";

export default function SelectPlan({
  isMonthly,
  handleSubChange,
  handleChange,
  ...props
}) {
  const [field, meta] = useField(props);
  const subscriptionType = field.value.subscriptionType;
  const planNames = field.value.plan;

  const calculateYearlyPrice = (monthlyPrice) => {
    return monthlyPrice * 10;
  };

  const plans = [
    { name: "Arcade", price: 9, image: arcade },
    { name: "Advanced", price: 12, image: advanced },
    { name: "Pro", price: 15, image: pro },
  ];

  return (
    <div
      className={`px-5 mt-5 flex  justify-center shadow-md rounded-lg min-h-[500px] md:w-full md:min-h-0  md:shadow-none  md:tracking-widest md:mt-3 md:ml-2 ${
        isMonthly ? "h-[565px] md:h-auto" : ""
      }`}
    >
      <div className="flex flex-col w-[300px] rounded-lg md:gap-0 md:w-[460px] md:justify-center ">
        <div className="flex flex-col gap-2 mt-6 mb-6 md:mt-0">
          <h2 className="text-2xl tracking-[0.4px] mt-1 ml-1 font-bold text-Marine md:text-3xl md:pt-6 md:tracking-wider">
            Select your plan
          </h2>
          <p className="opacity-50 font-semibold ml-1 md:pb-8 tracking-[0.08px]">
            You have the option of monthly or yearly biling.
          </p>
        </div>
        <div
          className={`flex flex-col gap-2.5 md:flex-row md:h-full md:gap-[18px] md:-mt-3.5  ${
            isMonthly ? "" : ""
          }`}
        >
          {plans.map((plan) => (
            <button
              key={plan.name}
              className={` border pl-4 pt-4 h-[78px] rounded-lg flex gap-3  md:w-[140px] md:flex-col md:items-start ${
                isMonthly ? "h-[100px] gap-4 md:h-[180px]" : " md:h-[160px]"
              }  ${
                planNames.includes(plan.name)
                  ? "border-2 border-Purplish bg-Purplish bg-opacity-10"
                  : ""
              }`}
              onClick={() => handleChange("plan")(plan.name)}
            >
              <img src={plan.image} alt="" />
              <span className="flex flex-col md:justify-end md:h-full md:mb-5 md:tracking-tight">
                <p className="text-Marine flex font-semibold">{plan.name} </p>
                <p className="flex opacity-50 text-xs  md:tracking-tight">
                  ${!isMonthly ? plan.price : calculateYearlyPrice(plan.price)}/
                  {!isMonthly ? "mo" : "y"}
                </p>
                {isMonthly ? (
                  <span className="text-xs text-Marine mt-1.5">
                    2 month free
                  </span>
                ) : (
                  ""
                )}
              </span>
            </button>
          ))}
        </div>
        {meta.touched && meta.error.plan ? (
          <div className="">{meta.error.plan}</div>
        ) : null}

        <button
          className={`flex gap-7 pt-12 text-[14px] tracking-wider font-semibold  items-center bg-Alabaster justify-center  h-12 rounded-lg md:h-20 md:-mt-1 md:pr-2 md:gap-6 md:pt-0${
            !isMonthly ? "" : ""
          }`}
          onClick={handleSubChange}
        >
          <span
            className={`font-bold ${isMonthly ? "text-Cool" : "text-Marine"}`}
          >
            Montly
          </span>
          <div className="relative inline-block w-9 h-[21px] bg-Marine  rounded-full cursor-pointer">
            <div
              className={`absolute inset-y-1 w-3.5 h-3.5 left-0.5 bg-white rounded-full shadow-md transition-transform duration-300 transform ${
                !isMonthly ? "" : "translate-x-[120%]"
              }`}
            />
          </div>
          <span className={` ${isMonthly ? "text-Marine" : "text-Cool"}`}>
            Yearly
          </span>
        </button>
      </div>
    </div>
  );
}
