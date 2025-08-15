import React from "react";

import { useState } from "react";

const data = [
  {
    title: "Babel Admin",
    desc: "An admin template design.",
    img: "https://html.tavonline.co/mat/doctor/images/works/work-01.jpg",
    category: "All",
  },
  {
    title: "George Motion",
    desc: "An motion graphic design.",
    img: "https://html.tavonline.co/mat/doctor/images/works/work-02.jpg",
    category: "Surgery",
  },
  {
    title: "Amazon Travel",
    desc: "Nature photography work.",
    img: "https://html.tavonline.co/mat/doctor/images/works/work-06.jpg",
    category: "Birth",
  },
  {
    title: "My Workspace",
    desc: "My current workspace design.",
    img: "https://html.tavonline.co/mat/doctor/images/works/work-03.jpg",
    category: "Medicine",
  },
  {
    title: "Recoba Template",
    desc: "Html template design.",
    img: "https://html.tavonline.co/mat/doctor/images/works/work-04.jpg",
    category: "Cardiology",
  },
  {
    title: "Doddy App",
    desc: "Mobile app ui kit design.",
    img: "https://html.tavonline.co/mat/doctor/images/works/work-05.jpg",
    category: "All",
  },
  {
    title: "Bob Stayler",
    desc: "Illustration character design.",
    img: "https://html.tavonline.co/mat/doctor/images/works/work-07.jpg",
    category: "Surgery",
  },
  {
    title: "Excemag Wordpress Theme",
    desc: "Multiconcept Blog Theme.",
    img: "https://html.tavonline.co/mat/doctor/images/works/work-08.jpg",
    category: "Birth",
  },
  {
    title: "Babel Admin Html Code",
    desc: "An admin template design.",
    img: "https://html.tavonline.co/mat/doctor/images/works/work-09.jpg",
    category: "Medicine",
  },
  {
    title: "Illustration",
    desc: "An admin template design",
    img: "https://html.tavonline.co/mat/doctor/images/works/work-07.jpg",
    category: "Cardiology",
  },
  {
    title: "Illustration",
    desc: "An admin template design.",
    img: "https://html.tavonline.co/mat/doctor/images/works/work-08.jpg",
    category: "All",
  },
  {
    title: "Illustration",
    desc: "An admin template design.",
    img: "https://html.tavonline.co/mat/doctor/images/works/work-09.jpg",
    category: "Surgery",
  },
];

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const categories = ["All", "Surgery", "Birth", "Medicine", "Cardiology"];

  // Filter images based on selected category
  const filteredData =
    selectedCategory === "All"
      ? data
      : data.filter((item) => item.category === selectedCategory);
  const displayData = showAll ? filteredData : filteredData.slice(0, 9);

  const openModal = (index) => {
    setModalIndex(index);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);
  const showPrev = () => setModalIndex((i) => (i > 0 ? i - 1 : i));
  const showNext = () => setModalIndex((i) => (i < filteredData.length - 1 ? i + 1 : i));

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-xl font-bold mb-4">Gallery</h2>
      <div className="flex gap-4 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`text-sm text-gray-600 hover:text-blue-500 border-b-2 border-transparent hover:border-blue-500 ${selectedCategory === cat ? "border-blue-500 text-blue-600 font-bold" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
        {displayData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col cursor-pointer relative"
            style={{ width: "180px", height: "190px" }}
            onClick={() => openModal(index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img src={item.img} alt={item.title} className="w-full object-cover" style={{ height: "140px" }} />
            <div className="px-2 py-2 flex-1 flex flex-col justify-end" style={{ minHeight: "40px" }}>
              <h3 className="text-xs font-semibold mb-0.5">{item.title}</h3>
              <p className="text-gray-500 text-[10px] leading-tight">{item.desc}</p>
            </div>
            {hoveredIndex === index && (
              <div
                className="absolute left-1/2 z-30 flex items-center justify-center transition-all duration-300"
                style={{
                  top: '40%',
                  transform: 'translate(-50%, 30px)',
                  width: '45px',
                  height: '45px',
                  borderRadius: '12px',
                  opacity: 0,
                  animation: 'galleryIconUp 0.5s forwards'
                }}
              >
                {/* Gallery icon SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" width="152px" height="152px" viewBox="-24.32 -24.32 112.64 112.64" strokeWidth="3.392" stroke="#ffffff" fill="none">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0">
                    <rect x="-24.32" y="-24.32" width="112.64" height="112.64" rx="56.32" fill="#5a63e2" />
                  </g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#ffffff" strokeWidth="0.128" />
                  <g id="SVGRepo_iconCarrier">
                    <rect x="9.16" y="9.16" width="45.69" height="45.69" rx="2.51" />
                    <polyline points="9.16 41.95 20.68 32.19 29.71 40.38 43.27 23.51 54.77 40.38" />
                    <circle cx="19.76" cy="19.38" r="3.93" />
                  </g>
                </svg>
                <style>{`
                  @keyframes galleryIconUp {
                    0% { opacity: 0; transform: translate(-50%, 30px); }
                    100% { opacity: 1; transform: translate(-50%, -50%); }
                  }
                `}</style>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Pagination Button - outside the grid */}
      {filteredData.length > 9 && (
        <div className="flex justify-center mt-8 mb-4">
          {showAll ? (
            <button
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
              onClick={() => setShowAll(false)}
            >
              Go Back
            </button>
          ) : (
            <button
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
              onClick={() => setShowAll(true)}
            >
              Load More
            </button>
          )}
        </div>
      )}

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button
            onClick={closeModal}
            className="absolute top-6 right-8 px-4 py-2 rounded-md bg-black bg-opacity-40 text-white hover:bg-opacity-70 transition z-50"
          >
            Close
          </button>
          <div className="relative flex items-center justify-center w-full" style={{height: '300px'}}>
            <button
              onClick={showPrev}
              disabled={modalIndex === 0}
              className={`absolute left-8 top-1/2 -translate-y-1/2 px-3 py-2 rounded-full bg-black bg-opacity-40 text-white hover:bg-opacity-70 transition ${modalIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
              style={{zIndex:2, transform: 'translateY(-50%)'}}
              aria-label="Previous image"
            >
              {/* Chevron Left SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <img src={filteredData[modalIndex].img} alt={filteredData[modalIndex].title} className="mx-auto object-contain" style={{maxHeight: '80vh', maxWidth: '90vw'}} />
            <button
              onClick={showNext}
              disabled={modalIndex === filteredData.length - 1}
              className={`absolute right-8 top-1/2 -translate-y-1/2 px-3 py-2 rounded-full bg-black bg-opacity-40 text-white hover:bg-opacity-70 transition ${modalIndex === filteredData.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
              style={{zIndex:2, transform: 'translateY(-50%)'}}
              aria-label="Next image"
            >
              {/* Chevron Right SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;