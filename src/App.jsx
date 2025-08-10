import React, { useEffect, useMemo, useState } from 'react';
import ThreeBG from './components/ThreeBG.jsx';

function useTheme() {
  const getInitial = () => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return saved ? saved : (prefersDark ? 'dark' : 'light');
  };
  const [theme, setTheme] = useState(getInitial);

  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;
    const isDark = theme === 'dark';
    body.classList.toggle('dark-mode', isDark);
    body.classList.toggle('light-mode', !isDark);
    html.classList.toggle('dark', isDark);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return { theme, setTheme, toggle: () => setTheme(t => (t === 'dark' ? 'light' : 'dark')) };
}

function App() {
  const { theme, toggle } = useTheme();
  const themeIconClass = useMemo(() => (theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'), [theme]);

  // Scroll animate on viewport
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.scroll-animate');
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animate');
        }
      });
    };
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
    // initial
    animateOnScroll();
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
      window.removeEventListener('load', animateOnScroll);
    };
  }, []);

  // Button hover effect (kept from original)
  useEffect(() => {
    const buttons = document.querySelectorAll('.btn');
    const enter = function() { this.style.transform = 'translateY(-2px)'; };
    const leave = function() { this.style.transform = 'translateY(0)'; };
    buttons.forEach(btn => {
      btn.addEventListener('mouseenter', enter);
      btn.addEventListener('mouseleave', leave);
    });
    return () => {
      buttons.forEach(btn => {
        btn.removeEventListener('mouseenter', enter);
        btn.removeEventListener('mouseleave', leave);
      });
    };
  }, []);

  // Smooth scroll for hash links
  useEffect(() => {
    const handler = (e) => {
      const anchor = e.currentTarget;
      const href = anchor.getAttribute('href') || '';
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(a => a.addEventListener('click', handler));
    return () => anchors.forEach(a => a.removeEventListener('click', handler));
  }, []);

  return (
    <>
      {/* Three.js Background */}
      <ThreeBG />

      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">
          <i className="fas fa-user-md" />
          Dr. Pranav Kumar
        </div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#expertise">Expertise</a>
          <a href="#experience">Experience</a>
          <a href="#awards">Awards</a>
          {/* This will open external gallery for now */}
          <a href="gallery.html">Gallery</a>
        </div>
        <button aria-label="Toggle theme" className="theme-toggle" onClick={toggle}>
          <i className={themeIconClass} />
        </button>
        <button className="btn btn-primary">
          <i className="fas fa-calendar-check" />
          Book Appointment
        </button>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Dr. Pranav Kumar</h1>
          <p>
            Consultant Physical Therapist with 19 years of experience in delivering exemplary service and implementing
            innovative rehabilitation strategies.
          </p>
          <div className="hero-btns">
            <button className="btn btn-primary">
              <i className="fas fa-phone" />
              Contact Me
            </button>
            <button className="btn btn-outline">
              <i className="fas fa-download" />
              Download CV
            </button>
            <a className="btn btn-outline" href="gallery.html">
              <i className="fas fa-images" />
              View Gallery
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="section-title scroll-animate">
          <h2>About Me</h2>
          <p>Learn more about my background and professional journey</p>
        </div>
        <div className="profile-card scroll-animate">
          <div className="profile-image">
            <i className="fas fa-user-md" />
          </div>
          <h3>Dr. Pranav Kumar</h3>
          <p>Consultant Physical Therapist</p>
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-phone" />
              <span>+91 9939121212</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope" />
              <span>pranav.bgp@gmail.com</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt" />
              <span>
                Manipal Physiotherapy & Fitness Center, Swami Vivekanand Road, Adampur Bhagalpur, Bihar, 812001
              </span>
            </div>
            <div className="contact-item">
              <i className="fas fa-globe" />
              <span>https://www.manipalphysio.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="section">
        <div className="section-title scroll-animate">
          <h2>Areas of Expertise</h2>
          <p>Specialized skills and professional capabilities</p>
        </div>
        <div className="expertise-grid">
          <div className="expertise-card scroll-animate">
            <div className="expertise-icon">
              <i className="fas fa-bone" />
            </div>
            <h3>Orthopaedic Rehabilitation</h3>
            <p>Specialized in prehabilitation and rehabilitation for orthopedic conditions and post-surgical recovery.</p>
          </div>
          <div className="expertise-card scroll-animate">
            <div className="expertise-icon">
              <i className="fas fa-hands-helping" />
            </div>
            <h3>Certified Manipulation Therapist</h3>
            <p>Expert in manual therapy techniques for musculoskeletal disorders and joint mobilization.</p>
          </div>
          <div className="expertise-card scroll-animate">
            <div className="expertise-icon">
              <i className="fas fa-dumbbell" />
            </div>
            <h3>Health Fitness Consulting</h3>
            <p>Designing personalized fitness programs for weight loss, women's health, and overall wellness.</p>
          </div>
          <div className="expertise-card scroll-animate">
            <div className="expertise-icon">
              <i className="fas fa-child" />
            </div>
            <h3>Pediatric Physiotherapy</h3>
            <p>Expertise in treating musculoelastic deformities in children and developmental disorders.</p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="section-title scroll-animate">
          <h2>Professional Experience</h2>
          <p>My career journey and professional milestones</p>
        </div>
        <div className="timeline">
          <div className="timeline-item scroll-animate">
            <div className="timeline-content">
              <h3>Manipal Physiotherapy and Fitness Centre</h3>
              <span className="date">Since 2004 | Bhagalpur, Bihar</span>
              <p>
                Self Employed - Leading a multidisciplinary team providing comprehensive physical therapy, spine clinic
                services, and electrodiagnosis.
              </p>
            </div>
          </div>
          <div className="timeline-item scroll-animate">
            <div className="timeline-content">
              <h3>Manipal Neuro Diagnostic Centre</h3>
              <span className="date">Since 2008 | Bhagalpur, Bihar</span>
              <p>
                Self Employed - Specialized in diagnosing and treating neurological conditions with expertise in NCV,
                EMG, BERA, VEP, RNS, and EEGS.
              </p>
            </div>
          </div>
          <div className="timeline-item scroll-animate">
            <div className="timeline-content">
              <h3>Fitness Zone</h3>
              <span className="date">Since 2013 | Bhagalpur, Bihar</span>
              <p>
                Self Employed - Dedicated fitness consultant promoting healthy lifestyles through personalized workout
                plans and nutrition guidance.
              </p>
            </div>
          </div>
          <div className="timeline-item scroll-animate">
            <div className="timeline-content">
              <h3>Hitek Physiotherapy Centre</h3>
              <span className="date">Since 2023 | Naugachia, Bhagalpur</span>
              <p>
                Self Employed - Providing advanced physiotherapy services including therapeutic exercise techniques and
                healing stimulation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section">
        <div className="section-title scroll-animate">
          <h2>Education & Certifications</h2>
          <p>Academic qualifications and professional certifications</p>
        </div>
        <div className="timeline">
          <div className="timeline-item scroll-animate">
            <div className="timeline-content">
              <h3>Bachelor of Science (Chemistry)</h3>
              <span className="date">1999 | Tika Manjhi Bhagalpur University</span>
            </div>
          </div>
          <div className="timeline-item scroll-animate">
            <div className="timeline-content">
              <h3>Bachelor in Physiotherapy</h3>
              <span className="date">1999-2004 | MAHE, Manipal, Karnataka</span>
            </div>
          </div>
          <div className="timeline-item scroll-animate">
            <div className="timeline-content">
              <h3>Certified Manual Therapist</h3>
              <span className="date">2004 | MTFI, Manglore</span>
            </div>
          </div>
          <div className="timeline-item scroll-animate">
            <div className="timeline-content">
              <h3>Master in Physiotherapy: Orthopedics</h3>
              <span className="date">2006-2008 | Chaudhary Charan Singh University, Meerut</span>
            </div>
          </div>
          <div className="timeline-item scroll-animate">
            <div className="timeline-content">
              <h3>Masters in Business Administration (HR)</h3>
              <span className="date">2009-2011</span>
            </div>
          </div>
          <div className="timeline-item scroll-animate">
            <div className="timeline-content">
              <h3>Certificate in Health Promotion</h3>
              <span className="date">2012 | NIHFW, New Delhi</span>
            </div>
          </div>
          <div className="timeline-item scroll-animate">
            <div className="timeline-content">
              <h3>Certified Health Fitness Consultant</h3>
              <span className="date">2013 | IAFT, Manglore</span>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="section">
        <div className="section-title scroll-animate">
          <h2>Awards & Recognition</h2>
          <p>Honors and achievements in my professional career</p>
        </div>
        <div className="awards-grid">
          <div className="award-card scroll-animate">
            <div className="award-icon">
              <i className="fas fa-award" />
            </div>
            <h3>Certificate of Excellence</h3>
            <p>National Doctor's Day Award 2023 for outstanding contribution to healthcare.</p>
          </div>
          <div className="award-card scroll-animate">
            <div className="award-icon">
              <i className="fas fa-trophy" />
            </div>
            <h3>World Physiotherapy Day Excellence</h3>
            <p>Recognized for exceptional service in the field of physiotherapy in 2022.</p>
          </div>
          <div className="award-card scroll-animate">
            <div className="award-icon">
              <i className="fas fa-medal" />
            </div>
            <h3>SAMMAN 2018</h3>
            <p>Awarded for outstanding contribution to the health sector in Bhagalpur.</p>
          </div>
        </div>
      </section>

      {/* Memberships Section */}
      <section className="section">
        <div className="section-title scroll-animate">
          <h2>Professional Memberships</h2>
          <p>Associations and organizations I'm affiliated with</p>
        </div>
        <div className="membership-grid">
          <div className="membership-card scroll-animate">
            <h4>Life Member</h4>
            <p>Indian Association of Physiotherapists (L-16446)</p>
          </div>
          <div className="membership-card scroll-animate">
            <h4>Life Member</h4>
            <p>Indian Menopause Society</p>
          </div>
          <div className="membership-card scroll-animate">
            <h4>Life Member</h4>
            <p>Spinal Cord Society, New Delhi</p>
          </div>
          <div className="membership-card scroll-animate">
            <h4>Life Member</h4>
            <p>Bharat Scout & Guide</p>
          </div>
          <div className="membership-card scroll-animate">
            <h4>Life Member</h4>
            <p>Indian Red Cross Society</p>
          </div>
          <div className="membership-card scroll-animate">
            <h4>Fellow</h4>
            <p>Academy of General Education (FAGE), Manipal</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta scroll-animate">
        <div className="cta-content">
          <h2>Ready to Improve Your Health?</h2>
          <p>
            Schedule a consultation with Dr. Pranav Kumar today and take the first step towards better health and
            wellness.
          </p>
          <button className="btn btn-primary">
            <i className="fas fa-calendar-plus" />
            Book Your Appointment
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Dr. Pranav Kumar</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Dedicated to improving lives through expert physiotherapy and fitness consultation services.
            </p>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f" /></a>
              <a href="#"><i className="fab fa-twitter" /></a>
              <a href="#"><i className="fab fa-linkedin-in" /></a>
              <a href="#"><i className="fab fa-instagram" /></a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Clinics</h3>
            <ul>
              <li><a href="#">Manipal Physiotherapy & Fitness Centre</a></li>
              <li><a href="#">Manipal Neuro Diagnostic Centre</a></li>
              <li><a href="#">Fitness Zone</a></li>
              <li><a href="#">Hitek Physiotherapy Centre</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li><a href="#">Orthopaedic Rehabilitation</a></li>
              <li><a href="#">Neurological Physiotherapy</a></li>
              <li><a href="#">Sports Injury Treatment</a></li>
              <li><a href="#">Women's Health</a></li>
              <li><a href="#">Pediatric Physiotherapy</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <ul>
              <li><a href="tel:+919939121212">+91 9939121212</a></li>
              <li><a href="mailto:pranav.bgp@gmail.com">pranav.bgp@gmail.com</a></li>
              <li><a href="gallery.html">Photo Gallery</a></li>
              <li><a href="#">Book Appointment</a></li>
              <li><a href="#">Location Map</a></li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2024 Dr. Pranav Kumar. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;