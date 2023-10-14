import React from "react";
import docArt from "../assets/docArt.svg";

const InfoSection = () => {
  return (
    <div className="xl:px-32 lg:px-20 px-12 py-24 bg-gradient-to-r from-[#40bbc44b] to-[white]">
      <div className="grid grid-cols-12">
        <div className="lg:col-span-6 col-span-12 flex justify-center items-center">
          <img className=" lg:w-[550px]" src={docArt} />
        </div>
        <div className="lg:col-span-6 col-span-12 flex justify-center items-center">
          <div>
            <h1 className=" text-[#029967] lg:text-[5rem] text-[45px] lg:leading-[94px] mt-6 leading-[65px] mb-6 font-bold font-[lexend]">
              Get The Best Care From Anywhere!
            </h1>
            <p className="font-[lexend] text-[24px] mb-2">
              WELL Health VirtualClinic+ is focused on modernizing and
              digitizing Healthcare. Our mission is to positively impact health
              outcomes by leveraging technology to empower patients and doctors.
            </p>
            <button className="text-[#029967] mt-8 border-gradient text-[20px] border-[#02996762] bg-gradient-to-l z-20 from-[#0299671a] border-2 rounded-xl bg-[white] font-normal focus:ring-none font-[lexend] px-16 py-4">
            Book Now
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
