// import React from "react";
// import "./UniversityCard.css";
// import { motion } from "framer-motion";

// const UniversityCard = ({ image, name, location, description }) => {
//   return (
//     <motion.div
//       className="university-card"
//       whileHover={{ scale: 1.05 }}
//     >
//       {/* Image */}
//       <div className="card-image">
//         <img src={image} alt={name} />
//       </div>

//       {/* Content */}
//       <div className="card-content">
//         <h3>{name}</h3>
//         <p className="location">{location}</p>
//         <p className="description">{description}</p>

//         <button className="apply-btn">Explore</button>
//       </div>
//     </motion.div>
//   );
// };

// export default UniversityCard;

import React from "react";
import "./UniversityCard.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const UniversityCard = ({ image, name, location, description, link }) => {
  const navigate = useNavigate();

  return (
    <motion.div className="university-card" whileHover={{ scale: 1.05 }}>
      
      <div className="card-image">
        <img src={image} alt={name} />
      </div>

      <div className="card-content">
        <h3>{name}</h3>
        <p className="location">{location}</p>
        <p className="description">{description}</p>

        <button className="apply-btn" onClick={() => navigate(link)}>
          Explore
        </button>
      </div>
    </motion.div>
  );
};

export default UniversityCard;