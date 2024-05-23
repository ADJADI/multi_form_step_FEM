import React, { useEffect, useState } from "react";
import { useField } from "formik";

export default function Summary({ isMonthly, handleSubChange, ...props }) {
  const [field, meta, helpers] = useField(props);
  const services = field.value.services;
  const servicesNames = Object.keys(services);
  const servicesValues = Object.values(services);
  const subscriptionType = field.value.subscriptionType;
  console.log(subscriptionType);
  const plan = field.value.plan;
  console.log(plan);

  const availablePlans = [
    { name: "Arcade", price: 9 },
    { name: "Advanced", price: 12 },
    { name: "Pro", price: 15 },
  ];

  const availableServices = [
    {
      name: "Online Service",
      price: 1,
    },
    { name: "Larger Storage", price: 2 },
    {
      name: "Customizable Profile",
      price: 2,
    },
  ];

  const servicePrice = servicesValues.map((value, index) =>
    value === true && servicesNames[index] === availableServices[index].name
      ? availableServices[index].price
      : ""
  );
  const planPrice = availablePlans
    .map((element) => (element.name === plan ? element.price : ""))
    .join("");

  let totalPrice = servicePrice
    .concat(planPrice)
    .reduce((a, b) => Number(a) + Number(b));

  let totalYearPrice = totalPrice * 10;
  console.log(totalYearPrice);

  return (
    <div className="p-4 flex justify-center text-Cool md:pr-1">
      <div className="flex flex-col gap-3 w-full px-5 py-4  shadow-md rounded-lg bg-white md:shadow-none md:w-[500px]">
        <div className="flex flex-col gap-3 pl-1 md:gap-0">
          <h2 className="text-2xl pt-2.5 font-bold text-Marine md:text-[34px] md:tracking-tight">
            Finishing up
          </h2>
          <p className="tracking-wide md:tracking-[0.010em] md:text-[16px] -">
            Double-check everything looks OK before confirming.
          </p>
        </div>

        <div className="px-[10px] py-[25px] flex flex-col  bg-Alabaster rounded-md md:px-5 md:py-4 md:mt-7 md:mr-1.5 md:pr-5 md:gap-8 ">
          <div className="flex items-center text-xs py-0.5 pb-3 px-[10px]  justify-between border-b">
            <div className="flex-">
              <p className="font-semibold text-sm tracking-tight text-Marine">
                {plan} ({!isMonthly ? "monthly" : "yearly"})
              </p>
              <button onClick={handleSubChange} className="underline text-sm">
                Change
              </button>
            </div>
            <span className="font-bold text-Marine text-sm">
              ${!isMonthly ? planPrice : planPrice * 10}/mo
            </span>
          </div>
          <ul className="px-1.5 gap-1 pt-3 flex flex-col">
            {Object.keys(services).map((serviceName, index) => (
              <li key={index} className="flex justify-between">
                {serviceName}
                <div className="flex text-Marine font-semibold">
                  <span>+$</span>
                  {!isMonthly ? (
                    <div className="">{services[serviceName] ? 1 : 0}</div>
                  ) : (
                    <div className="">{services[serviceName] ? 10 : 0}</div>
                  )}
                  {!isMonthly ? "/mo" : "/yr"}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <p className="px-5  flex justify-between ">
          <div className="">
            <span>Total</span>
            <span>
              {!isMonthly ? <span>(per month)</span> : <span>(per year)</span>}
            </span>
          </div>
          <span className="text-Purplish font-bold">
            {!isMonthly ? "+$" + totalPrice : "+$" + totalYearPrice}
            {!isMonthly ? "/mo" : "/yr"}
          </span>
        </p>
      </div>
    </div>
  );
}
