// import React, { useEffect, useState } from "react";
// import "./Blogs.css";
// import axios from "axios";

// const Blogs = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [active, setActive] = useState(0);

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   // Fetch Blogs
//   const fetchBlogs = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/blogs");
//       setBlogs(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // 🔥 Auto Slide
//   useEffect(() => {
//     if (blogs.length === 0) return;

//     const interval = setInterval(() => {
//       setActive((prev) => (prev + 1) % blogs.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [blogs]);

//   return (
//     <div className="blog-page">

//       {/* ===== VERTICAL CAROUSEL ===== */}
//       <div className="vertical-carousel">
//         {blogs.map((blog, index) => (
//           <div
//             key={blog._id}
//             className={`v-slide ${index === active ? "active" : ""}`}
//             style={{ backgroundImage: `url(${blog.image})` }}
//           >
//             <div className="v-overlay">
//               <h1>{blog.title}</h1>
//               <p>{blog.content.substring(0, 100)}...</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ===== BLOG GRID ===== */}
//       <section className="blog-section">
//         <h2>Latest Blogs</h2>

//         <div className="blog-grid">
//           {blogs.map((blog) => (
//             <div className="blog-card" key={blog._id}>
//               <img src={blog.image} alt="" />

//               <div className="blog-content">
//                 <h3>{blog.title}</h3>

//                 <p className="date">
//                   {new Date(blog.createdAt).toDateString()}
//                 </p>

//                 <p>{blog.content.substring(0, 120)}...</p>

//                 <button>Read More</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//     </div>
//   );
// };

// export default Blogs;


import React, { useEffect, useState } from "react";
import "./Blogs.css";
import axios from "axios";

const carouselImages = [

];

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/blogs");
      setBlogs(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // 🔥 Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="blog-page">

      {/* ===== Vertical Carousel ===== */}
      <div className="vertical-carousel">
        {carouselImages.map((img, index) => (
          <div
            key={index}
            className={`v-slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}

        <div className="v-overlay">
          <h1>Our Blog</h1>
          <p>Latest Updates & Insights from Technowin</p>
        </div>
      </div>

      {/* ===== BLOG GRID ===== */}
      <section className="blog-section">
        <h2>Latest Blogs</h2>

        <div className="blog-grid">
          {blogs.map((blog) => (
            <div className="blog-card" key={blog._id}>
              <img src={blog.image} alt="" />

              <div className="blog-content">
                <h3>{blog.title}</h3>

                <p className="date">
                  {new Date(blog.createdAt).toDateString()}
                </p>

                <p>{blog.content.substring(0, 120)}...</p>

                <button>Read More</button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Blogs;