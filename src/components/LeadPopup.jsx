import React, { useEffect, useState } from "react";
import "./LeadPopup.css";

const LeadPopup = () => {
  const [show, setShow] = useState(false);

//   useEffect(() => {
//     // ✅ Show after 5 seconds (only once per session)
//     const shown = sessionStorage.getItem("popupShown");

//     if (!shown) {
//       const timer = setTimeout(() => {
//         setShow(true);
//         sessionStorage.setItem("popupShown", "true");
//       }, 5000);

//       return () => clearTimeout(timer);
//     }















    
//     // ✅ Exit Intent (mouse leave top)
//     const handleExit = (e) => {
//       if (e.clientY < 10 && !sessionStorage.getItem("popupExitShown")) {
//         setShow(true);
//         sessionStorage.setItem("popupExitShown", "true");
//       }
//     };

//     document.addEventListener("mouseleave", handleExit);

//     return () => {
//       document.removeEventListener("mouseleave", handleExit);
//     };
//   }, []);




useEffect(() => {
  // ✅ Show after 5 seconds (every time page loads)
  const timer = setTimeout(() => {
    setShow(true);
  }, 5000);

  // ✅ Exit Intent (every time)
  const handleExit = (e) => {
    if (e.clientY < 10) {
      setShow(true);
    }
  };

  document.addEventListener("mouseleave", handleExit);

  return () => {
    clearTimeout(timer);
    document.removeEventListener("mouseleave", handleExit);
  };
}, []);






  const handleClose = () => {
    setShow(false);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi, I am interested in nursing admission. Please guide me."
    );

    window.open(
      `https://wa.me/919567453535?text=${message}`,
      "_blank"
    );
  };

const handleSubmit = (e) => {
  e.preventDefault();

  const name = e.target.name.value;
  const phone = e.target.phone.value;

  const message = encodeURIComponent(
    `Hi, I am ${name}. My phone number is ${phone}. I am interested in nursing admission. Please guide me.`
  );

  window.open(`https://wa.me/919567453535?text=${message}`, "_blank");
};




  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">

        {/* CLOSE */}
        <span className="popup-close" onClick={handleClose}>
          ✖
        </span>

        <h2>🎓 Start Your Nursing Career</h2>
        <p>
          Get admission in top nursing colleges across Tamil Nadu & Karnataka.
        </p>

        {/* FORM */}
        {/* <form className="popup-form">
          <input type="text" placeholder="Your Name" required />
          <input type="text" placeholder="Phone Number" required />

          <button type="submit">
            Get Free Guidance
          </button>
        </form> */}

        <form className="popup-form" onSubmit={handleSubmit}>
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
  />

  <input
    type="text"
    name="phone"
    placeholder="Phone Number"
    required
  />

  <button type="submit">
    Get Free Guidance
  </button>
</form>

        {/* WHATSAPP BUTTON */}
        <button className="whatsapp-btn" onClick={handleWhatsApp}>
          💬 Chat on WhatsApp
        </button>

      </div>
    </div>
  );
};

export default LeadPopup;