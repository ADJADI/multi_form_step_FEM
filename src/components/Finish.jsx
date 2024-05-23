import React from "react";
import logo from "../assets/images/icon-thank-you.svg";

export default function Finish() {
  return (
    <div className="flex flex-col w-[90%] mt-5 mx-auto rounded-lg bg-white h-[380px] shadow-xl pt-20 text-center text-Cool gap-4 min-h-full md:h-full md:shadow-none md:justify-center md:mt-2 md:gap-7 md:mr-6 md:px-14">
      <img
        src={logo}
        alt="thank_you_logo"
        className="h-14 md:h-[82px] md:-mt-4"
      />
      <h1 className="text-Marine font-bold text-2xl md:text-4xl md:tracking-tighter">
        Thank you!
      </h1>
      <p className="px-4 -mt-1 tracking-[0.3px] md:px-0">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}
