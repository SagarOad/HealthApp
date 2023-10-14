import React from "react";
import bed from "../assets/bed.svg";
import family from "../assets/family.svg";
import flexible from "../assets/flexible.svg";
import med from "../assets/med.svg";
import hospital from "../assets/hospital.svg";
import rapidTest from "../assets/rapidTest.svg";

const FeaturesSection = () => {
  return (
    <div className="xl:px-32 lg:px-20 px-12 py-16">
      <div className="text-center mb-12">
        <h1 className="font-[lexend] text-[20px] text-[#2A2A2A] font-medium">
          Features
        </h1>
        <h1 className="font-[lexend] text-[32px] text-[#029967] my-4 font-bold">
          Doctors, Nurses And More... At Your Fingertips
        </h1>
      </div>

      <div className="">
        <div className="lg:flex justify-evenly items-center lg:mb-16 mb-6">
          <div className=" lg:w-[580px] mb-6">
            <div className="lg:flex justify-between items-center">
              <div className="bg-white border-2 flex justify-center items-center h-[110px] w-[110px] border-[#029967]  opacity-80 rounded-full p-4 mr-6">
                <img className=" w-[66px]" src={bed} />
              </div>
              <div className="flex-1">
                <h1 className="font-[lexend] text-[24px] mb-2">
                  Instant Access, No Waiting Room
                </h1>
                <p className="font-[lexend] text-[#6A6A6A] text-[18px]">
                  Get care from the comfort of your own bed.
                </p>
              </div>
            </div>
          </div>

          <div className=" lg:w-[580px]">
            <div className="lg:flex justify-between items-center">
              <div className="bg-white border-2 flex justify-center items-center h-[110px] w-[110px] border-[#029967]  opacity-80 rounded-full p-4 mr-6">
                <img className=" w-[66px]" src={med} />
              </div>
              <div className="flex-1">
                <h1 className="font-[lexend] text-[24px] mb-2">
                  Convenient Prescription Delivery
                </h1>
                <p className="font-[lexend] text-[#6A6A6A] text-[18px]">
                  Medications delivered to your home or office.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:flex justify-evenly items-center lg:mb-16 mb-6">
          <div className=" lg:w-[580px] mb-6">
            <div className="lg:flex justify-between items-center">
              <div className="bg-white border-2 flex justify-center items-center h-[110px] w-[110px] border-[#029967]  opacity-80 rounded-full p-4 mr-6">
                <img className=" w-[66px]" src={flexible} />
              </div>
              <div className="flex-1">
                <h1 className="font-[lexend] text-[24px] mb-2">
                  Flexible, Trusted Care
                </h1>
                <p className="font-[lexend] text-[#6A6A6A] text-[18px]">
                  Care that fits your schedule, wherever you are.
                </p>
              </div>
            </div>
          </div>

          <div className=" lg:w-[580px]">
            <div className="lg:flex justify-between items-center">
              <div className="bg-white border-2 flex justify-center items-center h-[110px] w-[110px] border-[#029967]  opacity-80 rounded-full p-4 mr-6">
                <img className=" w-[66px]" src={hospital} />
              </div>
              <div className="flex-1">
                <h1 className="font-[lexend] text-[24px] mb-2">
                  In-Person Specialist Booking
                </h1>
                <p className="font-[lexend] text-[#6A6A6A] text-[18px]">
                  Connect with specialists on your terms, physically or
                  virtually.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:flex justify-evenly items-center mb-16">
          <div className=" lg:w-[580px] mb-6">
            <div className="lg:flex justify-between items-center">
              <div className="bg-white border-2 flex justify-center items-center h-[110px] w-[110px] border-[#029967]  opacity-80 rounded-full p-4 mr-6">
                <img className=" w-[66px] pl-2 pt-3" src={rapidTest} />
              </div>
              <div className="flex-1">
                <h1 className="font-[lexend] text-[24px] mb-2">
                  Rapid Test Results & Requisitions
                </h1>
                <p className="font-[lexend] text-[#6A6A6A] text-[18px]">
                  Save time with on-demand access to important documents.
                </p>
              </div>
            </div>
          </div>

          <div className=" lg:w-[580px]">
            <div className="lg:flex justify-between items-center">
              <div className="bg-white border-2 flex justify-center items-center h-[110px] w-[110px] border-[#029967]  opacity-80 rounded-full p-4 mr-6">
                <img className=" w-[66px]" src={family} />
              </div>
              <div className="flex-1">
                <h1 className="font-[lexend] text-[24px] mb-2">
                  Discover Your Long-Term Family Doctor
                </h1>
                <p className="font-[lexend] text-[#6A6A6A] text-[18px]">
                  Connect with potential long-term care providers.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <button className="text-[#029967] mt-2 border-gradient text-[20px] border-[#02996762] bg-gradient-to-l z-20 from-[#0299671a] border-2 rounded-xl bg-[white] font-normal focus:ring-none font-[lexend] px-16 py-4">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
