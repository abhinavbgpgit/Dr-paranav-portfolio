import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import menuItems from './json/menuItems.json';

// Import all possible page components
import Profile from "./pages/Profile";
import Qualifications from "./pages/Qualifications";
import FamilyTree from "./pages/FamilyTree";
import Mentors from "./pages/Mentors";

import ManipalPhysio from "./pages/ManipalPhysio";
import ManipalSportsInjury from "./pages/ManipalSportsInjury";
import ManipalPainSpine from "./pages/ManipalPainSpine";
import ManipalNeuroDiagnostic from "./pages/ManipalNeuroDiagnostic";
import FitnessZone from "./pages/FitnessZone";
import HitekPhysiotherapy from "./pages/HitekPhysiotherapy";
import ProSpine from "./pages/ProSpine";
import SujlaFoundation from "./pages/SujlaFoundation";

import Awardss from "./pages/Awardss";
import MediaCoverage from "./pages/MediaCoverage";
import Memberships from "./pages/Memberships";

import Expertise from "./pages/Expertise";
import Workshops from "./pages/Workshops";
import Articles from "./pages/Articles";
import Motivator from "./pages/Motivator";

import PhotoGallery from "./pages/PhotoGallery";
import VideoGallery from "./pages/VideoGallery";
import Testimonials from "./pages/Testimonials";
import Contacts from "./pages/Contacts";


// Map string names in JSON → real React components
const componentMap = {
Profile,
  Qualifications,
  FamilyTree,
  Mentors,
  ManipalPhysio,
  ManipalSportsInjury,
  ManipalPainSpine,
  ManipalNeuroDiagnostic,
  FitnessZone,
  HitekPhysiotherapy,
  ProSpine,
  SujlaFoundation,
  Awards,
  MediaCoverage,
  Memberships,
  Expertise,
  Workshops,
  Articles,
  Motivator,
  PhotoGallery,
  VideoGallery,
  Testimonials,
  Contact,
};

export default function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen w-full">
        {/* Fixed Header */}
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[60%] z-50">
          <Header />
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-row w-[60%] mx-auto pt-[130px] min-h-screen">
          {/* Fixed Sidebar */}
          <div className="sticky top-[80px] h-[calc(100vh-80px)]">
            <Side />
          </div>

          {/* Scrollable Main Content */}
          <div
            className="flex-1 flex flex-col gap-6 p-6 overflow-y-auto"
            style={{ maxHeight: "calc(100vh - 80px)" }}
          >
            <Routes>
              {/* ✅ Dynamic routes from JSON */}
              {menuItems.map((menu) => {
                if (menu.children) {
                  return menu.children.map((item) => {
                    const PageComponent = componentMap[item.component];
                    if (!PageComponent) return null; // safeguard
                    return (
                      <Route
                        key={item.path}
                        path={item.path}
                        element={<PageComponent />}
                      />
                    );
                  });
                }

                // Top-level route without children (like Home, etc.)
                if (menu.component) {
                  const PageComponent = componentMap[menu.component];
                  if (!PageComponent) return null;
                  return (
                    <Route
                      key={menu.path}
                      path={menu.path}
                      element={<PageComponent />}
                    />
                  );
                }

                return null;
              })}

              {/* ✅ Static routes */}
              <Route path="/" element={<Main />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/awards" element={<Awards />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/in-news" element={<InNews />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/more" element={<More />} />

              {/* You already mapped JSON above, but keeping explicit fallback */}
              <Route path="/family-tree" element={<FamilyTree />} />
              <Route path="/mentors" element={<Mentors />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/qualifications" element={<Qualifications />} />

              <Route path="/manipal-pain-spine" element={<ManipalPainSpine />} />
              <Route path="/manipal-physio" element={<ManipalPhysio />} />
              <Route path="/manipal-sports-injury" element={<ManipalSportsInjury />} />
              <Route path="/manipal-neuro-diagnostic" element={<ManipalNeuroDiagnostic />} />
              <Route path="/fitness-zone" element={<FitnessZone />} />
              <Route path="/hitek-physiotherapy" element={<HitekPhysiotherapy />} />
              <Route path="/pro-spine" element={<ProSpine />} />
              <Route path="/sujla-foundation" element={<SujlaFoundation />} />

              <Route path="/awardss" element={<Awardss />} />
              <Route path="/media-coverage" element={<MediaCoverage />} />
              <Route path="/memberships" element={<Memberships />} />

              <Route path="/expertise" element={<Expertise />} />
              <Route path="/workshops" element={<Workshops />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/motivator" element={<Motivator />} />

              <Route path="/photo-gallery" element={<PhotoGallery />} />
              <Route path="/video-gallery" element={<VideoGallery />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contacts" element={<Contacts />} />

            </Routes>


            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}
