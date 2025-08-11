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

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <div className="w-[60%] mx-auto flex flex-1">
          <Side />
          <div className="flex gap-6 p-6 flex-col flex-1">
            <Header />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/awards" element={<Awards />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/in-news" element={<InNews />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
             <Footer />
          </div>
        </div>
       
      </div>
    </BrowserRouter>
  );
}
