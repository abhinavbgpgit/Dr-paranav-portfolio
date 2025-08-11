import React from 'react';
import { FiDownload } from "react-icons/fi";
export default function Side() {
  return (
     <div className="bg-white shadow-md rounded-lg p-6 mt-16 h-[600px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold">DR. PRANAV KUMAR</h1>
          <p className="text-gray-500">Physiotherapist</p>
        </div>
        <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            <path d="M12 10a2 2 0 100-4 2 2 0 000 4z" />
          </svg>
        </div>
      </div>

      {/* Profile Image */}
      <img
        src="https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*"
        alt="Dr. Robert Gibbons"
        className="w-full h-64 object-cover rounded-t-lg mb-4"
      />

      {/* Details */}
      <ul className="space-y-2">
        <li className="flex items-center">
          <span className="inline-block bg-blue-500 rounded-full w-3 h-3 mr-2"></span>
          <span className="font-semibold">Name:</span> Pranav Kumar
        </li>
        <li className="flex items-center">
          <span className="inline-block bg-blue-500 rounded-full w-3 h-3 mr-2"></span>
          <span className="font-semibold">Birthday:</span> 06 December 1975
        </li>
        <li className="flex items-center">
          <span className="inline-block bg-blue-500 rounded-full w-3 h-3 mr-2"></span>
          <span className="font-semibold">Job:</span> Physiotherapist
        </li>
        <li className="flex items-center">
          <span className="inline-block bg-blue-500 rounded-full w-3 h-3 mr-2"></span>
          <span className="font-semibold">Email:</span> pranav@gmail.com
        </li>
        <li className="flex items-center">
          <span className="inline-block bg-blue-500 rounded-full w-3 h-3 mr-2"></span>
          <span className="font-semibold">Skype:</span> paranav85
        </li>
      </ul>

      {/* Download CV Button */}
      <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-blue-600 transition duration-300">
        <span>Download CV</span>
        <FiDownload size={18} />
      </button>
    </div>
  );
}
