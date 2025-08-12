import React from "react";

const InNews = () => {
  const newsItems = [
    {
      image: "01.png",
      title: "Featured in The Times of India",
      description:
        "Dr. Pranav Kumar discusses the importance of physiotherapy in sports recovery.",
      link: "https://example.com/article1",
    },
    {
      image: "02.png",
      title: "Interview on BBC Health Podcast",
      description:
        "Exploring modern techniques in rehabilitation and injury prevention.",
      link: "https://example.com/article2",
    },
    {
      image: "03.png",
      title: "Featured in Medical Today Magazine",
      description:
        "Innovations in physiotherapy treatments and patient care.",
      link: "https://example.com/article3",
    },
  ];

  return (
    <section id="innews" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">In News</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.title}
                className="block"
              >
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 cursor-pointer" />
              </a>
              <div className="p-5 text-left">
                <h3 className="text-lg font-semibold text-blue-600">{item.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InNews;
