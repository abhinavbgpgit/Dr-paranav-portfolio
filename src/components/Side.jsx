import React from "react";
import { FiDownload } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";
import profile_pic from "../assets/general/dr_pranav.png";
import logo from "../assets/logo/logo_physio.png";
export default function Side() {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mt-4 h-[600px] relative min-w-[250px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="font-bold">DR. PRANAV KUMAR</h1>
          <p className="text-xs text-gray-500">Physiotherapist</p>
        </div>
        {/* <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            <path d="M12 10a2 2 0 100-4 2 2 0 000 4z" />
          </svg>
        </div> */}
      </div>
      <div className="h-[220px]"></div>
      {/* Profile Image */}
      <div
        className="w-full h-64 mb-4 absolute top-11 left-0 overflow-hidden"
        style={{
          clipPath: "polygon(0 14%, 100% 5%, 100% 93%, 0% 100%)",
          background:
            "radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(138, 227, 242, 1) 49%, rgba(0, 228, 232, 1) 100%)",
        }}
      >
        <img
          src={profile_pic}
          alt="Dr. Robert Gibbons"
          className="w-full h-full object-cover mix-blend-normal"
        />
      </div>

      <img
        src={logo}
        alt="Dr. Robert Gibbons"
        className=" h-12 object-cover mb-4 absolute rounded-full border-2  left-[12px] top-[270px]"
      />

      {/* Details */}
      <ul className=" ml-5">
        <li className=" h-10 border-l-2 "></li>
        <li className=" border-l-2 flex items-center  py-2 relative">
          <span className="absolute top-0 left-[-7px] inline-block bg-blue-500 rounded-full w-3 h-3 mr-2 relative">
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-2 h-2"></span>
          </span>
          <span className="font-semibold text-xs ml-[-5px]">Name : </span>
          <span className=" text-xs ml-1"> Pranav Kumar</span>
        </li>

        <li className=" border-l-2 flex items-center  py-2 relative">
          <span className="absolute top-0 left-[-7px] inline-block bg-blue-500 rounded-full w-3 h-3 mr-2 relative">
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-2 h-2"></span>
          </span>
          <span className="font-semibold text-xs ml-[-5px]">Birthday : </span>
          <span className=" text-xs ml-1"> 06 Dec 1975</span>
        </li>

        <li className=" border-l-2 flex items-center  py-2 relative">
          <span className="absolute top-0 left-[-7px] inline-block bg-blue-500 rounded-full w-3 h-3 mr-2 relative">
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-2 h-2"></span>
          </span>
          <span className="font-semibold text-xs ml-[-5px]">Job : </span>
          <span className=" text-xs ml-1"> Physiotherapist</span>
        </li>

        <li className=" border-l-2 flex items-center  py-2 relative">
          <span className="absolute top-0 left-[-7px] inline-block bg-blue-500 rounded-full w-3 h-3 mr-2 relative">
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-2 h-2"></span>
          </span>
          <span className="font-semibold text-xs ml-[-5px]">Email : </span>
          <span className=" text-xs ml-1"> pranav@gmail.com</span>
        </li>

        <li className=" border-l-2 flex items-center  py-2 relative">
          <span className="absolute top-0 left-[-7px] inline-block bg-blue-500 rounded-full w-3 h-3 mr-2 relative">
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-2 h-2"></span>
          </span>
          <span className="font-semibold text-xs ml-[-5px]">Skype : </span>
          <span className=" text-xs ml-1"> paranav85</span>
        </li>
      </ul>

      {/* Download CV Button */}
      <button className="mt-6 bg-white border-2 text-xs  px-3 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-200 transition duration-300">
        <span>Message on Whatsapp</span>
        <IoLogoWhatsapp size={18} className="text-green-500" />
      </button>
    </div>
  );
}
