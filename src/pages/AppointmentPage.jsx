import React from "react";
import Navbar from "../components/Navbar";
import Specialities from "../sections/Specialities";
import TopRatedDocs from "../sections/TopRatedDocs";


const AppointmentPage = () => {
  return (
    <div className="">
      <div className="main-section pb-24 bg-gradient-to-b bg-[#40BBC4]  z-20 relative">
        <Navbar />
        <div className="xl:px-32 lg:px-20 px-12 my-16">
          <h1 className="text-white font-[prompt] text-center font-medium lg:leading-[74px] lg:text-[58px] md:leading-[54px] leading-[52px] text-[46px]">
            Find And Book The <br /> The Best Doctors Near You
          </h1>
        </div>

        <div className=" grid grid-cols-12 bg-gradient-to-r px-4 w-[70%] mx-auto from-[#ffffffa4] from-20% to-[#ffffff54]">
          <div className="lg:col-span-3 col-span-12 m-2">
            <input
              className="bg-white my-4 p-5 w-[100%] rounded-xl"
              placeholder="Location"
            />
          </div>
          <div className="lg:col-span-9 col-span-12 m-2">
            <input
              className="bg-white my-4 p-5 w-[100%] rounded-xl"
              placeholder="Search for doctors, hospitats, specialist"
            />
          </div>
        </div>
      </div>
     
     <Specialities />
      <TopRatedDocs />

      
    </div>
  );
};

export default AppointmentPage;
