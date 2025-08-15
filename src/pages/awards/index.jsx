import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const awardsData = [
  {
    title: "Doctor’s Pride Award (2024) — Dainik Bhaskar Group",
    img: "https://www.bing.com/images/blob?bcid=S9v0oErmG80Is13pRTyo.czS328Y.....8c"
  },
  {
    title: "Clinical Eminence Award (2024) — Senior Category, BHU",
    img: "https://www.bing.com/images/blob?bcid=S3RxSdhu8s0Is13pRTyo.czS328Y.....zU"
  },
  {
    title: "Best Clinician Award (2023) — 9th INCPT, AIIMS, New Delhi",
    img: "https://www.bing.com/images/blob?bcid=S2-gYmRKS80Is13pRTyo.czS328Y.....7M"
  },
  {
    title: "Best Clinician Award (2022) — IAP, Bihar Branch",
    img: "https://www.bing.com/images/blob?bcid=S.OO4zgjkc0Is13pRTyo.czS328Y.....xk"
  },
  {
    title: "Excellence in Spinal Care (2021) — National Physio Summit",
    img: "https://www.bing.com/images/blob?bcid=SzZYLuvelc0Is13pRTyo.czS328Y.....08"
  },
  {
    title: "Innovative Therapy Award (2020) — PhysioTech India",
    img: "https://www.bing.com/images/blob?bcid=S3KQFnNRUs0Is13pRTyo.czS328Y.....0Q"
  },
  {
    title: "Lifetime Achievement (2019) — Indian Rehab Council",
    img: "https://www.bing.com/images/blob?bcid=S1xpbpDKJM0Is13pRTyo.czS328Y.....3w"
  },
  {
    title: "Outstanding Educator (2018) — Pro Spine Academy",
    img: "https://www.bing.com/images/blob?bcid=S.GPJTu2g80Is13pRTyo.czS328Y......A"
  }
];

function Awards() {
  const [showAll, setShowAll] = useState(false);
  const [modalIdx, setModalIdx] = useState(null);
  const visibleAwards = showAll ? awardsData : awardsData.slice(0, 4);

  const openModal = idx => setModalIdx(idx);
  const closeModal = () => setModalIdx(null);
  const goPrev = () => setModalIdx(modalIdx > 0 ? modalIdx - 1 : awardsData.length - 1);
  const goNext = () => setModalIdx(modalIdx < awardsData.length - 1 ? modalIdx + 1 : 0);

  const modalImg = modalIdx !== null ? awardsData[modalIdx].img : null;
  const modalTitle = modalIdx !== null ? awardsData[modalIdx].title : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-0 md:p-8"
    >
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg p-8 mb-10 gap-4 max-w-4xl mx-auto mt-6">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2 flex flex-col items-center">
          <span className="relative inline-block mb-2">
            Prestigious Awards & Achievements
            <span className="absolute left-0 right-0 -bottom-3 h-2 bg-blue-500 rounded-full" style={{ zIndex: 1, width: '120%' , left: '-10%', right: '-10%' }}></span>
          </span>
        </h1>
        <span className="text-blue-700 text-lg font-semibold mb-2 text-center">Recognizing Excellence in Clinical Practice & Innovation</span>
        <span className="text-gray-600 text-base mb-2 text-center max-w-2xl">A showcase of national and international honors for outstanding contributions to physiotherapy, spinal care, and medical education.</span>
      </section>

      {/* Awards Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
      >
        <AnimatePresence>
          {visibleAwards.map((award, idx) => (
            <motion.div
              key={idx}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center transition-transform hover:scale-105 cursor-pointer w-full max-w-xs mx-auto border border-blue-100"
              onClick={() => openModal(idx)}
            >
              <div className="w-full aspect-square overflow-hidden flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
                <img src={award.img} alt={award.title} className="w-full h-full object-cover" />
              </div>
              {/* Content below the image removed as requested */}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      <div className="flex justify-center mt-8">
        {!showAll ? (
          <button
            className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors duration-300 font-semibold"
            onClick={() => setShowAll(true)}
          >
            Show All
          </button>
        ) : (
          <button
            className="px-6 py-2 bg-gray-400 text-white rounded-lg shadow hover:bg-gray-500 transition-colors duration-300 font-semibold"
            onClick={() => setShowAll(false)}
          >
            Hide
          </button>
        )}
      </div>

      {/* Modal for larger image */}
      <AnimatePresence>
        {modalImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-2xl p-6 max-w-2xl w-full flex flex-col items-center relative"
              onClick={e => e.stopPropagation()}
            >
              <img src={modalImg} alt={modalTitle} className="w-full h-auto max-h-[70vh] object-contain rounded-lg" />
            </motion.div>
            {/* Left Arrow at screen edge */}
            <button
              className="fixed left-4 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-blue-700 rounded-full p-3 shadow z-50"
              onClick={e => { e.stopPropagation(); goPrev(); }}
              aria-label="Previous"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            {/* Right Arrow at screen edge */}
            <button
              className="fixed right-4 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-blue-700 rounded-full p-3 shadow z-50"
              onClick={e => { e.stopPropagation(); goNext(); }}
              aria-label="Next"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
  </motion.div>
  );
}

export default Awards;