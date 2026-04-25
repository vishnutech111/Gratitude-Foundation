import React, { useState } from "react";
import "./Dashboard.css";
import { motion } from "framer-motion";
import AddGallery from "./AddGallery";
import AddBlog from "./AddBlog";
import { FaBlog, FaImages, FaBars } from "react-icons/fa";

const Dashboard = () => {
  const [active, setActive] = useState("blog");
  const [toggle, setToggle] = useState(true);

  return (
    <div className="dashboard-container">

      {/* SIDEBAR */}
      <div className={`sidebar ${toggle ? "open" : "close"}`}>
        <h2 >EduNursing</h2>

        <ul>
          <li
            className={active === "blog" ? "active" : ""}
            onClick={() => setActive("blog")}
          >
            <FaBlog /> Blogs
          </li>

          <li
            className={active === "gallery" ? "active" : ""}
            onClick={() => setActive("gallery")}
          >
            <FaImages /> Gallery
          </li>
        </ul>
      </div>

      {/* MAIN CONTENT */}
      <div className="main-content">

        {/* TOPBAR */}
        <div className="topbar">
          <FaBars className="menu-icon" onClick={() => setToggle(!toggle)} />
          <h3>{active === "blog" ? "Manage Blogs" : "Manage Gallery"}</h3>
        </div>

        {/* CONTENT AREA */}
        <motion.div
          className="content-area"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {/* {active === "blog" && (
            <div>
              <h2>Blog Management</h2>
              <p>Add, edit, and manage blogs here.</p>
            </div>
          )}

          {active === "gallery" && (
            <div>
              <h2>Gallery Management</h2>
              <p>Upload and manage images here.</p>
            </div>
          )} */}


          {active === "blog" && <AddBlog />}
{active === "gallery" && <AddGallery />}
        </motion.div>

      </div>
    </div>
  );
};

export default Dashboard;