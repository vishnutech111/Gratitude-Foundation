import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* ABOUT */}
        <div className="footer-col">
          <h3>Gratitude Foundation</h3>
          <p>
            Gratitude Foundation is a non-profit organization committed to 
            supporting underserved businesses, advancing education, and 
            empowering communities through sustainable development initiatives.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Courses</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
             <li>📍 Kerala, India</li>
            <li>📞 +91 9567458635</li>
            <li>📧 gratitudefoundation@gmail.com</li>
          </ul>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} EduNursing. All Rights Reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;