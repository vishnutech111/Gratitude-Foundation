// import React from "react";
// import "./University.css"
// const RajivGandhi = () => {
//   return (
//     <div className="details-page">
//       <h1>Rajiv Gandhi University of Health Sciences</h1>
//       <p><strong>Location:</strong> Karnataka, India</p>

//       <h3>About</h3>
//       <p>
//         Known for advanced healthcare education and strong clinical exposure.
//       </p>

//       <h3>Courses</h3>
//       <ul>
//         <li>B.Sc Nursing</li>
//         <li>M.Sc Nursing</li>
//         <li>PhD Nursing</li>
//       </ul>

//       <button className="apply-btn">Apply Now</button>
//     </div>
//   );
// };

// export default RajivGandhi;
import React from "react";
import "./University.css";

const RajivGandhi = () => {
  return (
    <div className="details-page">

      <h1>Rajiv Gandhi University of Health Sciences</h1>
      <p><strong>Location:</strong> Bangalore, Karnataka, India</p>

      {/* ABOUT */}
      <h3>About University</h3>
      <p>
        Rajiv Gandhi University of Health Sciences (RGUHS) is one of the top 
        health science universities in India, located in Bangalore. It is 
        recognized for its excellence in medical, dental, and nursing education.
      </p>

      <p>
        The university governs a large number of affiliated institutions across 
        Karnataka and provides world-class education with strong clinical 
        exposure. Students benefit from advanced curriculum, research 
        opportunities, and hospital-based training.
      </p>

      {/* COURSES */}
      <h3>Courses Offered</h3>
      <ul>
        <li>B.Sc Nursing (4 Years)</li>
        <li>GNM (General Nursing & Midwifery)</li>
        <li>Post Basic B.Sc Nursing</li>
        <li>M.Sc Nursing (Specializations)</li>
        <li>PhD Nursing</li>
      </ul>

      {/* FEATURES */}
      <h3>Key Features</h3>
      <ul>
        <li>Top-ranked health sciences university</li>
        <li>Wide network of affiliated colleges</li>
        <li>Strong hospital training & internships</li>
        <li>Advanced research opportunities</li>
        <li>High placement support in India & abroad</li>
      </ul>

      {/* BANGALORE COLLEGES */}
      <h3>Top Nursing Colleges - Bangalore</h3>

      <div className="college-list">

        <div className="college-card">
          <h4>Flora Group of Institution</h4>
          <p>📍 Bangalore</p>
          <p>B.Sc Nursing | GNM | P.B.BSc Nursing</p>
        </div>

        <div className="college-card">
          <h4>Manjushree Institutions</h4>
          <p>📍 Bangalore</p>
          <p>
            GNM (Boys & Girls) | B.Sc Nursing (Boys & Girls) | 
            P.B.BSc | M.Sc Nursing (MSN, OBG, Paediatric, Psychiatric, CHN)
          </p>
        </div>

        <div className="college-card">
          <h4>Acharya Institutions</h4>
          <p>📍 Bangalore</p>
          <p>B.Sc Nursing | Diploma Nursing</p>
        </div>

        <div className="college-card">
          <h4>Harsha Institutions</h4>
          <p>📍 Bangalore</p>
          <p>
            GNM | B.Sc Nursing | P.B.BSc | 
            M.Sc (Community, Psychiatry, Pediatrics, Medical Surgical, OBG)
          </p>
        </div>

        <div className="college-card">
          <h4>Karnataka College Group of Institution</h4>
          <p>📍 Bangalore</p>
          <p>
            GNM | B.Sc Nursing | P.B.BSc | 
            M.Sc (Psychiatry, OBG, Medical Surgical, Community)
          </p>
        </div>

        <div className="college-card">
          <h4>Little Flower Group of Institution</h4>
          <p>📍 Bangalore</p>
          <p>
            GNM | B.Sc Nursing (Boys & Girls) | P.B.BSc | 
            M.Sc (MSN, OBG, Pediatric, Psychiatric, Community)
          </p>
        </div>

        <div className="college-card">
          <h4>Abhaya Hospital Bangalore</h4>
          <p>📍 Bangalore</p>
          <p>B.Sc Nursing | GNM</p>
        </div>

      </div>

      {/* MANGALORE COLLEGES */}
      <h3>Top Nursing Colleges - Mangalore</h3>

      <div className="college-list">

        <div className="college-card">
          <h4>Vidya College of Nursing</h4>
          <p>B.Sc Nursing | GNM</p>
        </div>

        <div className="college-card">
          <h4>Athena Group of Institutions</h4>
          <p>
            GNM (Boys & Girls) | P.B.BSc | M.Sc Nursing
          </p>
        </div>

        <div className="college-card">
          <h4>City College of Nursing</h4>
          <p>B.Sc Nursing</p>
        </div>

        <div className="college-card">
          <h4>Kailkere Rukmini Shetty College of Nursing</h4>
          <p>B.Sc Nursing</p>
        </div>

        <div className="college-card">
          <h4>Aaliyah Group of Institutions</h4>
          <p>B.Sc Nursing</p>
        </div>

        <div className="college-card">
          <h4>K Pandyarajah Ballal Nursing Institute</h4>
          <p>B.Sc Nursing | GNM</p>
        </div>

        <div className="college-card">
          <h4>Sahyadri College of Nursing</h4>
          <p>B.Sc Nursing | GNM</p>
        </div>

        <div className="college-card">
          <h4>N.E.T Group of Institutions</h4>
          <p>B.Sc Nursing (Boys & Girls)</p>
        </div>

        <div className="college-card">
          <h4>Karavali Group of Institutions</h4>
          <p>B.Sc Nursing | P.B.BSc</p>
        </div>

        <div className="college-card">
          <h4>Masood Group of Institutions</h4>
          <p>B.Sc Nursing</p>
        </div>

        <div className="college-card">
          <h4>Rajeev Group of Institutions, Hassan</h4>
          <p>
            B.Sc Nursing (Boys & Girls) | GNM | P.B.BSc | 
            M.Sc (Medical Surgical, OBG, Pediatric, Community)
          </p>
        </div>

        <div className="college-card">
          <h4>Ashrith College of Nursing</h4>
          <p>B.Sc Nursing</p>
        </div>

      </div>

      {/* APPLY */}
      <button className="apply-btn">Apply Now</button>

    </div>
  );
};

export default RajivGandhi;