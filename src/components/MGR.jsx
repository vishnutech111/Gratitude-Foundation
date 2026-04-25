// import React from "react";
// import "./University.css"
// const MGR = () => {
//   return (
//     <div className="details-page">
//       <h1>The Tamil Nadu Dr. M.G.R. Medical University</h1>
//       <p><strong>Location:</strong> Chennai, India</p>

//       <h3>About</h3>
//       <p>
//         One of the top medical universities in India with global recognition.
//       </p>

//       <h3>Courses</h3>
//       <ul>
//         <li>B.Sc Nursing</li>
//         <li>Post Basic Nursing</li>
//         <li>M.Sc Nursing</li>
//       </ul>

//       <button className="apply-btn">Apply Now</button>
//     </div>
//   );
// };

// export default MGR;


import React from "react";
import "./University.css";

const MGR = () => {
  return (
    <div className="details-page">

      <h1>The Tamil Nadu Dr. M.G.R. Medical University</h1>
      <p><strong>Location:</strong> Chennai, Tamil Nadu, India</p>

      {/* ABOUT */}
      <h3>About University</h3>
      <p>
        The Tamil Nadu Dr. M.G.R. Medical University is one of the premier medical 
        universities in India, established to regulate and ensure high standards 
        in medical and healthcare education across Tamil Nadu.
      </p>

      <p>
        The university is recognized nationally and internationally for its 
        excellence in nursing and medical education. It is affiliated with 
        numerous top nursing colleges, providing students with strong academic 
        knowledge, clinical exposure, and career opportunities.
      </p>

      {/* COURSES */}
      <h3>Courses Offered</h3>
      <ul>
        <li>B.Sc Nursing (4 Years)</li>
        <li>Post Basic B.Sc Nursing</li>
        <li>M.Sc Nursing</li>
      </ul>

      {/* FEATURES */}
      <h3>Key Features</h3>
      <ul>
        <li>Government-recognized medical university</li>
        <li>Wide network of affiliated nursing colleges</li>
        <li>Advanced curriculum with clinical training</li>
        <li>Internship opportunities in top hospitals</li>
        <li>High employability and career growth</li>
      </ul>

      {/* AFFILIATED COLLEGES */}
      <h3>Top Affiliated Nursing Colleges (Coimbatore)</h3>

      <div className="college-list">

        <div className="college-card">
          <h4>Nightingale Institute of Nursing Education</h4>
          <p>📍 Coimbatore, Tamil Nadu</p>
          <p>B.Sc Nursing</p>
        </div>

        <div className="college-card">
          <h4>Sai Institute of Nursing Education</h4>
          <p>📍 Coimbatore, Tamil Nadu</p>
          <p>B.Sc Nursing (Girls)</p>
        </div>

        <div className="college-card">
          <h4>Sai Institute of Nursing Education</h4>
          <p>📍 Coimbatore, Tamil Nadu</p>
          <p>B.Sc Nursing (Boys)</p>
        </div>

        <div className="college-card">
          <h4>Sri Lakshmi Group of Institution</h4>
          <p>📍 Coimbatore, Tamil Nadu</p>
          <p>B.Sc Nursing (Boys)</p>
        </div>

        <div className="college-card">
          <h4>Sri Lakshmi Group of Institution</h4>
          <p>📍 Coimbatore, Tamil Nadu</p>
          <p>B.Sc Nursing</p>
        </div>

        <div className="college-card">
          <h4>Ennam College of Nursing</h4>
          <p>📍 Coimbatore, Tamil Nadu</p>
          <p>B.Sc Nursing</p>
        </div>

        <div className="college-card">
          <h4>Annai Meenakshi College of Nursing</h4>
          <p>📍 Coimbatore, Tamil Nadu</p>
          <p>B.Sc Nursing</p>
        </div>

      </div>

      {/* APPLY */}
      <button className="apply-btn">Apply Now</button>

    </div>
  );
};

export default MGR;