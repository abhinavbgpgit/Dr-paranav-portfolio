import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Main = () => {
  // Animation variants for smooth transitions
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: 'easeOut' },
  };

  // Zoom-in animation for About Me context
  const zoomIn = {
    initial: { scale: 0.8, opacity: 0, y: 50 },
    animate: { scale: 1, opacity: 1, y: 0 },
    exit: { scale: 0.8, opacity: 0, y: 50 },
    transition: { duration: 1, ease: 'easeOut' },
  };

  // ...existing code...

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-0 md:p-8"
    >
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between bg-white rounded-2xl shadow-lg p-8 mb-10 gap-8 max-w-5xl mx-auto mt-6">
        <div className="flex flex-col items-center md:items-start flex-1">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2 flex flex-col items-center md:items-start">
            <span className="relative inline-block mb-6">
              Dr. Pranav Kumar
              <span className="absolute left-0 right-0 -bottom-3 h-2 bg-blue-500 rounded-full" style={{ zIndex: 1, width: '120%' , left: '-10%', right: '-10%' }}></span>
            </span>
          </h1>
          <span className="text-blue-700 text-lg font-semibold mb-2 text-center md:text-left">Healing Spines, Restoring Health, Advancing Diagnostics</span>
          <span className="text-gray-600 text-base mb-4 text-center md:text-left">Physical Therapist, Ergonomist, and Spinal Rehabilitation Specialist</span>
        </div>
        <div className="flex-1 hidden md:block">
          {/* Decorative SVG or abstract shape for visual depth */}
          <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
            <circle cx="90" cy="90" r="90" fill="#3B82F6" fillOpacity="0.08" />
            <circle cx="90" cy="90" r="60" fill="#3B82F6" fillOpacity="0.12" />
          </svg>
        </div>
      </section>

      {/* About Me Section */}
      <motion.div
        initial={zoomIn.initial}
        animate={zoomIn.animate}
        exit={zoomIn.exit}
        transition={zoomIn.transition}
        className="mb-10 bg-white rounded-2xl shadow p-6 max-w-5xl mx-auto"
      >
        {/* Tagline */}
  {/* ...existing code... */}
        {/* About Section */}
        <h3 className="text-lg font-bold mt-6 mb-2 text-blue-600">About Dr. Pranav Kumar</h3>
        <p className="text-gray-700 leading-relaxed mb-2">
          Dr. Pranav Kumar is driven by a single mission: to restore health, mobility and confidence without unnecessary surgery. Trained at MAHE, Manipal and seasoned in advanced orthopaedic and neuro-rehabilitation, Dr. Kumar integrates hands-on expertise with modern technology and compassionate patient care. He is also an educator and public-health advocate through Pro Spine Academy and Sujla Foundation.
        </p>
        {/* Key Facts */}
        <h3 className="text-lg font-bold mt-6 mb-2 text-blue-600">Key Facts</h3>
        <ul className="list-disc ml-6 text-gray-700 mb-2">
          <li>20+ years of clinical experience in orthopaedics, neurology and spinal rehabilitation</li>
          <li>Founder — Pro Spine (2024), Manipal Physiotherapy & Fitness Centre (2004), Manipal Neuro Diagnostic Clinic (2008)</li>
          <li>Managing Trustee — Sujla Foundation (2012)</li>
        </ul>
        {/* Qualifications & Certifications */}
        <h3 className="text-lg font-bold mt-6 mb-2 text-blue-600">Qualifications & Certifications</h3>
        <ul className="list-disc ml-6 text-gray-700 mb-2">
          <li>Bachelor in Physical Therapy — MAHE, Manipal</li>
          <li>Master in Physical Therapy (Orthopaedics)</li>
          <li>MBA (Human Resource)</li>
          <li>Certified Health Promotion — NIHFW, Govt. of India</li>
          <li>Certified Manipulation Therapist — MTFI (2004)</li>
          <li>Certified Fitness Instructor — IAFT (2015)</li>
          <li>Certified Pelvic Floor Rehab Therapist — RSHSR (2024)</li>
          <li>MA in Psychology — Pursuing, IGNOU (2024–26)</li>
        </ul>
        {/* Memberships */}
        <h3 className="text-lg font-bold mt-6 mb-2 text-blue-600">Memberships</h3>
        <ul className="list-disc ml-6 text-gray-700 mb-2">
          <li>Life Member — Indian Association of Physiotherapists (L-16446)</li>
          <li>Life Member — Indian Menopause Society</li>
          <li>Life Member — Spinal Cord Society, New Delhi</li>
          <li>Life Member — Bharat Scout & Guide</li>
          <li>Life Member — Indian Red Cross Society</li>
          <li>Fellow — Academy of General Education (FAGE), Manipal</li>
        </ul>
        {/* Awards & Achievements */}
        <h3 className="text-lg font-bold mt-6 mb-2 text-blue-600">Prestigious Awards & Achievements</h3>
        <ul className="list-disc ml-6 text-gray-700 mb-2">
          <li>Doctor’s Pride Award (2024) — Dainik Bhaskar Group</li>
          <li>Clinical Eminence Award (2024) — Senior Category, BHU</li>
          <li>Best Clinician Award (2023) — 9th INCPT, AIIMS, New Delhi</li>
          <li>Best Clinician Award (2022) — IAP, Bihar Branch</li>
        </ul>
        {/* Ventures Overview & Timeline */}
        <h3 className="text-lg font-bold mt-6 mb-2 text-blue-600">My Ventures (Overview & Timeline)</h3>
        <div className="mb-2">
          <strong>Manipal Physiotherapy & Fitness Centre — Since 14 November 2004</strong>
          <p className="text-gray-700 leading-relaxed">
            A full-spectrum rehabilitation clinic in Bhagalpur delivering orthopaedic manipulation therapy, ortho & neuro rehabilitation, post-fracture physiotherapy, advanced pediatric clinic (CP & congenital deformities), chest physiotherapy, sports physiotherapy, women’s health (obs & gyne), obesity clinic, and diabetes & asthma rehabilitation.
          </p>
        </div>
        <div className="mb-2">
          <strong>Manipal Neuro Diagnostic Clinic — Since 2008</strong>
          <p className="text-gray-700 leading-relaxed">
            Dedicated neuro-diagnostic facility providing accurate electro-physiological testing to guide diagnosis and treatment.
            <br />Services include:
            <ol className="list-decimal ml-6">
              <li>Digital Video Electroencephalogram (EEG)</li>
              <li>Nerve Conduction Velocity (NCV)</li>
              <li>Electromyography (EMG)</li>
              <li>F-Wave studies</li>
              <li>H Reflex</li>
              <li>Blink Reflex</li>
              <li>Repetitive Nerve Stimulation (RNS)</li>
              <li>Brainstem Auditory Evoked Potentials (BERA)</li>
              <li>Visual Evoked Potentials (VEP)</li>
            </ol>
          </p>
        </div>
        <div className="mb-2">
          <strong>Pro Spine — Since 2024</strong>
          <p className="text-gray-700 leading-relaxed">
            A specialized non-surgical spinal rehabilitation network focused on Robotic Spinal Decompression and combination therapy supported by advanced manual techniques and modern physiotherapy technology.
            <br />Timeline: 2004 — Manipal Physiotherapy & Fitness Centre → 2008 — Manipal Neuro Diagnostic Clinic → 2024 — Pro Spine
          </p>
        </div>
        {/* Services Detailed */}
        <h3 className="text-lg font-bold mt-6 mb-2 text-blue-600">Services (Detailed)</h3>
        <div className="mb-2">
          <strong>At Manipal Physiotherapy & Fitness Centre (Bhagalpur):</strong>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Orthopaedic Manipulation Therapy</li>
            <li>Orthopaedic & Neuro Rehabilitation (inpatient & outpatient)</li>
            <li>Post-fracture Physiotherapy & Prehabilitation</li>
            <li>Advanced Pediatric Rehabilitation — Cerebral Palsy & Congenital Deformities</li>
            <li>Chest & Pulmonary Physiotherapy (including ICU care)</li>
            <li>Sports Injury Rehabilitation & Performance Optimization</li>
            <li>Women’s Health — Obstetrics & Gynaecology Physiotherapy, Pelvic Floor Care</li>
            <li>Obesity Management Clinic; Diabetes & Asthma Rehabilitation Programs</li>
          </ul>
        </div>
        <div className="mb-2">
          <strong>At Manipal Neuro Diagnostic Clinic:</strong>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Electro-diagnostic testing (EEG, NCV, EMG, F-Wave, H Reflex, Blink Reflex, RNS, BERA, VEP) for accurate neurological assessment and follow-up.</li>
          </ul>
        </div>
        <div className="mb-2">
          <strong>At Pro Spine (Advanced Spinal Care):</strong>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Non-Invasive Robotic Spinal Decompression Therapy (for disc bulge/hernia, sciatica, chronic back pain)</li>
            <li>Shockwave & LASER Therapies; Dual Frequency Ultrasound; Interferential Therapy; Advanced TENS; Short Wave Diathermy with Disc Electrode</li>
            <li>Combination Electrotherapy (Ultrasound + Therapeutic Currents)</li>
            <li>Advanced Manual Therapy: Maitland, McKenzie, Mulligan, Cyriax, Myofascial Release, Neurodynamic Techniques, Muscle Energy Techniques, Butter techniques</li>
            <li>Gait Training (Harness + Treadmill), Postural Correction, Ergonomic Assessments & Lifestyle Modification Programs</li>
          </ul>
        </div>
        {/* Seminars, Training & Pro Spine Academy */}
        <h3 className="text-lg font-bold mt-6 mb-2 text-blue-600">Seminars, Training & Pro Spine Academy</h3>
        <p className="text-gray-700 leading-relaxed mb-2">
          <strong>“Office Syndrome”</strong><br />
          Pro Spine is proud to introduce Office Syndrome, an initiative spearheaded by Dr. Pranav Kumar, a first-of-its-kind program in India to address the growing epidemic of workplace-related health issues. This comprehensive approach goes beyond ergonomics to focus on psychological, systemic, and lifestyle conditions affecting spine health and overall well-being.
        </p>
        <p className="text-gray-700 leading-relaxed mb-2">
          OfficeDr. Kumar conducts corporate wellness workshops, public health seminars and hands-on clinical training for physiotherapists. Popular programs:
        </p>
        <ul className="list-disc ml-6 text-gray-700 mb-2">
          <li>Office Syndrome & Workplace Ergonomics (prevention & management)</li>
          <li>Advanced Manual Therapy Workshops (skills and hands-on practice)</li>
          <li>Fellowship & Short-Term Clinical Programs for physiotherapists, occupational therapists, speech therapists, special educators and clinical psychologists</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-2">
          Invite Dr. Kumar for onsite seminars or book a training program through the contact details below.
        </p>
        {/* Patient Approach & Philosophy */}
        <h3 className="text-lg font-bold mt-6 mb-2 text-blue-600">Patient Approach & Philosophy</h3>
        <ul className="list-disc ml-6 text-gray-700 mb-2">
          <li>Individualized assessment and evidence-based care plans</li>
          <li>Combine technology with expert hands-on therapy for best outcomes</li>
          <li>Holistic care: physical rehab + functional training + lifestyle & psychology integration</li>
          <li>Emphasis on education, self-management and prevention</li>
        </ul>
        {/* Contact & Appointments */}
        <h3 className="text-lg font-bold mt-6 mb-2 text-blue-600">Contact & Appointments</h3>
        <p className="text-gray-700 leading-relaxed mb-2">
          <strong>Phone:</strong> +91 9939 121212<br />
          <strong>Email:</strong> pranav.bgp@gmail.com / manipalphysio.bgp@gmail.com / prospine33@gmail.com<br />
          <strong>Website (venture):</strong> <a href="https://www.prospine.in" className="text-blue-600 underline">www.prospine.in</a> / <a href="https://www.manipalphysio.com" className="text-blue-600 underline">www.manipalphysio.com</a>
        </p>
        <p className="text-gray-700 leading-relaxed mb-2">
          <strong>Clinic (Bhagalpur):</strong><br />
          Pro Spine / Manipal Physiotherapy & Fitness Centre<br />
          Swami Vivekanand Road, Adampur Chowk,<br />
          Bhagalpur, Bihar 812001
        </p>
        <p className="text-gray-700 leading-relaxed mb-2">
          For appointment bookings, seminars or collaborations, please call or email.
        </p>
        {/* Footer / Quick Links */}
        <h3 className="text-lg font-bold mt-6 mb-2 text-blue-600">Footer / Quick Links</h3>
        <p className="text-gray-700 leading-relaxed mb-2">
          Home | About | Services | Pro Spine | Neuro Diagnostics | Seminars & Training | Awards & Media | Contact<br />
          Follow & Connect: LinkedIn, Facebook, Instagram<br />
          © Dr. Pranav Kumar — All rights reserved
        </p>
      </motion.div>
  {/* ...existing code... */}

      {/* My Services Section - always visible, no transition or button */}
      <div className="bg-white rounded-2xl shadow p-6 max-w-5xl mx-auto mb-10">
        <div className="relative mb-10 flex items-center" style={{ height: '70px' }}>
          {/* Hand-drawn background effect */}
          <svg className="absolute left-0 top-0" width="220" height="70" viewBox="0 0 220 70" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ zIndex: 0 }}>
            <path d="M10 20 Q60 0 210 20 Q220 60 10 60 Q0 40 10 20 Z" fill="#FAFAFA" stroke="#FAFAFA" strokeWidth="2" />
          </svg>
          <span className="relative z-10 text-2xl font-bold text-gray-800" style={{ fontFamily: 'inherit' }}>
            <span className="relative inline-block">
              My Services
              <span className="absolute left-0 right-0 -bottom-3 h-2 bg-blue-500 rounded-full" style={{ zIndex: 1, width: '120%' , left: '-10%', right: '-10%' }}></span>
            </span>
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Example service cards, update as needed */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <motion.img
              src="https://png.pngtree.com/element_our/20190604/ourlarge/pngtree-medical-device-stethoscope-image_1473691.jpg"
              alt="Medical Training"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.35 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            />
            <h3 className="text-lg font-semibold mt-2">Medical Training</h3>
            <p className="text-gray-600 mt-1 text-center">
              Personalized training and workshops for medical professionals.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <motion.img
              src="https://www.shutterstock.com/image-vector/vector-black-icon-vital-260nw-2382444179.jpg"
              alt="Cardiology"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.35 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            />
            <h3 className="text-lg font-semibold mt-2">Cardiology</h3>
            <p className="text-gray-600 mt-1 text-center">
              Expert cardiac care and rehabilitation services.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <motion.img
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQD35byLT_bv1fXj2F0CFNYIK67_79-yhcIRaPvpFWTA1Sicj2u"
              alt="Medicine"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.35 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            />
            <h3 className="text-lg font-semibold mt-2">Medicine</h3>
            <p className="text-gray-600 mt-1 text-center">
              Comprehensive medical consultations and treatments.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <motion.img
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQDoONCdunOiM6hjnLyfVQ55q7K1BoCgunWtWJGhjtfzC8q4Os_"
              alt="General Diagnostic"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.35 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            />
            <h3 className="text-lg font-semibold mt-2">General Diagnostic</h3>
            <p className="text-gray-600 mt-1 text-center">
              Advanced diagnostic services for accurate results.
            </p>
          </div>
        </div>
      </div>

      {/* Medical Skills Card */}
      <div className="flex flex-col md:flex-row gap-6 justify-center mb-6 max-w-5xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="flex-1 bg-white p-6 rounded-2xl shadow-md min-w-[260px]"
        >
          <h2 className="text-lg font-bold mb-4 border-b-2 border-blue-500 flex items-center gap-2">
            <span role="img" aria-label="skills">🧠</span> Medical Skills
          </h2>
          <div className="mt-4 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-32">Scientific Skills</span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500" style={{ width: '60%' }}></div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-32">Patient Care Skills</span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500" style={{ width: '40%' }}></div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-32">Communication Skills</span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500" style={{ width: '30%' }}></div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="flex-1 bg-white p-6 rounded-2xl shadow-md min-w-[260px]"
        >
          <h2 className="text-lg font-bold mb-4 border-b-2 border-blue-500 flex items-center gap-2">
            <span role="img" aria-label="language">🌐</span> Language Skills
          </h2>
          <div className="mt-4 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-32">English</span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-32">French</span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500" style={{ width: '70%' }}></div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-32">Spanish</span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500" style={{ width: '50%' }}></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
  </motion.div>
  );
};

export default Main;