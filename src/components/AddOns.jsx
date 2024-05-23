import React, { useState } from "react";
import { Field, useField } from "formik";

export default function AddOns({ ...props }) {
  const [field, meta] = useField(props);
  const services = meta.value.services;
  const servicesNames = Object.keys(services);

  const availableServices = [
    {
      name: "Online Service",
      price: 1,
      subTitle: "Access to multiplayer games",
    },
    { name: "Larger Storage", price: 2, subTitle: "Extra 1TB of cloud save" },
    {
      name: "Customizable Profile",
      price: 2,
      subTitle: "Custom theme on your profile",
    },
  ];

  return (
    <div className="p-5 flex justify-center  min-h-[420px] md:pr-1 md:py-4 max-h-[450px]">
      <div className="flex flex-col gap-3  p-5 shadow-md rounded-lg bg-white md:shadow-none md:w-[490px] md:gap-9 md:mr-1 ">
        <div className="flex flex-col gap-3 md:gap-1">
          <h2 className="text-2xl mt-1 font-bold text-Marine md:tracking-tighter md:text-[35px] ">
            Pick add-ons
          </h2>
          <p className="opacity-50">
            Add-ons help enhance your gaming experience.
          </p>
        </div>
        <div className="flex flex-col pt-2.5 gap-2 md:gap-4  ">
          {availableServices.map((service, index) => (
            <div
              key={index}
              className={`tracking-tighter py-3 pl-3 border rounded-lg md:py-5 md:pl-5 md:tracking-normal ${
                services[service.name]
                  ? " bg-Purplish bg-opacity-10 border-Purplish"
                  : ""
              }`}
            >
              <label className="flex items-center gap-2 md:gap-3 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-7 h-6 border-2 rounded-md ${
                    services[service.name]
                      ? "text-white bg-Purplish border-0"
                      : "text-gray-400"
                  }`}
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M0 0h24v24H0z" stroke="none" />
                  {services[service.name] && <path d="M5 11l3 3l7-7" />}
                </svg>
                <div role="group" aria-labelledby="checkbox-group">
                  <Field
                    className="hidden"
                    type="checkbox"
                    name={`services.${service.name}`}
                    value={servicesNames[service.name]}
                  />
                </div>
                <div className="flex items-center w-full justify-between ">
                  <div className="">
                    <span className="text-Marine  font-semibold">
                      {service.name}
                    </span>
                    <p className="text-xs opacity-50 tracking-wide md:tracking-widest">
                      {service.subTitle}
                    </p>
                  </div>
                  <span className="text-Purplish text-[12px] mt-2 pr-5">
                    {" "}
                    - +${service.price}/mo
                  </span>
                </div>
              </label>
            </div>
          ))}
        </div>
        {meta.touched && meta.error.services ? (
          <div className="text-Strawberry">{meta.error.services}</div>
        ) : null}
      </div>
    </div>
  );
}
