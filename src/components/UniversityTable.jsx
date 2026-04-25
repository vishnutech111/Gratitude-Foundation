import React from "react";
import "./UniversityTable.css";

const UniversityTable = () => {
  return (
    <div className="table-page">

      {/* ===== Dhanalakshmi ===== */}
      <h2>Dhanalakshmi Srinivasan University (Tamil Nadu)</h2>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Course</th>
              <th>Institute</th>
              <th>City</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>BSc Nursing</td>
              <td>Nightingale Institute of Nursing Education</td>
              <td>Perambalur</td>
              <td>Nursing</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ===== MGR ===== */}
      <h2>M.G.R University (Tamil Nadu)</h2>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Course</th>
              <th>Institute</th>
              <th>City</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["BSc Nursing","Nightingale Institute","Coimbatore"],
              ["BSc Nursing (Girls)","Sai Institute","Coimbatore"],
              ["BSc Nursing (Boys)","Sai Institute","Coimbatore"],
              ["BSc Nursing (Girls)","Sri Lakshmi Group","Coimbatore"],
              ["BSc Nursing (Boys)","Sri Lakshmi Group","Coimbatore"],
              ["BSc Nursing","Ennam College","Coimbatore"],
              ["BSc Nursing","Annai Meenakshi College","Coimbatore"],
            ].map((item, i) => (
              <tr key={i}>
                <td>{item[0]}</td>
                <td>{item[1]}</td>
                <td>{item[2]}</td>
                <td>Nursing</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ===== Rajiv Gandhi ===== */}
      <h2>Rajiv Gandhi University (Karnataka - Bangalore)</h2>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Course</th>
              <th>Institute</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["BSc Nursing","Flora Group"],
              ["GNM","Flora Group"],
              ["PBBSc Nursing","Flora Group"],
              ["GNM (Boys)","Manjushree"],
              ["GNM (Girls)","Manjushree"],
              ["BSc Nursing (Boys)","Manjushree"],
              ["BSc Nursing (Girls)","Manjushree"],
              ["MSc Nursing","Manjushree"],
              ["BSc Nursing","Acharya"],
              ["Diploma Nursing","Acharya"],
              ["BSc Nursing","Harsha"],
              ["MSc Nursing","Harsha"],
              ["BSc Nursing","Karnataka College"],
              ["MSc Nursing","Karnataka College"],
              ["GNM","Little Flower"],
              ["BSc Nursing","Little Flower"],
              ["BSc Nursing","Abhaya Hospital"],
            ].map((item, i) => (
              <tr key={i}>
                <td>{item[0]}</td>
                <td>{item[1]}</td>
                <td>Nursing</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ===== Mangalore ===== */}
      <h2>Rajiv Gandhi University (Mangalore Colleges)</h2>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Course</th>
              <th>Institute</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["BSc Nursing","Vidya College"],
              ["GNM","Vidya College"],
              ["BSc Nursing","K.P.B.N.I"],
              ["GNM","Athena Group"],
              ["PBBSc Nursing","Athena Group"],
              ["MSc Nursing","Athena Group"],
              ["BSc Nursing","City College"],
              ["BSc Nursing","Aaliyah Group"],
              ["GNM","Ballal Institute"],
              ["BSc Nursing","Sahyadri College"],
              ["GNM","Sahyadri College"],
              ["BSc Nursing","N.E.T Group"],
              ["BSc Nursing","Karavali Group"],
              ["BSc Nursing","Masood Group"],
            ].map((item, i) => (
              <tr key={i}>
                <td>{item[0]}</td>
                <td>{item[1]}</td>
                <td>Nursing</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default UniversityTable;