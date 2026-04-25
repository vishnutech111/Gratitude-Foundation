import React, { useEffect, useState } from "react";
import "./Contact.css";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    title: "Contact Gratitude Foundation",
    desc: "We are here to support and empower communities",
  },
  {
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095",
    title: "Support & Collaboration",
    desc: "Partner with us to create meaningful impact",
  },
  {
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350",
    title: "Make a Difference",
    desc: "Reach out and be part of positive change",
  },
];

const Contact = () => {
  const [current, setCurrent] = useState(0);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = "New Inquiry from Gratitude Foundation Website";
    const body = `
Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}

Message:
${form.message}
    `;

    window.location.href = `mailto:eduindiannursingacademy@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="contact-page">

      {/* ===== CAROUSEL ===== */}
      <div className="contact-carousel">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`contact-slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="contact-overlay">
              <h1>{slide.title}</h1>
              <p>{slide.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ===== CONTACT INFO + FORM ===== */}
      <section className="contact-section-new">
        <div className="contact-container-new">

          {/* LEFT */}
          <div className="contact-image">
            <img
              src="https://images.unsplash.com/photo-1584515933487-779824d29309"
              alt="contact"
            />
          </div>

          {/* RIGHT */}
          <div className="contact-content-new glass">
           <h2>Get In Touch</h2>

            <p>
              Reach out to Gratitude Foundation to support our mission, 
              collaborate on impactful projects, or learn more about our programs.
            </p>

            <ul>
              <li>📍 Kerala, India</li>
              <li>📞 +91 9567453535</li>
              <li>📧 gratitudefoundation@gmail.com</li>
            </ul>

            {/* ===== FORM ===== */}
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                onChange={handleChange}
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
                onChange={handleChange}
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                required
                onChange={handleChange}
              ></textarea>

              <button type="submit" className="contact-btn">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;