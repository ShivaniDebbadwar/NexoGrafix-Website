import React, { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Sophia Lewis",
    role: "Founder",
    text: "From SEO to paid ads, Marko nailed every aspect of our campaign. Our website traffic skyrocketed, and lead generation has never been better!",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "James Peterson",
    role: "COO, BrightWave",
    text: "Highly professional and results-oriented. Marko’s expertise in branding and content marketing helped us build a strong online identity.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Emma Richard",
    role: "CEO, Nexatech",
    text: "Marko completely transformed our online presence! Their digital marketing strategies helped us double our revenue in just six months.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "David Smith",
    role: "Marketing Director",
    text: "The team is very creative and professional. We saw massive growth in engagement across all our social media platforms.",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    name: "Olivia White",
    role: "Entrepreneur",
    text: "Their strategies are practical, modern, and result-driven. They understand business goals and deliver beyond expectations.",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    name: "Michael Brown",
    role: "CTO, InnovateX",
    text: "Marko’s digital expertise turned our struggling campaigns into a success story. Truly outstanding!",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Animate only when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-slide bottom testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-section" ref={sectionRef}>
      <style>{`
        .testimonial-section {
          background: white;
          color: black;
          padding: 80px 60px;
          position: relative;
          overflow: hidden;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Top Section */
        .top-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
          margin-bottom: 70px;
        }
        .top-box {
          background: mintcream;
          border-radius: 16px;
          padding: 40px 30px;
          opacity: 0;
          min-height: 260px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .top-box h3 {
          font-size: 20px;
          margin-bottom: 10px;
          color: #ff5722;
        }
        .top-box h2 {
          font-size: 28px;
          margin-bottom: 15px;
          line-height: 1.4;
        }
        .top-box h2 span {
          color: #ff5722;
        }
        .top-box p {
          font-size: 15px;
          color: #E0E0E0;
        }
        .top-box button {
          background: transparent;
          border: 1px solid #ff5722;
          color: #ff5722;
          margin: 8px 8px 0 0;
          padding: 8px 14px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 13px;
        }

        /* Bottom Cards */
        .cards-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
          opacity: 0;
        }
        .card {
          background:mintcream;
          padding: 25px;
          border-radius: 16px;
          min-height: 280px;
          text-align: left;
          position: relative;
          transition: transform 0.3s ease;
        }
        .card:hover {
          transform: translateY(-8px);
        }
        .card img {
          width: 55px;
          height: 55px;
          border-radius: 50%;
          margin-bottom: 10px;
        }
        .card h4 {
          margin: 5px 0;
          font-size: 16px;
        }
        .card small {
          color: #b3b3b3;
        }
        .card p {
          font-size: 14px;
          color: #ccc;
          margin-top: 15px;
        }
        .stars {
          color: gold;
          font-size: 16px;
          margin-top: 8px;
        }
        .quote-icon {
          position: absolute;
          top: 15px;
          right: 15px;
          font-size: 30px;
          color: #ff5722;
          opacity: 0.5;
        }

        /* Animations */
        .animate-top { animation: slideTop 1s forwards; }
        .animate-right { animation: slideRight 1s forwards; }
        .animate-bottom { animation: slideBottom 1s forwards; }

        @keyframes slideTop {
          from { transform: translateY(-100px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideRight {
          from { transform: translateX(100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideBottom {
          from { transform: translateY(100px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>

      {/* Top Section */}
      <div className="top-container">
        <div className={`top-box ${isVisible ? "animate-top" : ""}`}>
          <h3>⭐ 2.7k Positive Reviews</h3>
          <p>90% Improved Project</p>
          <p>49% New Project</p>
          <button>Social Media Growth</button>
          <button>Performance Marketing</button>
        </div>

        <div className={`top-box ${isVisible ? "animate-right" : ""}`}>
          <h2>
            Hear from Our <span>Satisfied Clients</span>, Real Success Stories
          </h2>
          <p>
            Discover how businesses like yours achieved outstanding growth with
            Marko’s expert digital marketing solutions.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={`cards-container ${isVisible ? "animate-bottom" : ""}`}>
        {testimonials.slice(current, current + 3).map((t, i) => (
          <div key={i} className="card">
            <span className="quote-icon">❝</span>
            <img src={t.image} alt={t.name} />
            <h4>{t.name}</h4>
            <small>{t.role}</small>
            <div className="stars">★★★★★</div>
            <p>"{t.text}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}
