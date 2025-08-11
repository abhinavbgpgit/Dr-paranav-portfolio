import React from 'react';
import { motion } from 'framer-motion';

const Main = () => {
  // Animation variants for smooth transitions
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: 'easeOut' },
  };

  return (
    <div className="bg-white p-6">
      {/* About Me Section */}
      <motion.div
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        className="mb-8"
      >
        <h2 className="text-xl font-bold mb-4 border-b-2 border-blue-500">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          Started earnest brother believe an exposed so. Me he believing daughters if forfeited at furniture. Age again and stuff downs spoke. Late hour new nay able fat each sell. Nor themselves age introduced frequently use unsatiable devonshire get. They why quit gay cold rose deal park. One same they four did ask busy. Reserved opinions fat him nay position. Breakfast as zealously incommode do agreeable furniture. One too nay led fanny allow plate.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat. Her bachelor honoured perceive securing but desirous ham required. Questions deficient acuteness to engrossed as. Entirely led ten humoured greatest and yourself. Besides ye country on observe. She continue appetite endeavor she judgment interest the met. For she surrounded motionless fat resolution may.
        </p>
      </motion.div>

      {/* My Services Section */}
      <motion.div
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
      >
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src="https://via.placeholder.com/60" alt="Medical Training" />
          <h3 className="text-lg font-semibold mt-2">Medical Training</h3>
          <p className="text-gray-600 mt-1">
            Gregor then turned to look out the window at the dull weather.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src="https://via.placeholder.com/60" alt="Cardiology" />
          <h3 className="text-lg font-semibold mt-2">Cardiology</h3>
          <p className="text-gray-600 mt-1">
            A collection of textile samples lay spread out on the table.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src="https://via.placeholder.com/60" alt="Medicine" />
          <h3 className="text-lg font-semibold mt-2">Medicine</h3>
          <p className="text-gray-600 mt-1">
            One morning, when Gregor Samsa woke from troubled dreams.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src="https://via.placeholder.com/60" alt="General Diagnostic" />
          <h3 className="text-lg font-semibold mt-2">General Diagnostic</h3>
          <p className="text-gray-600 mt-1">
            His room, a proper human room although a little too small.
          </p>
        </div>
      </motion.div>

      {/* Medical Skills and Language Skills Sections */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Medical Skills */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-bold mb-4 border-b-2 border-blue-500">Medical Skills</h2>
          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <span>Scientific Skills</span>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500" style={{ width: '60%' }}></div>
              </div>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span>Patient Care Skills</span>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500" style={{ width: '40%' }}></div>
              </div>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span>Communication Skills</span>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500" style={{ width: '30%' }}></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Language Skills */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-bold mb-4 border-b-2 border-blue-500">Language Skills</h2>
          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <span>English</span>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span>French</span>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500" style={{ width: '70%' }}></div>
              </div>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span>Spanish</span>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500" style={{ width: '50%' }}></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Main;