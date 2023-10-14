import React from 'react'
import img1 from "../assets/specialities/span.elementor-icon-list-icon (1).svg";
import img2 from "../assets/specialities/span.elementor-icon-list-icon (2).svg";
import img3 from "../assets/specialities/span.elementor-icon-list-icon (3).svg";
import img4 from "../assets/specialities/span.elementor-icon-list-icon (4).svg";
import img5 from "../assets/specialities/span.elementor-icon-list-icon (5).svg";
import img6 from "../assets/specialities/span.elementor-icon-list-icon (6).svg";
import img7 from "../assets/specialities/span.elementor-icon-list-icon (7).svg";
import img8 from "../assets/specialities/span.elementor-icon-list-icon (8).svg";
import img9 from "../assets/specialities/span.elementor-icon-list-icon (9).svg";
import img10 from "../assets/specialities/span.elementor-icon-list-icon (10).svg";
import img11 from "../assets/specialities/span.elementor-icon-list-icon (11).svg";
import img12 from "../assets/specialities/span.elementor-icon-list-icon.svg";

const Specialities = () => {
  return (
    <div className='xl:px-32 lg:px-20 px-12'>
        <div>
        <div className="text-center mt-12 mb-6 mx-auto lg:w-[600px]">
          <h1 className="font-[lexend] text-[32px] text-[#029967] my-4 font-bold">
            Medical Services of The Specialistes
          </h1>
          <p className="font-[lexend] text-[#6A6A6A] text-[18px]">
            At The Clilab Health Services Clinic we offer the most advanced and
            effective bespoke treatment packages to suit your needs
          </p>
        </div>

        <div className="xl:px-32 pt-12 pb-24 grid grid-cols-12">
          <div className="lg:lg:col-span-2 col-span-6 mb-12">
            <img className="w-[150px] h-[150px] mx-auto" src={img1} />
            <h1 className="font-[lexend] text-[#029967] text-medium mt-4 text-center text-[24px]">
              Physical Therapy
            </h1>
          </div>
          <div className="lg:col-span-2 col-span-6 mb-12">
            <img className="w-[150px] h-[150px] mx-auto" src={img2} />{" "}
            <h1 className="font-[lexend] text-[#029967] text-medium mt-4 text-center text-[24px]">
              Repreductive Health
            </h1>
          </div>
          <div className="lg:col-span-2 col-span-6 mb-12">
            <img className="w-[150px] h-[150px] mx-auto" src={img3} />{" "}
            <h1 className="font-[lexend] text-[#029967] text-medium mt-4 text-center text-[24px]">
              Surgery
            </h1>
          </div>
          <div className="lg:col-span-2 col-span-6 mb-12">
            <img className="w-[150px] h-[150px] mx-auto" src={img4} />{" "}
            <h1 className="font-[lexend] text-[#029967] text-medium mt-4 text-center text-[24px]">
              Urgent Care
            </h1>
          </div>
          <div className="lg:col-span-2 col-span-6 mb-12">
            <img className="w-[150px] h-[150px] mx-auto" src={img12} />{" "}
            <h1 className="font-[lexend] text-[#029967] text-medium mt-4 text-center text-[24px]">
              Pharmacy
            </h1>
          </div>
          <div className="lg:col-span-2 col-span-6 mb-12">
            <img className="w-[150px] h-[150px] mx-auto" src={img11} />{" "}
            <h1 className="font-[lexend] text-[#029967] text-medium mt-4 text-center text-[24px]">
              Mental Health
            </h1>
          </div>
          <div className="lg:col-span-2 col-span-6 mb-12">
            <img className="w-[150px] h-[150px] mx-auto" src={img6} />{" "}
            <h1 className="font-[lexend] text-[#029967] text-medium mt-4 text-center text-[24px]">
              Child Care Assistance
            </h1>
          </div>
          <div className="lg:col-span-2 col-span-6 mb-12">
            <img className="w-[150px] h-[150px] mx-auto" src={img8} />{" "}
            <h1 className="font-[lexend] text-[#029967] text-medium mt-4 text-center text-[24px]">
              Flu / Vaccine Shot
            </h1>
          </div>
          <div className="lg:col-span-2 col-span-6 mb-12">
            <img className="w-[150px] h-[150px] mx-auto" src={img9} />{" "}
            <h1 className="font-[lexend] text-[#029967] text-medium mt-4 text-center text-[24px]">
              Health Checks
            </h1>
          </div>
          <div className="lg:col-span-2 col-span-6 mb-12">
            <img className="w-[150px] h-[150px] mx-auto" src={img10} />{" "}
            <h1 className="font-[lexend] text-[#029967] text-medium mt-4 text-center text-[24px]">
              Hearing and Vision
            </h1>
          </div>
          <div className="lg:col-span-2 col-span-6 mb-12">
            <img className="w-[150px] h-[150px] mx-auto" src={img7} />{" "}
            <h1 className="font-[lexend] text-[#029967] text-medium mt-4 text-center text-[24px]">
              Dental Services
            </h1>
          </div>
          <div className="lg:col-span-2 col-span-6 mb-12">
            <img className="w-[150px] h-[150px] mx-auto" src={img5} />{" "}
            <h1 className="font-[lexend] text-[#029967] text-medium mt-4 text-center text-[24px]">
              View More
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Specialities