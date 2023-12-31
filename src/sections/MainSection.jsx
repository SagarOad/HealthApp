import React from "react";
import Navbar from "../components/Navbar";
import dotsBg from "../assets/dotsBg.png";
import mainVector from "../assets/main-vector.svg";

const MainSection = () => {
  return (
    <div className="main-section bg-gradient-to-b from-[#40BBC4] from-40% to-[white] z-20 relative ">
      <img src={dotsBg} className=" w-[100%] h-[100vh] fixed top-0" />
      <Navbar />
      <div className="xl:px-32 lg:px-20 px-12 pt-12 pb-24 grid my-3 lg:gap-12 gap-6 grid-cols-12">
        <div className="lg:col-span-6 col-span-12 flex justify-center items-center">
          <div>
            <h1 className="text-white font-[prompt] font-medium lg:leading-[74px] lg:text-[58px] md:leading-[54px] leading-[52px] text-[46px]">
              Experience Personalized Virtual Care With Trusted Doctors
            </h1>
            <p className="font-[prompt] my-4 font-medium text-[20px]">
              24/7 Virtual Clinic, Digital Prescriptions, Specialist Booking,
              and Medication Delivered to Your Doorstep
            </p>
            {/* <img src={dotsBg} /> */}
            <button className="text-[#029967] mt-2 border-gradient text-[20px] border-[#02996762] bg-gradient-to-l z-20 from-[#0299671a] border-2 rounded-xl bg-[white] font-normal focus:ring-none font-[lexend] px-16 py-4">
              Read More
            </button>
          </div>
        </div>
        <div className="lg:col-span-6 col-span-12 flex justify-center items-start">
          <img
            className=" xl:w-[680px] lg:w-[500px] w-[300px]"
            src={mainVector}
          />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
