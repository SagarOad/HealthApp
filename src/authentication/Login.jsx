import React from 'react'
import authImg1 from "../assets/authImg1.svg";

const Login = () => {
  return (
    <div className="xl:px-32 py-24">
    <div className="grid grid-cols-12">
      <div className="col-span-6 flex justify-center items-center">
        <img className=" w-[550px]" src={authImg1} />
      </div>
      <div className="col-span-6 flex justify-center items-center">
        <div>
          <h1 className=" text-[#029967] text-[5rem] leading-[94px] mb-6 font-bold font-[lexend]">
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
  )
}

export default Login