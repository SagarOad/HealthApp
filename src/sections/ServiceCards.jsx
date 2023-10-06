import React from "react";
import virtualClinic from "../assets/virtual-clinic.png";
import specialistBooking from "../assets/specialist-booking.png";

const ServiceCards = () => {
  return (
    <div className="xl:px-32 pt-12 py-24 grid gap-12 grid-cols-12">
      <div className="rounded-3xl bg-white shadow-md col-span-6">
        <div className="bg-gradient-to-b m-3 from-[#40bbc462] rounded-[14px] p-12 to-[white] flex flex-col justify-center items-center">
          <img className=" mb-6" src={virtualClinic} />
          <p className=" font-[prompt] text-center text-[20px]">
            24/7 Virtual Clinic, Digital Prescriptions, Specialist Booking, and
            Medication Delivered to{" "}
          </p>
          <button className="text-[#029967] xl:w-[320px] mt-6 text-[20px] border-[#02996762] bg-gradient-to-l z-20 from-[#02996711] bg-[white] border-2 rounded-xl font-normal focus:ring-none font-[lexend] px-16 py-5">
            Join Virtual Clinic
          </button>
        </div>
      </div>

      <div className="rounded-3xl bg-white shadow-md col-span-6">
        <div className="bg-gradient-to-b m-3 from-[#40bbc462] rounded-[14px] p-12 to-[white] flex flex-col justify-center items-center">
          <img className=" mb-6" src={specialistBooking} />
          <p className=" font-[prompt] text-center text-[20px]">
            Seamless Appointments, Your Way. Expert Consultations, Physically or
            Virtually, on Your Preferred Time Slot.{" "}
          </p>
          <button className="text-[#029967] xl:w-[320px] mt-6 text-[20px] border-[#02996762] bg-gradient-to-l z-20 from-[#02996711] border-2 rounded-xl bg-[white] font-normal focus:ring-none font-[lexend] px-16 py-5">
            Join Virtual Clinic
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
