import React from 'react';
import { motion } from 'framer-motion';

const Resume = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block bg-gradient-to-r from-teal-600 to-blue-600 p-1 rounded-full mb-6">
            <div className="bg-white rounded-full p-1">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-24 h-24" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Dr. Pranav Kumar
          </h1>
          <p className="text-xl md:text-2xl text-teal-700 font-medium mb-2">
            Healing Spines, Restoring Health, Advancing Diagnostics
          </p>
          <p className="text-lg text-gray-600">
            Physical Therapist, Ergonomist, and Spinal Rehabilitation Specialist
          </p>
        </motion.div>

        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* About Section */}
          <motion.section
            className="bg-white rounded-2xl shadow-xl p-8"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold text-teal-800 mb-6 pb-2 border-b-2 border-teal-200">
              About Dr. Pranav Kumar
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p className="mb-4">
                Dr. Pranav Kumar is driven by a single mission: to restore health, mobility and confidence without unnecessary surgery. Trained at MAHE, Manipal and seasoned in advanced orthopaedic and neuro-rehabilitation, Dr. Kumar integrates hands-on expertise with modern technology and compassionate patient care. He is also an educator and public-health advocate through Pro Spine Academy and Sujla Foundation.
              </p>
            </div>
          </motion.section>

          {/* Key Facts */}
          <motion.section
            className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl shadow-xl p-8"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold text-teal-800 mb-6 pb-2 border-b-2 border-teal-200">
              Key Facts
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3 text-teal-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">20+ years of clinical experience in orthopaedics, neurology and spinal rehabilitation</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3 text-teal-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Founder — Pro Spine (2024), Manipal Physiotherapy & Fitness Centre (2004), Manipal Neuro Diagnostic Clinic (2008)</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3 text-teal-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Managing Trustee — Sujla Foundation (2012)</span>
              </li>
            </ul>
          </motion.section>

          {/* Qualifications & Certifications */}
          <motion.section
            className="bg-white rounded-2xl shadow-xl p-8"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold text-teal-800 mb-6 pb-2 border-b-2 border-teal-200">
              Qualifications & Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Academic Qualifications</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Bachelor in Physical Therapy — MAHE, Manipal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Master in Physical Therapy (Orthopaedics)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>MBA (Human Resource)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>MA in Psychology — Pursuing, IGNOU (2024–26)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Professional Certifications</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Certified Health Promotion — NIHFW, Govt. of India</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Certified Manipulation Therapist — MTFI (2004)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Certified Fitness Instructor — IAFT (2015)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Certified Pelvic Floor Rehab Therapist — RSHSR (2024)</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Memberships */}
          <motion.section
            className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl shadow-xl p-8"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold text-teal-800 mb-6 pb-2 border-b-2 border-teal-200">
              Professional Memberships
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10 mr-3" />
                  <span className="font-medium">Indian Association of Physiotherapists (L-16446)</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10 mr-3" />
                  <span className="font-medium">Indian Menopause Society</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10 mr-3" />
                  <span className="font-medium">Spinal Cord Society, New Delhi</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10 mr-3" />
                  <span className="font-medium">Bharat Scout & Guide</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10 mr-3" />
                  <span className="font-medium">Indian Red Cross Society</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10 mr-3" />
                  <span className="font-medium">Academy of General Education (FAGE), Manipal</span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Awards & Achievements */}
          <motion.section
            className="bg-white rounded-2xl shadow-xl p-8"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold text-teal-800 mb-6 pb-2 border-b-2 border-teal-200">
              Prestigious Awards & Achievements
            </h2>
            <div className="space-y-4">
              <div className="flex items-start p-4 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg border border-yellow-200">
                <div className="flex-shrink-0 mt-1 mr-4">
                  <div className="bg-yellow-100 p-2 rounded-full">
                    <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Doctor's Pride Award (2024)</h3>
                  <p className="text-gray-600">Dainik Bhaskar Group</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                <div className="flex-shrink-0 mt-1 mr-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Clinical Eminence Award (2024)</h3>
                  <p className="text-gray-600">Senior Category, BHU</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                <div className="flex-shrink-0 mt-1 mr-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Best Clinician Award (2023)</h3>
                  <p className="text-gray-600">9th INCPT, AIIMS, New Delhi</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                <div className="flex-shrink-0 mt-1 mr-4">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Best Clinician Award (2022)</h3>
                  <p className="text-gray-600">IAP, Bihar Branch</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Ventures Section */}
          <motion.section
            className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl shadow-xl p-8"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold text-teal-800 mb-6 pb-2 border-b-2 border-teal-200">
              My Ventures
            </h2>
            
            <div className="space-y-10">
              {/* Timeline */}
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-teal-300"></div>
                <div className="space-y-8 pl-12">
                  <div className="relative">
                    <div className="absolute -left-12 top-0 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">2004</span>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <h3 className="text-2xl font-bold text-teal-700 mb-2">Manipal Physiotherapy & Fitness Centre</h3>
                      <p className="text-gray-600 mb-3">Since 14 November 2004</p>
                      <p className="text-gray-700">
                        A full-spectrum rehabilitation clinic in Bhagalpur delivering orthopaedic manipulation therapy, ortho & neuro rehabilitation, post-fracture physiotherapy, advanced pediatric clinic (CP & congenital deformities), chest physiotherapy, sports physiotherapy, women's health (obs & gyne), obesity clinic, and diabetes & asthma rehabilitation.
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-12 top-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">2008</span>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <h3 className="text-2xl font-bold text-blue-700 mb-2">Manipal Neuro Diagnostic Clinic</h3>
                      <p className="text-gray-600 mb-3">Since 2008</p>
                      <p className="text-gray-700 mb-4">
                        Dedicated neuro-diagnostic facility providing accurate electro-physiological testing to guide diagnosis and treatment.
                      </p>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">Services include:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                          <li className="flex items-center">
                            <span className="text-blue-500 mr-2">•</span>
                            Digital Video Electroencephalogram (EEG)
                          </li>
                          <li className="flex items-center">
                            <span className="text-blue-500 mr-2">•</span>
                            Nerve Conduction Velocity (NCV)
                          </li>
                          <li className="flex items-center">
                            <span className="text-blue-500 mr-2">•</span>
                            Electromyography (EMG)
                          </li>
                          <li className="flex items-center">
                            <span className="text-blue-500 mr-2">•</span>
                            F-Wave studies
                          </li>
                          <li className="flex items-center">
                            <span className="text-blue-500 mr-2">•</span>
                            H Reflex
                          </li>
                          <li className="flex items-center">
                            <span className="text-blue-500 mr-2">•</span>
                            Blink Reflex
                          </li>
                          <li className="flex items-center">
                            <span className="text-blue-500 mr-2">•</span>
                            Repetitive Nerve Stimulation (RNS)
                          </li>
                          <li className="flex items-center">
                            <span className="text-blue-500 mr-2">•</span>
                            Brainstem Auditory Evoked Potentials (BERA)
                          </li>
                          <li className="flex items-center">
                            <span className="text-blue-500 mr-2">•</span>
                            Visual Evoked Potentials (VEP)
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-12 top-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">2024</span>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <h3 className="text-2xl font-bold text-purple-700 mb-2">Pro Spine</h3>
                      <p className="text-gray-600 mb-3">Since 2024</p>
                      <p className="text-gray-700 mb-4">
                        A specialized non-surgical spinal rehabilitation network focused on Robotic Spinal Decompression and combination therapy supported by advanced manual techniques and modern physiotherapy technology.
                      </p>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-800 mb-2">Timeline:</h4>
                        <div className="flex flex-wrap items-center text-sm">
                          <span className="bg-white px-3 py-1 rounded-full mr-2 mb-2">2004 — Manipal Physiotherapy & Fitness Centre</span>
                          <span className="mx-2 text-gray-400">→</span>
                          <span className="bg-white px-3 py-1 rounded-full mr-2 mb-2">2008 — Manipal Neuro Diagnostic Clinic</span>
                          <span className="mx-2 text-gray-400">→</span>
                          <span className="bg-white px-3 py-1 rounded-full mr-2 mb-2">2024 — Pro Spine</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Services Section */}
          <motion.section
            className="bg-white rounded-2xl shadow-xl p-8"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold text-teal-800 mb-6 pb-2 border-b-2 border-teal-200">
              Detailed Services
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-teal-700 mb-4">At Manipal Physiotherapy & Fitness Centre (Bhagalpur)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2 mt-1">•</span>
                      <span>Orthopaedic Manipulation Therapy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2 mt-1">•</span>
                      <span>Orthopaedic & Neuro Rehabilitation (inpatient & outpatient)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2 mt-1">•</span>
                      <span>Post-fracture Physiotherapy & Prehabilitation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2 mt-1">•</span>
                      <span>Advanced Pediatric Rehabilitation — Cerebral Palsy & Congenital Deformities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2 mt-1">•</span>
                      <span>Chest & Pulmonary Physiotherapy (including ICU care)</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2 mt-1">•</span>
                      <span>Sports Injury Rehabilitation & Performance Optimization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2 mt-1">•</span>
                      <span>Women's Health — Obstetrics & Gynaecology Physiotherapy, Pelvic Floor Care</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2 mt-1">•</span>
                      <span>Obesity Management Clinic</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2 mt-1">•</span>
                      <span>Diabetes & Asthma Rehabilitation Programs</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-blue-700 mb-4">At Manipal Neuro Diagnostic Clinic</h3>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span>Electro-diagnostic testing (EEG, NCV, EMG, F-Wave, H Reflex, Blink Reflex, RNS, BERA, VEP) for accurate neurological assessment and follow-up.</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-purple-700 mb-4">At Pro Spine (Advanced Spinal Care)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Advanced Therapies</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2 mt-1">•</span>
                        <span>Non-Invasive Robotic Spinal Decompression Therapy (for disc bulge/hernia, sciatica, chronic back pain)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2 mt-1">•</span>
                        <span>Shockwave & LASER Therapies</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2 mt-1">•</span>
                        <span>Dual Frequency Ultrasound</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2 mt-1">•</span>
                        <span>Interferential Therapy</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2 mt-1">•</span>
                        <span>Advanced TENS</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2 mt-1">•</span>
                        <span>Short Wave Diathermy with Disc Electrode</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2 mt-1">•</span>
                        <span>Combination Electrotherapy (Ultrasound + Therapeutic Currents)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Manual Therapy & Rehabilitation</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2 mt-1">•</span>
                        <span>Advanced Manual Therapy: Maitland, McKenzie, Mulligan, Cyriax, Myofascial Release, Neurodynamic Techniques, Muscle Energy Techniques, Butter techniques</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2 mt-1">•</span>
                        <span>Gait Training (Harness + Treadmill)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2 mt-1">•</span>
                        <span>Postural Correction</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2 mt-1">•</span>
                        <span>Ergonomic Assessments & Lifestyle Modification Programs</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Seminars & Training */}
          <motion.section
            className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl shadow-xl p-8"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold text-teal-800 mb-6 pb-2 border-b-2 border-teal-200">
              Seminars, Training & Pro Spine Academy
            </h2>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-amber-700 mb-4">"Office Syndrome"</h3>
              <p className="text-gray-700 mb-4">
                Pro Spine is proud to introduce Office Syndrome, an initiative spearheaded by Dr. Pranav Kumar, a first-of-its-kind program in India to address the growing epidemic of workplace-related health issues. This comprehensive approach goes beyond ergonomics to focus on psychological, systemic, and lifestyle conditions affecting spine health and overall well-being.
              </p>
              
              <div className="bg-amber-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-amber-800 mb-2">OfficeDr. Kumar conducts:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2 mt-1">•</span>
                    <span>Corporate wellness workshops</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2 mt-1">•</span>
                    <span>Public health seminars</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2 mt-1">•</span>
                    <span>Hands-on clinical training for physiotherapists</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white border border-amber-200 p-4 rounded-lg">
                <h4 className="font-semibold text-amber-800 mb-2">Popular Programs:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2 mt-1">•</span>
                    <span>Office Syndrome & Workplace Ergonomics (prevention & management)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2 mt-1">•</span>
                    <span>Advanced Manual Therapy Workshops (skills and hands-on practice)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2 mt-1">•</span>
                    <span>Fellowship & Short-Term Clinical Programs for physiotherapists, occupational therapists, speech therapists, special educators and clinical psychologists</span>
                  </li>
                </ul>
                <p className="mt-4 text-gray-700">
                  Invite Dr. Kumar for onsite seminars or book a training program through the contact details below.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Patient Approach */}
          <motion.section
            className="bg-white rounded-2xl shadow-xl p-8"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold text-teal-800 mb-6 pb-2 border-b-2 border-teal-200">
              Patient Approach & Philosophy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start p-4 bg-blue-50 rounded-lg">
                  <div className="flex-shrink-0 mr-3 text-blue-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Individualized assessment and evidence-based care plans</p>
                </div>
                <div className="flex items-start p-4 bg-teal-50 rounded-lg">
                  <div className="flex-shrink-0 mr-3 text-teal-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Combine technology with expert hands-on therapy for best outcomes</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start p-4 bg-purple-50 rounded-lg">
                  <div className="flex-shrink-0 mr-3 text-purple-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Holistic care: physical rehab + functional training + lifestyle & psychology integration</p>
                </div>
                <div className="flex items-start p-4 bg-green-50 rounded-lg">
                  <div className="flex-shrink-0 mr-3 text-green-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Emphasis on education, self-management and prevention</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Contact Section */}
          <motion.section
            className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl shadow-xl p-8"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold text-teal-800 mb-6 pb-2 border-b-2 border-teal-200">
              Contact & Appointments
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-3 text-teal-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-600">+91 9939 121212</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-3 text-teal-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">pranav.bgp@gmail.com</p>
                      <p className="text-gray-600">manipalphysio.bgp@gmail.com</p>
                      <p className="text-gray-600">prospine33@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-3 text-teal-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Websites</p>
                      <p className="text-gray-600">www.prospine.in</p>
                      <p className="text-gray-600">www.manipalphysio.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Clinic Address</h3>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3 text-teal-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Pro Spine / Manipal Physiotherapy & Fitness Centre</p>
                    <p className="text-gray-600">Swami Vivekanand Road, Adampur Chowk,</p>
                    <p className="text-gray-600">Bhagalpur, Bihar 812001</p>
                  </div>
                </div>
                
                <div className="mt-6 bg-white rounded-lg overflow-hidden h-48">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113800.07024531735!2d87.00498755827637!3d25.27964599864194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2993710d3db23%3A0xe0c3d9a1d9b1e3a5!2sBhagalpur%2C%20Bihar!5e0!3m2!1sen!2sin!4v1618402897204!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Clinic Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </motion.section>
        </motion.div>

        {/* Footer */}
        <motion.footer
          className="mt-16 pt-8 border-t border-gray-200 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <a href="#" className="text-gray-600 hover:text-teal-600 transition">Home</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="text-gray-600 hover:text-teal-600 transition">About</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="text-gray-600 hover:text-teal-600 transition">Services</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="text-gray-600 hover:text-teal-600 transition">Pro Spine</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="text-gray-600 hover:text-teal-600 transition">Neuro Diagnostics</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="text-gray-600 hover:text-teal-600 transition">Seminars & Training</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="text-gray-600 hover:text-teal-600 transition">Awards & Media</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="text-gray-600 hover:text-teal-600 transition">Contact</a>
          </div>
          
          <div className="flex justify-center space-x-4 mb-4">
            <a href="#" className="text-gray-500 hover:text-blue-600 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-400 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-pink-600 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
          
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Dr. Pranav Kumar — All rights reserved
          </p>
        </motion.footer>
      </div>
    </div>
  );
};

export default Resume;

