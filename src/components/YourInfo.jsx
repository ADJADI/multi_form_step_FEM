import { useEffect, useState } from "react";
import { Field, Form, useField } from "formik";

const CustomInput = ({
  label,
  name,
  type,
  placeholder,
  error,
  props,
  formik,
  ...rest
}) => {
  const [field, meta] = useField(name);
  return (
    <div className="flex flex-col px-1 mt-3 md:gap-0 md:mt-0 md:px-0">
      <div className="flex justify-between">
        <label
          htmlFor={name}
          className={`text-Marine text-[12px] py-1 font-semibold md:text-[14px] ${
            name === "phoneNumber" ? "-mt-1 md:mt-0" : ""
          }`}
        >
          {console.log(name)}
          {label}
        </label>
        {meta.touched && meta.error ? (
          <div className="text-xs text-Strawberry">{meta.error}</div>
        ) : null}
      </div>
      <Field
        {...rest}
        {...field.values}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className={`border py-2 px-5  translate-x-0 font-semibold rounded-md text-sm md:py-3.5 md:px-2 md:mb-4 ${
          name === "email"
            ? "focus:outline-Purplish "
            : name === "phoneNumber"
            ? "focus:outline-Strawberry mb-2"
            : "focus:outline-none"
        }`}
      />
    </div>
  );
};

export default function YourInfo() {
  return (
    <div className="flex justify-center pt-[18px] px-[13.9px] md:py-5 ml-2 max-h-[440px]">
      <div className="flex flex-col bg-white shadow-md p-5 rounded-lg md:gap-8 md:shadow-none md:p-4 ">
        <div className="flex flex-col gap-[14px] md:gap-3 ">
          <h1 className="text-2xl mt-2  font-bold text-Marine md:text-[34px] md:mt-1 md:tracking-tight">
            Personal Info
          </h1>
          <h2 className="opacity-50 tracking-[0.08px] font-semibold ml-[5px]md:tracking-normal">
            Please provide your name, email address, and phone number.
          </h2>
        </div>

        <div className="">
          <Form>
            <CustomInput
              label="Name"
              name="firstName"
              type="text"
              placeholder="e.g. Stephen King"
            />

            <CustomInput
              label="Email Address"
              name="email"
              type="email"
              placeholder="e.g. Stephenking@lorem.com"
            />
            <CustomInput
              label="Phone Number"
              name="phoneNumber"
              type="tel"
              placeholder="e.g. +1 234 567 890"
            />
          </Form>
        </div>
      </div>
    </div>
  );
}
