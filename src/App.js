// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import AddGallery from "./admin/AddGallery";
import AddBlog from "./admin/AddBlog";
import Dashboard from "./admin/Dashboard";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Blogs from "./pages/Blogs";
import Services from "./pages/Services";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

import MGR from "./components/MGR";
import Dhanalakshmi from "./components/Dhanalakshmi";
import RajivGandhi from "./components/RajivGandhi";
import MainPage from "./pages/MainPage";
import Footer from "./components/Footer";
// import LeadPopup from "./components/LeadPopup";

/* COMPONENTS */


/* PAGES */


/* ADMIN */



function App() {
  return (

    
    <Router>
      
      {/* Navbar */}
      <Navbar />
       {/* <LeadPopup /> */}
      {/* Routes */}
      <Routes>

        {/* USER PAGES */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<MainPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dhanalakshmi-university" element={<Dhanalakshmi />} />
  <Route path="/mgr-university" element={<MGR />} />
  <Route path="/rajiv-gandhi-university" element={<RajivGandhi />} />

        {/* ADMIN */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-blog" element={<AddBlog />} />
        <Route path="/add-gallery" element={<AddGallery />} />

      </Routes>
<Footer />
    </Router>

    
    
  );
}

export default App;
