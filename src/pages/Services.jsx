


// import React, { useEffect, useState } from "react";
// import "./Services.css";
// // import { motion } from "framer-motion";
// import vedio from "../assets/EDU INDIAN F OUT 1.mp4"
// const slides = [
//   {
//      image: "https://images.unsplash.com/photo-1584515933487-779824d29309",
//      title: "BSc Nursing",
//      desc: "Top colleges with full admission guidance",
//    },
//    {
//      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
//      title: "GNM Nursing",
//      desc: "Affordable diploma nursing programs",
//    },
//    {
//      image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b",
//     title: "MSc Nursing",
//     desc: "Advance your healthcare career",
//   },
//    {
//      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
//      title: "Admission Support",
//      desc: "Complete end-to-end guidance",
//   },
// ];

// const Services = () => {
//   const [current, setCurrent] = useState(0);

//   // Auto slide every 4 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="srv-page">

//       {/* ===== Vertical Carousel ===== */}
//       <div className="vertical-carousel">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`v-slide ${index === current ? "active" : ""}`}
//             style={{ backgroundImage: `url(${slide.image})` }}
//           >
//             <div className="v-overlay">
//               <h1>{slide.title}</h1>
//               <p>{slide.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>

      
// </div>
//   );
// };

// export default Services;



import React, { useEffect, useState, useRef } from "react";
import "./Services.css";
// import h1 from "../assets/home1";
// import h2 from "../assets/homepage";
// import h3 from "../assets/home2";
// import UniversityCard from "../components/UniversityCard";
// import UniversityTable from "../components/UniversityTable";
const slides = [
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    title: "Education Support",
    desc: "Empowering students through scholarships and learning programs",
  },
  {
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095",
    title: "Business Support",
    desc: "Helping small businesses grow and recover sustainably",
  },
  {
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350",
    title: "Community Development",
    desc: "Building stronger and self-reliant communities",
  },
  {
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
    title: "Infrastructure Support",
    desc: "Supporting small-scale development initiatives",
  },
];


const Services = () => {
  const [current, setCurrent] = useState(0);
  const imageRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // 🔥 3D rotate on scroll
  useEffect(() => {
    const handleScroll = () => {
      const rotate = window.scrollY * 0.05;
      if (imageRef.current) {
        imageRef.current.style.transform = `rotateY(${rotate}deg) rotateX(${rotate / 2}deg)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);





  useEffect(() => {
  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, 10000);

  return () => clearInterval(interval);
}, []);


useEffect(() => {
  const handleScroll = () => {
    const cards = document.querySelectorAll(".uni-card img");

    cards.forEach((img) => {
      const rect = img.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      let visible = 1 - Math.abs(rect.top / windowHeight);

      let scale = 1 + visible * 0.15; // smooth zoom
      img.style.transform = `scale(${scale})`;
    });
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <div className="srv-page">

      {/* ===== Carousel ===== */}
     <div className="horizontal-carousel">
  <div
    className="h-track"
    style={{ transform: `translateX(-${current * 100}%)` }}
  >
    {slides.map((slide, index) => (
      <div
        key={index}
        className="h-slide"
        style={{ backgroundImage: `url(${slide.image})` }}
      >
        <div className="h-overlay">
          <h1>{slide.title}</h1>
          <p>{slide.desc}</p>
        </div>
      </div>
    ))}
  </div>
</div>

      {/* ===== EduNursing Service Section ===== */}
      <section className="edu-section">

        <div className="edu-container">

          {/* LEFT CONTENT */}
          <div className="edu-content">
            <h2>Gratitude Foundation Programs</h2>

            <p>
              Gratitude Foundation is a non-profit organization dedicated to 
              uplifting communities by supporting underserved businesses, 
              advancing education, and promoting sustainable development.
            </p>

            <p>
              Our programs are designed to create real impact by empowering 
              individuals, strengthening local economies, and providing 
              opportunities for growth and success.
            </p>

            <ul>
              <li>✔ Support for Small & Struggling Businesses</li>
              <li>✔ Scholarships & Educational Programs</li>
              <li>✔ Skill Development & Training Initiatives</li>
              <li>✔ Community Development Projects</li>
              <li>✔ Financial Guidance & Assistance</li>
              <li>✔ Infrastructure Support (Small Scale)</li>
              <li>✔ Career Guidance & Mentorship</li>
              <li>✔ Transparent & Impact-Driven Approach</li>
            </ul>

            <p>
              We collaborate with local communities, organizations, and 
              institutions to ensure sustainable growth and meaningful change. 
              Our mission is to create opportunities and improve lives through 
              collective effort and compassion.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="edu-image" ref={imageRef}>
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
              alt="Gratitude Foundation"
            />
          </div>

        </div>
      </section>


    {/* <section className="uni-section">
  <h2 className="uni-title">Top Universities</h2>

  <div className="uni-scroll">

    <div className="">
     <UniversityCard
      // image={h1}
      name="Dhanalakshmi Srinivasan University"
      location="Tamil Nadu, India"
      description="Well-known university offering quality nursing education."
      link="/dhanalakshmi-university"
    />
    </div>

    <div className="">
     <UniversityCard
      // image={h2}
      name="The Tamil Nadu Dr. M.G.R. Medical University"
      location="Chennai, India"
      description="Top medical university with recognized nursing programs."
      link="/mgr-university"
    />
    </div>

    <div className="">
      <UniversityCard
      // image={h3}
      name="Rajiv Gandhi University of Health Sciences"
      location="Karnataka, India"
      description="Premier university with strong hospital training."
      link="/rajiv-gandhi-university"
    />
    </div>

  </div>
</section> */}


    </div>
    
  );
};

export default Services;