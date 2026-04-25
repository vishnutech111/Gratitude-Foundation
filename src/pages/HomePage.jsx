// import React from "react";
// import "./Home.css";
// import { motion } from "framer-motion";
// import AboutPage from "./AboutPage";

// const HomePage = () => {
//   return (
//     <div className="home-container">
      
//       {/* Overlay */}
//       <div className="overlay"></div>

//       {/* Content */}
//       <div className="home-content">
//         <motion.h1
//           initial={{ opacity: 0, y: -60 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           Welcome to EduNursing
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 60 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2 }}
//         >
//           Your Gateway to Top Nursing Colleges in Tamil Nadu & Karnataka
//         </motion.p>

//         <motion.button
//           className="explore-btn"
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Explore Universities
//         </motion.button>
//       </div>
//     </div>
//   );
// };

// export default HomePage;



import React, { useState,useRef, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Counter from "../components/Counter";
// import h1 from "../assets/Dhanalakshmi.png";
// import h2 from "../assets/MGR.png";
// import h3 from "../assets/RGU.png";
import home from "../assets/home3.png";
import home1 from "../assets/home2.png";
import home2 from "../assets/home1.png";
import {
  FaUserGraduate,
  FaUniversity,
  FaMoneyBill,
  FaPassport,
  FaBriefcase,
  FaGlobe,
  FaChartLine
} from "react-icons/fa";
import UniversityCard from "../components/UniversityCard";
import {  AnimatePresence } from "framer-motion";

const images = [
  home,
  home1,
  home2
];

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
 const servicesData = [
    {
      title: "Business Support",
      desc: "Helping struggling businesses grow and sustain.",
      icon: <FaBriefcase />,
      details: ["Startup guidance", "Financial planning", "Mentorship"]
    },
    {
      title: "Education Programs",
      desc: "Empowering students through education.",
      icon: <FaUserGraduate />,
      details: ["Scholarships", "Career guidance", "Skill training"]
    },
    {
      title: "Community Development",
      desc: "Building stronger communities together.",
      icon: <FaGlobe />,
      details: ["Infrastructure support", "Local projects", "Sustainability"]
    }
  ];


  

  const toggleCard = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

const imageRef = useRef();

 // 🎯 MOUSE PARALLAX + TILT
  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      imageRef.current.getBoundingClientRect();

    const x = (e.clientX - left - width / 2) / 20;
    const y = (e.clientY - top - height / 2) / 20;

    imageRef.current.style.transform = `
      rotateY(${x}deg) rotateX(${-y}deg) scale(1.05)
    `;
  };

  const handleMouseLeave = () => {
    imageRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
  };



  const points = [
    {
      icon: <FaUserGraduate />,
      title: "Education Support",
      content: "Scholarships and resources for students."
    },
    {
      icon: <FaBriefcase />,
      title: "Business Growth",
      content: "Helping businesses recover and grow."
    },
    {
      icon: <FaMoneyBill />,
      title: "Financial Support",
      content: "Guidance for financial stability."
    },
    {
      icon: <FaGlobe />,
      title: "Community Impact",
      content: "Improving lives through development programs."
    }
  ];




const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // change every 4 sec

    return () => clearInterval(interval);
  }, []);



  return (
    <div className="home">

      {/* HERO SECTION */}
      {/* <section className="hero">
        <div className="hero-content">
          <h1>Start Your Nursing Career</h1>
          <p>
            Get admission in top nursing universities with expert guidance and
            100% support.
          </p>
          <Link to="/contact" className="btn">Apply Now</Link>
        </div>
      </section> */}

       <section className="carousel">
        {images.map((img, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === current ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}

        <div className="overlay">
          <h1>Gratitude Foundation</h1>
          <p>
              Empowering communities through education, business support,
            and sustainable development.
          </p>
          {/* <button>Explore Services</button> */}
          <Link to="/services">
    <button>Explore Services</button>
  </Link>
        </div>
      </section>



        {/* <section className="about">
  <div className="about-container">

   
    <div className="about-image">
      <div className="image-slider">
        <img src="/images/about1.jpg" alt="about1" />
        <img src="/images/about2.jpg" alt="about2" />
        <img src="/images/about3.jpg" alt="about3" />
      </div>
    </div>

    
    <div className="about-content">
      <h1 className="typing-text">Welcome to EduNursing</h1>

      <p className="fade-text">
        Indian Medical Institute of Nursing has a legacy of teaching, educating
        and nurturing students for more than 30 years in nursing education.
        We pride ourselves on excellence and holistic development, shaping
        students for both academic success and real-world careers.
      </p>

      <p className="fade-text delay">
        Our programs are affiliated and recognized by the Indian Nursing Council (INC),
        New Delhi and Punjab Nurses Registration Council, Mohali, ensuring
        top-quality education and global opportunities.
      </p>

      <Link to="/contact" className="btn primary">Read More</Link>
    </div>

  </div>
</section> */}


 <section className="second">
      <div className="second-container">

        {/* IMAGE SIDE */}
        <motion.div
          className="second-image"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div
            className="image-wrapper"
            ref={imageRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="image-slider">
              <img src={home1} alt="" />
              <img src={home} alt="" />
              <img src={home2} alt="" />
            </div>

            {/* GLASS OVERLAY */}
            {/* <div className="glass-overlay"></div> */}
          </div>
        </motion.div>

        {/* CONTENT SIDE */}
        <motion.div
          className="second-content"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="">Welcome to Gratitude Foundation</h1>

          <p>
            Gratitude Foundation is a non-profit organization committed to
              supporting underserved businesses and advancing education.
          </p>

          <p>
             We create opportunities, empower communities, and help build
              a sustainable future through meaningful initiatives.
          </p>

          <Link to="/about" className="btn primary">
            Read More
          </Link>
        </motion.div>
      </div>
    </section>





      {/* ABOUT SHORT */}
       <section className="premium-about">

      <div className="premium-container">

        {/* IMAGE */}
        <motion.div 
          className="premium-image"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <img src={home} alt="nursing" />
        </motion.div>

        {/* CONTENT */}
        <motion.div 
          className="premium-content"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2>Why Choose Gratitude Foundation?</h2>
          <p>Empowering communities through education, business support,
            and sustainable development.</p>

          {/* ACCORDION */}
          {points.map((item, index) => (
            <div key={index} className={`premium-card ${activeIndex === index ? "active" : ""}`}>

              <div className="premium-title" onClick={() => toggle(index)}>
                <span className="icon">{item.icon}</span>
                <h4>{item.title}</h4>
                <span>{activeIndex === index ? "−" : "+"}</span>
              </div>

              {activeIndex === index && (
                <motion.div 
                  className="premium-body"
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                >
                  <p>{item.content}</p>
                </motion.div>
              )}

            </div>
          ))}

        </motion.div>

      </div>

      {/* STATS */}
      {/* <div className="stats">
        <div><h3>1000+</h3><p>Students</p></div>
        <div><h3>50+</h3><p>Universities</p></div>
        <div><h3>10+</h3><p>Countries</p></div>
        <div><h3>95%</h3><p>Success Rate</p></div>
      </div> */}

    

<div className="ultra-counter-section">
   <Counter target={500} label="Businesses Supported" />
          <Counter target={1000} label="Students Helped" />
          <Counter target={80} label="Projects Completed" />
          <Counter target={100} label="Impact %" />
</div>

    </section>




      {/* UNIVERSITIES */}
{/* <section className="universities">
  <h2>Top Universities</h2>

  <div className="card-container">
    <UniversityCard
      image={h1}
      name="Dhanalakshmi Srinivasan University"
      location="Tamil Nadu, India"
      description="Well-known university offering quality nursing education with modern infrastructure and clinical exposure."
    />

    <UniversityCard
      image={h2}
      name="The Tamil Nadu Dr. M.G.R. Medical University"
      location="Chennai, India"
      description="One of the top medical universities in India providing recognized nursing programs and excellent academic standards."
    />

    <UniversityCard
      image={h3}
      name="Rajiv Gandhi University of Health Sciences"
      location="Karnataka, India"
      description="Premier health sciences university offering advanced nursing courses with strong hospital training support."
    />
  </div>
</section> */}



{/* <section className="universities">
  <h2>Top Universities</h2>

  <div className="card-container">
    <UniversityCard
      image={h1}
      name="Dhanalakshmi Srinivasan University"
      location="Tamil Nadu, India"
      description="Well-known university offering quality nursing education."
      link="/dhanalakshmi-university"
    />

    <UniversityCard
      image={h2}
      name="The Tamil Nadu Dr. M.G.R. Medical University"
      location="Chennai, India"
      description="Top medical university with recognized nursing programs."
      link="/mgr-university"
    />

    <UniversityCard
      image={h3}
      name="Rajiv Gandhi University of Health Sciences"
      location="Karnataka, India"
      description="Premier university with strong hospital training."
      link="/rajiv-gandhi-university"
    />
  </div>
</section> */}

      {/* SERVICES
      <section className="services">
        <h2>Our Services</h2>

        <div className="service-grid">
          <div className="service-box">
            <h3>Admission Guidance</h3>
            <p>Step-by-step support for nursing admissions.</p>
          </div>

          <div className="service-box">
            <h3>Easy Education Loan Assistance</h3>
            <p>Complete visa documentation help.</p>
          </div>

          <div className="service-box">
            <h3>Career Support</h3>
            <p>Job and placement assistance.</p>
          </div>
        </div>
      </section> */}

      <section className="services">
      <h2>Our Services</h2>

    

      <div className="service-grid">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className={`service-box ${activeIndex === index ? "active" : ""}`}
            whileHover={{ scale: 1.05 }}
            onClick={() => toggleCard(index)}
          >
            {/* ICON */}
            <div className="icon">{service.icon}</div>

            {/* TITLE */}
            <h3>{service.title}</h3>
            <p>{service.desc}</p>

            {/* EXPAND AREA */}
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  className="service-details"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <ul>
                    {service.details.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>

      {/* CTA */}
      {/* <section className="cta">
        <h2>Ready to Start Your Journey?</h2>
        <Link to="/contact" className="btn">Contact Us</Link>
      </section> */}

      <section className="cta">
  <motion.div
    className="cta-content"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >

  
    <h2>Ready to Start Your Journey?</h2>

    <p className="cta-subtext">
      Join Gratitude Foundation in transforming lives and building a better future.
    </p>

    <div className="cta-buttons">
      <Link to="/contact" className="btn primary">Contact Us</Link>
      {/* <Link to="/services" className="btn secondary">Explore Services</Link> */}
    </div>
  </motion.div>
</section>

    </div>
  );
};

export default HomePage;



// import React, { useState, useRef, useEffect } from "react";
// import "./Home.css";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import Counter from "../components/Counter";

// import {
//   FaUserGraduate,
//   FaUniversity,
//   FaMoneyBill,
//   FaBriefcase,
//   FaGlobe,
//   FaChartLine
// } from "react-icons/fa";

// import home from "../assets/home.png";
// import home1 from "../assets/home1.png";
// import home2 from "../assets/home2.png";

// const images = [home, home1, home2];

// const HomePage = () => {
//   const [activeIndex, setActiveIndex] = useState(null);
//   const [current, setCurrent] = useState(0);
//   const imageRef = useRef();

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   const toggle = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   // SERVICES DATA
//   const servicesData = [
//     {
//       title: "Business Support",
//       desc: "Helping struggling businesses grow and sustain.",
//       icon: <FaBriefcase />,
//       details: ["Startup guidance", "Financial planning", "Mentorship"]
//     },
//     {
//       title: "Education Programs",
//       desc: "Empowering students through education.",
//       icon: <FaUserGraduate />,
//       details: ["Scholarships", "Career guidance", "Skill training"]
//     },
//     {
//       title: "Community Development",
//       desc: "Building stronger communities together.",
//       icon: <FaGlobe />,
//       details: ["Infrastructure support", "Local projects", "Sustainability"]
//     }
//   ];

//   const points = [
//     {
//       icon: <FaUserGraduate />,
//       title: "Education Support",
//       content: "Scholarships and resources for students."
//     },
//     {
//       icon: <FaBriefcase />,
//       title: "Business Growth",
//       content: "Helping businesses recover and grow."
//     },
//     {
//       icon: <FaMoneyBill />,
//       title: "Financial Support",
//       content: "Guidance for financial stability."
//     },
//     {
//       icon: <FaGlobe />,
//       title: "Community Impact",
//       content: "Improving lives through development programs."
//     }
//   ];

//   return (
//     <div className="home">

//       {/* HERO */}
//       <section className="carousel">
//         {images.map((img, index) => (
//           <div
//             key={index}
//             className={`carousel-slide ${index === current ? "active" : ""}`}
//             style={{ backgroundImage: `url(${img})` }}
//           />
//         ))}

//         <div className="overlay">
//           <h1>Gratitude Foundation</h1>
//           <p>
//             Empowering communities through education, business support,
//             and sustainable development.
//           </p>
//           <Link to="/services">
//             <button>Explore Programs</button>
//           </Link>
//         </div>
//       </section>

//       {/* ABOUT */}
//       <section className="second">
//         <div className="second-container">

//           <motion.div
//             className="second-content"
//             initial={{ opacity: 0, x: 80 }}
//             whileInView={{ opacity: 1, x: 0 }}
//           >
//             <h1>Welcome to Gratitude Foundation</h1>

//             <p>
//               Gratitude Foundation is a non-profit organization committed to
//               supporting underserved businesses and advancing education.
//             </p>

//             <p>
//               We create opportunities, empower communities, and help build
//               a sustainable future through meaningful initiatives.
//             </p>

//             <Link to="/about" className="btn primary">
//               Learn More
//             </Link>
//           </motion.div>
//         </div>
//       </section>

//       {/* WHY US */}
//       <section className="premium-about">
//         <div className="premium-container">

//           <div className="premium-content">
//             <h2>Why Choose Gratitude Foundation?</h2>

//             {points.map((item, index) => (
//               <div
//                 key={index}
//                 className={`premium-card ${
//                   activeIndex === index ? "active" : ""
//                 }`}
//               >
//                 <div className="premium-title" onClick={() => toggle(index)}>
//                   <span className="icon">{item.icon}</span>
//                   <h4>{item.title}</h4>
//                   <span>{activeIndex === index ? "−" : "+"}</span>
//                 </div>

//                 {activeIndex === index && (
//                   <div className="premium-body">
//                     <p>{item.content}</p>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* COUNTER */}
//         <div className="ultra-counter-section">
//           <Counter target={500} label="Businesses Supported" />
//           <Counter target={1000} label="Students Helped" />
//           <Counter target={80} label="Projects Completed" />
//           <Counter target={100} label="Impact %" />
//         </div>
//       </section>

//       {/* SERVICES */}
//       <section className="services">
//         <h2>Our Programs</h2>

//         <div className="service-grid">
//           {servicesData.map((service, index) => (
//             <motion.div
//               key={index}
//               className={`service-box ${
//                 activeIndex === index ? "active" : ""
//               }`}
//               onClick={() => toggle(index)}
//             >
//               <div className="icon">{service.icon}</div>
//               <h3>{service.title}</h3>
//               <p>{service.desc}</p>

//               <AnimatePresence>
//                 {activeIndex === index && (
//                   <motion.div className="service-details">
//                     <ul>
//                       {service.details.map((d, i) => (
//                         <li key={i}>{d}</li>
//                       ))}
//                     </ul>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="cta">
//         <div className="cta-content">
//           <h2>Be a Part of the Change</h2>

//           <p className="cta-subtext">
//             Join Gratitude Foundation in transforming lives and building a better future.
//           </p>

//           <Link to="/contact" className="btn primary">
//             Contact Us
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HomePage;