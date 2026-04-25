// import React from "react";
// import "./About.css";
// import { motion } from "framer-motion";

// const AboutPage = () => {
//   return (
//     <div className="about-container">

//       {/* HERO SECTION */}
//       <div className="about-hero">
//         <div className="overlay"></div>
//         <motion.h1
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           About EduNursing
//         </motion.h1>
//       </div>

//       {/* COMPANY SECTION */}
//       <div className="about-section">
//         <motion.div
//           className="about-text"
//           initial={{ opacity: 0, x: -80 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <h2>Who We Are</h2>
//           <p>
//             EduNursing is a trusted nursing domestic admission platform helping
//             students secure seats in top nursing colleges across Tamil Nadu and
//             Karnataka. We guide students through the complete admission process
//             with transparency and expert support.
//           </p>

//           <p>
//             We collaborate with leading universities like MGR University,
//             Rajeev Gandhi University, and Dhanalakshmi Srinivasan University
//             to provide the best opportunities for aspiring nurses.
//           </p>
//         </motion.div>

//         <motion.img
//           src="/assets/image.png"
//           alt="company"
//           className="about-img"
//           initial={{ opacity: 0, x: 80 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//         />
//       </div>

//       {/* ADMISSION SECTION */}
//       <div className="about-section reverse">
//         <motion.img
//           src="/assets/about2.jpg"
//           alt="admission"
//           className="about-img"
//           initial={{ opacity: 0, x: -80 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//         />

//         <motion.div
//           className="about-text"
//           initial={{ opacity: 0, x: 80 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <h2>Nursing Domestic Admission</h2>
//           <p>
//             We specialize in providing admission guidance for:
//           </p>

//           <ul>
//             <li>BSc Nursing</li>
//             <li>GNM (General Nursing & Midwifery)</li>
//             <li>PBBSc Nursing</li>
//             <li>MSc Nursing</li>
//           </ul>

//           <p>
//             Our team ensures a smooth and hassle-free admission process from
//             application to seat confirmation.
//           </p>
//         </motion.div>
//       </div>

//       {/* WHY CHOOSE US */}
//       <div className="features-section">
//         <h2>Why Choose EduNursing?</h2>

//         <div className="features">
//           <div className="card">
//             <h3>Trusted Guidance</h3>
//             <p>Experienced counselors for best career decisions.</p>
//           </div>

//           <div className="card">
//             <h3>Top Universities</h3>
//             <p>Direct admission support in reputed institutions.</p>
//           </div>

//           <div className="card">
//             <h3>100% Support</h3>
//             <p>Complete assistance from start to admission.</p>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default AboutPage;

import React, { useEffect, useState } from "react";
import "./Main.css";
// import { motion } from "framer-motion";
// import vedio from "../assets/EDU INDIAN F OUT 1.mp4"
const slides = [
  {
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
    title: "Gratitude Foundation",
    desc: "Empowering Communities Through Compassion & Action",
  },
  {
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095",
    title: "Supporting Businesses",
    desc: "Reviving and Strengthening Local Enterprises",
  },
  {
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350",
    title: "Advancing Education",
    desc: "Creating Opportunities for Students to Succeed",
  },
];

const MainPage = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-page">

      {/* ===== Vertical Carousel ===== */}
      <div className="vertical-carousel">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`v-slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="v-overlay">
              <h1>{slide.title}</h1>
              <p>{slide.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ===== About Section ===== */}

      {/* <section className="about-section">
        <div className="about-container">

          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1584515933487-779824d29309"
              alt="EduNursing"
            />
          </div>

          <div className="about-content">
            <h2>Who We Are</h2>
            <p>
              EduNursing is a trusted nursing domestic admission platform
              dedicated to helping students secure seats in top nursing
              colleges across Tamil Nadu and Karnataka.
            </p>
            <p>
              We provide complete guidance for BSc Nursing, GNM, PBBSc,
              and MSc Nursing with full support.
            </p>
          </div>

        </div>
      </section> */}

<section className="about-section">
  <div className="about-container">

    {/* LEFT IMAGE */}
    <div className="about-image">
      <img
       src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
        alt="Gratitude Foundation"
      />
    </div>

    {/* RIGHT CONTENT */}
    <div className="about-content glass">
      <h2>Who We Are</h2>
      <p>
              Gratitude Foundation is a non-profit organization dedicated to 
              supporting underserved businesses and advancing education. 
              Built on the principle of giving back, we aim to create meaningful 
              and lasting impact in society.
            </p>
            <p>
              Our initiatives focus on empowering individuals, reviving struggling 
              enterprises, and fostering sustainable community development.
            </p>
    </div>

  </div>
</section>



      {/* ===== Video Section ===== */}
<section className="video-section">
  <div className="video-container">

    <div className="video-text">
       <h2>Explore Gratitude Foundation</h2>
            <p>
              Discover how we are transforming lives by supporting businesses, 
              empowering students, and building stronger communities through 
              sustainable initiatives.
            </p>
    </div>

    <div className="video-box">
      <video
      
        src={""}
        controls
        loop
      />
    </div>

  </div>
</section>

      {/* ===== Mission Vision ===== */}
      {/* <section className="mission-vision">
        <div className="mv-container">

          <div className="mv-box">
            <h3>Our Mission</h3>
            <p>
              Provide transparent and reliable admission guidance for students.
            </p>
          </div>

          <div className="mv-box">
            <h3>Our Vision</h3>
            <p>
              Become India's leading nursing admission platform.
            </p>
          </div>

        </div>
      </section> */}



      <section className="mission-vision">
  <div className="mv-container">

    <div className="mv-box">
       <h3>Our Mission</h3>
            <p>
              To empower communities by supporting small businesses, promoting 
              education, and driving sustainable development initiatives.
            </p>
    </div>

    <div className="mv-box">
       <h3>Our Vision</h3>
            <p>
              A world where everyone has equal opportunities, access to education, 
              and the ability to grow and succeed.
            </p>
    </div>

  </div>
</section>

      {/* ===== Why Us ===== */}
      {/* <section className="why-us">
        <h2>Why Choose EduNursing?</h2>

        <div className="why-grid">
          <div className="why-card">
            <h4>Trusted Guidance</h4>
            <p>Expert counseling for students.</p>
          </div>

          <div className="why-card">
            <h4>Top Colleges</h4>
            <p>Direct admission support.</p>
          </div>

          <div className="why-card">
            <h4>Complete Support</h4>
            <p>End-to-end assistance.</p>
          </div>

          <div className="why-card">
            <h4>Affordable</h4>
            <p>Transparent pricing.</p>
          </div>
        </div>
      </section> */}

   <section className="why-us">
    <h2>Why Choose Gratitude Foundation?</h2>

        <p className="why-subtitle">
          We are committed to creating meaningful impact through compassion, 
          innovation, and community-driven initiatives.
        </p>

    <div className="why-grid">

          <div className="why-item">
            <span className="icon">🤝</span>
            <div>
              <h4>Community Focus</h4>
              <p>
                We work closely with communities to understand their needs and 
                deliver impactful solutions.
              </p>
            </div>
          </div>

          <div className="why-item">
            <span className="icon">📈</span>
            <div>
              <h4>Business Support</h4>
              <p>
                Helping struggling businesses recover, grow, and become sustainable.
              </p>
            </div>
          </div>

          <div className="why-item">
            <span className="icon">🎓</span>
            <div>
              <h4>Education Empowerment</h4>
              <p>
                Providing scholarships, resources, and guidance to students.
              </p>
            </div>
          </div>

          <div className="why-item">
            <span className="icon">🌍</span>
            <div>
              <h4>Sustainable Development</h4>
              <p>
                Promoting long-term growth through eco-friendly and sustainable practices.
              </p>
            </div>
          </div>

          <div className="why-item">
            <span className="icon">🏗</span>
            <div>
              <h4>Infrastructure Support</h4>
              <p>
                Assisting small-scale infrastructure projects to improve local communities.
              </p>
            </div>
          </div>

          <div className="why-item">
            <span className="icon">💡</span>
            <div>
              <h4>Innovative Approach</h4>
              <p>
                Using creative and practical solutions to solve real-world challenges.
              </p>
            </div>
          </div>

          <div className="why-item">
            <span className="icon">📊</span>
            <div>
              <h4>Economic Growth</h4>
              <p>
                Reviving enterprises to contribute to local and national economies.
              </p>
            </div>
          </div>

          <div className="why-item">
            <span className="icon">❤️</span>
            <div>
              <h4>Driven by Gratitude</h4>
              <p>
                Our work is rooted in compassion, giving back, and making a difference.
              </p>
            </div>
          </div>

        </div>
</section>

    </div>
  );
};

export default MainPage;