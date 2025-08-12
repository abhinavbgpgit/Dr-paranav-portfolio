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
          I am <strong>Dr. Pranav Kumar</strong>, a highly accomplished <strong>Consultant Physical Therapist and Spine Specialist</strong> with over two decades of clinical expertise in <strong>Orthopaedic Manipulation Therapy</strong> and <strong>Spinal Rehabilitation</strong>. My passion lies in providing <strong>non-surgical, evidence-based solutions</strong> for complex spinal and musculoskeletal conditions, helping patients restore mobility, reduce pain, and reclaim quality of life.
          <br /><br />
          I hold a <strong>Bachelor’s in Physical Therapy (BPT)</strong> from MAHE, Manipal, and a <strong>Master’s in Physical Therapy in Orthopedics</strong>, along with an <strong>MBA in Human Resource Management</strong>. I am a <strong>Certified Manipulation Therapist</strong> trained in globally recognized techniques such as <strong>Cyriax</strong>, <strong>Maitland</strong>, <strong>McKenzie</strong>, <strong>Mulligan</strong>, <strong>Myofascial Release</strong>, and <strong>Butter techniques</strong>. My qualifications also extend to <strong>Pelvic Floor Rehabilitation</strong> and <strong>Health Promotion</strong>, with professional memberships including <strong>MIAP, FAGE, and MTFI</strong>.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          As the founder of <strong>Pro Spine</strong>, my mission is to integrate <strong>advanced manual therapy</strong> with <strong>cutting-edge technologies</strong> such as <strong>Non-Invasive Robotic Spinal Decompression Therapy</strong> to deliver the highest standard of care. I am also the Managing Trustee of <strong>Sujla Foundation</strong>, actively involved in public health initiatives, ergonomic workshops, and physiotherapy awareness programs.
          <br /><br />
          Beyond clinical work, I am dedicated to education and mentorship through <strong>Pro Spine Academy</strong>, training physiotherapists in advanced clinical skills. My commitment to healthcare excellence has been recognized with multiple awards, including the <strong>Doctor’s Pride Award</strong> by the <strong>Dainik Bhaskar Group</strong>.
          <br /><br />
          Every patient I meet is an opportunity to make a positive change—one spine, one step, one life at a time.
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