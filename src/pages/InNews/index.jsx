import React, { useMemo, useState, useEffect, useRef } from "react";
import InNewsData from "../../json/InNews";

const IconPrev = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden>
    <path d="M12.5 4.5L7.5 10l5 5.5" stroke="black" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconNext = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden>
    <path d="M7.5 4.5L12.5 10l-5 5.5" stroke="black" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconClose = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden>
    <path d="M6 6l8 8M14 6l-8 8" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const InNews = () => {
  // Build categories from the data keys and include 'all'
  const categories = useMemo(() => {
    const keys = Object.keys(InNewsData).filter((k) => k !== "all");
    return ["all", ...keys];
  }, []);

  const [selected, setSelected] = useState("all");
  const items = selected === "all" ? InNewsData.all : InNewsData[selected] || [];

  // featured image index
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setFeaturedIndex(0);
  }, [selected]);

  // lock body scroll when open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = '' };
  }, [isOpen]);

  // keyboard navigation when open
  useEffect(() => {
    function onKey(e) {
      if (!isOpen) return;
      if (e.key === 'Escape') setIsOpen(false);
      if (e.key === 'ArrowRight') setFeaturedIndex((p) => Math.min(p + 1, items.length - 1));
      if (e.key === 'ArrowLeft') setFeaturedIndex((p) => Math.max(p - 1, 0));
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, items.length]);

  const featured = items[featuredIndex];

  // swipe handling for modal
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  function onTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }
  function onTouchMove(e) {
    touchEndX.current = e.touches[0].clientX;
  }
  function onTouchEnd() {
    if (touchStartX.current == null || touchEndX.current == null) return;
    const dx = touchStartX.current - touchEndX.current;
    const threshold = 50; // px
    if (dx > threshold) {
      // swipe left => next
      setFeaturedIndex((p) => Math.min(p + 1, items.length - 1));
    } else if (dx < -threshold) {
      // swipe right => prev
      setFeaturedIndex((p) => Math.max(p - 1, 0));
    }
    touchStartX.current = null;
    touchEndX.current = null;
  }

  // shared button style classes for cool look (transparent backgrounds)
  const navBtnBase = "flex items-center justify-center rounded-full text-white shadow-lg transition-transform duration-200 transform hover:scale-110";
  const navBtnDesktop = navBtnBase + " w-12 h-12 bg-transparent hover:bg-black/20";
  const navBtnMobile = navBtnBase + " w-10 h-10 bg-transparent hover:bg-black/20";
  const navBtnModal = navBtnBase + " w-14 h-14 bg-transparent hover:bg-black/30";

  return (
    <section id="innews" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">In News</h2>

        <div className="flex gap-2 flex-wrap mb-6">
          {categories.map((cat) => {
            // previously showed counts in parentheses; removed as requested
            return (
              <button
                key={cat}
                onClick={() => setSelected(cat)}
                className={`px-3 py-1 rounded transition-colors duration-150 border ${
                  selected === cat ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-700"
                }`}
              >
                {cat === "all" ? "All" : cat}
              </button>
            );
          })}
        </div>

        {/* Image-only section: featured image + thumbnails (no titles/descriptions) */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          {items.length === 0 ? (
            <p className="text-gray-500">No images in this category.</p>
          ) : (
            <div className="space-y-4">
              <div className="relative w-full bg-gray-100 rounded overflow-hidden">
                {/* Prev/Next arrows on featured (desktop) - styled with SVG icons */}
                <button
                  onClick={() => setFeaturedIndex((p) => Math.max(p - 1, 0))}
                  className={"hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 z-20 " + navBtnDesktop}
                  aria-label="previous"
                >
                  <IconPrev className="w-5 h-5" />
                </button>

                <button
                  onClick={() => setFeaturedIndex((p) => Math.min(p + 1, items.length - 1))}
                  className={"hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 z-20 " + navBtnDesktop}
                  aria-label="next"
                >
                  <IconNext className="w-5 h-5" />
                </button>

                {featured && featured.image ? (
                  <img
                    src={`/${featured.image}`}
                    alt={featured.title || "featured"}
                    className="w-full h-72 sm:h-96 object-cover cursor-zoom-in"
                    onClick={() => setIsOpen(true)}
                  />
                ) : (
                  <div className="w-full h-72 sm:h-96 flex items-center justify-center text-gray-400">No image</div>
                )}

                {/* small prev/next for mobile bottom */}
                <div className="absolute left-3 bottom-3 sm:hidden flex gap-2">
                  <button
                    onClick={() => setFeaturedIndex((p) => Math.max(p - 1, 0))}
                    className={navBtnMobile}
                    aria-label="previous-mobile"
                  >
                    <IconPrev className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setFeaturedIndex((p) => Math.min(p + 1, items.length - 1))}
                    className={navBtnMobile}
                    aria-label="next-mobile"
                  >
                    <IconNext className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {items.map((it, i) => (
                  <button
                    key={i}
                    onClick={() => setFeaturedIndex(i)}
                    className={`overflow-hidden rounded border p-0 ${i === featuredIndex ? 'ring-2 ring-blue-500' : ''}`}
                    aria-label={`show-image-${i}`}
                  >
                    {it.image ? (
                      <img src={`/${it.image}`} alt={it.title || `thumb-${i}`} className="w-full h-20 object-cover" />
                    ) : (
                      <div className="w-full h-20 bg-gray-100 flex items-center justify-center text-gray-400">No image</div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Fullscreen modal */}
        {isOpen && featured && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className="max-w-full max-h-full relative" onClick={(e) => e.stopPropagation()}>
              <img src={`/${featured.image}`} alt={featured.title || 'fullscreen'} className="max-w-full max-h-[90vh] object-contain" />

              <button
                onClick={() => setFeaturedIndex((p) => Math.max(p - 1, 0))}
                className={"absolute left-4 top-1/2 -translate-y-1/2 z-50 " + navBtnModal}
                aria-label="prev"
              >
                <IconPrev className="w-6 h-6" />
              </button>
              <button
                onClick={() => setFeaturedIndex((p) => Math.min(p + 1, items.length - 1))}
                className={"absolute right-4 top-1/2 -translate-y-1/2 z-50 " + navBtnModal}
                aria-label="next"
              >
                <IconNext className="w-6 h-6" />
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className={"absolute right-4 top-4 z-50 " + navBtnModal}
                aria-label="close"
              >
                <IconClose className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default InNews;