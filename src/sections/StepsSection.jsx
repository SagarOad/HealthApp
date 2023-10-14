import React from "react";

const StepsSection = () => {
  return (
    <div className="xl:px-32 lg:px-20 px-12 py-16 bg-gradient-to-r from-[#40bbc44b] to-[white]">
      <div className="text-center">
        <h1 className="font-[lexend] text-[20px] text-[#2A2A2A] font-medium">
          How it Works
        </h1>
        <h1 className="font-[lexend] text-[32px] text-[#029967] my-4 font-bold">
          Skip The Wait, See A Doctor Now!
        </h1>
        <h1 className="font-[lexend] text-[22px] text-[#2A2A2A] font-medium">
          Follow These Simple Steps
        </h1>
      </div>

      <div className="grid grid-cols-12 mt-7">
        <div className="lg:col-span-4 col-span-12 m-3">
          <div className="text-center bg-[#ffffff71] border-4 border-[#0000001a] rounded-3xl lg:p-20 p-12 lg:h-[auto] flex flex-col justify-center items-center">
            <h1 className=" text-[#029967] lg:lg:text-[5rem] text-[45px] font-bold font-[lexend]">
              01
            </h1>
            <h1 className="font-[lexend] text-[24px] mb-3">Choose You Plan</h1>
            <p className="font-[lexend] text-[#6A6A6A] text-[18px]">
              Subscribe to our 24/7 Virtual Clinic for seamless access
            </p>
          </div>
        </div>

        <div className="lg:col-span-4 col-span-12 m-3">
          <div className="text-center bg-[#ffffff71] border-4 border-[#0000001a] rounded-3xl lg-p-16 p-12 lg:h-[auto] flex flex-col justify-center items-center">
            <h1 className=" text-[#029967] lg:text-[5rem] text-[45px] font-bold font-[lexend]">
              02
            </h1>
            <h1 className="font-[lexend] text-[24px] mb-3">Connect</h1>
            <p className="font-[lexend] text-[#6A6A6A] text-[18px]">
              Communicate with the doctor through phone, video, or secure
              messaging on any device. No app download required. The choice is
              yours.
            </p>
          </div>
        </div>

        <div className="lg:col-span-4 col-span-12 m-3">
          <div className="text-center bg-[#ffffff71] border-4 border-[#0000001a] rounded-3xl lg-p-16 p-12 lg:h-[auto] flex flex-col justify-center items-center">
            <h1 className=" text-[#029967] lg:text-[5rem] text-[45px] font-bold font-[lexend]">
              03
            </h1>
            <h1 className="font-[lexend] text-[24px] mb-3">Finish Up</h1>
            <p className="font-[lexend] text-[#6A6A6A] text-[18px]">
              Access referrals, requisitions, prescriptions, and any other
              necessary documents online. Experience the ease of prescription
              delivery right to your doorstep.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsSection;
