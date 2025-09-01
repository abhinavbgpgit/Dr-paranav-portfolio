import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Side from './components/Side';
import Footer from './components/Footer';
import Main from './pages/main/Main';
import Resume from './pages/resume';
import Awards from './pages/awards';
import Blog from './pages/blog';
import Contact from './pages/contact';
import InNews from './pages/InNews';
import Gallery from './pages/gallery';
import BlogDetail from './pages/blog/BlogDetail';
import More from './pages/more/More';

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-100 min-h-screen w-full">
        {/* Fixed Header */}
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[60%] z-50">
          <Header />
        </div>
        {/* Main Content Layout */}
        <div className="flex flex-row w-[60%] mx-auto pt-[80px] min-h-screen">
          {/* Fixed Sidebar */}
          <div className="sticky top-[80px] h-[calc(100vh-80px)]">
            <Side />
          </div>
          {/* Scrollable Main Content */}
          <div className="flex-1 flex flex-col gap-6 p-6 overflow-y-auto" style={{ maxHeight: "calc(100vh - 80px)" }}>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/awards" element={<Awards />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/in-news" element={<InNews />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/more" element={<More />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
