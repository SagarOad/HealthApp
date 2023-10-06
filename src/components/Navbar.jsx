import React from "react";

const Navbar = () => {
  return (
    <div className="xl:px-32 py-8 relative">
      <nav className="w-full flex justify-between items-center z-20">
        <div>
            <h1 className=" text-white font-[lexend] text-[34px]">Logo</h1>
        </div>
        <div className=" flex flex-wrap items-center">
          <a className="flex items-center">
            
            
          </a>
          <div className="flex md:order-2 ml-24">
            <button
              type="button"
              className="text-white bg-[#029967] font-thin focus:ring-none font-[lexend] rounded-lg  px-8 py-3 "
            >
              Login / Signup
            </button>
            <button
              type="button"
              className="text-[#2A2A2A] bg-[white] ml-8 font-normal focus:ring-none font-[lexend] rounded-lg  px-8 py-3 "
            >
              Join as Doctor
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 border font-[Lexend] text-white font-normal rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 rounded md:p-0"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 rounded  md:p-0"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 rounded  md:p-0"
                >
                  Labs & Diagnostics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 rounded  md:p-0"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
