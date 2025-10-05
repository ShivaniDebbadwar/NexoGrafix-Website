import React, { useEffect, useRef, useState } from "react";

const ExpertiseSection = () => {
  const [inView, setInView] = useState(false);
  const [count, setCount] = useState(0);
  const sectionRef = useRef(null);

  // Detect scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect(); // animate only once
          }
        });
      },
      { threshold: 0.4 } // trigger when 40% of section is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Smooth count-up animation when in view
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = 21;
    const duration = 2000; // 2 seconds
    const stepTime = 30;
    const increment = end / (duration / stepTime);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, stepTime);

    return () => clearInterval(counter);
  }, [inView]);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "white",
        color: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "80px",
        padding: "120px 80px",
        flexWrap: "wrap",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(120px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(120px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes glowPulse {
          0% { text-shadow: 0 0 10px #ff5722, 0 0 20px #ff5722; }
          50% { text-shadow: 0 0 25px #ff5722, 0 0 45px #ff5722; transform: scale(1.05); }
          100% { text-shadow: 0 0 10px #ff5722, 0 0 20px #ff5722; transform: scale(1); }
        }
      `}</style>

      {/* Left Column (Text + Image) */}
      <div style={{ maxWidth: "450px" }}>
        {/* Top Text Block */}
        <div
          style={{
            background: "rgba(237, 228, 228, 0.9)",
            borderRadius: "16px",
            padding: "30px",
            marginBottom: "20px",
            animation: inView ? "slideUp 1s ease forwards" : "none",
            opacity: 0,
          }}
        >
          <h2 style={{ fontSize: "26px", fontWeight: "bold", marginBottom: "10px" }}>
            Ready to Elevate Your Digital Presence?
          </h2>
          <p style={{ color: "#aaa", marginBottom: "15px" }}>
            Let’s create a custom strategy that fits your business goals.
          </p>
          <a
            href="#"
            style={{
              color: "#ff5722",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            Get a Free Consultation →
          </a>
        </div>

        {/* Team Image */}
        <img
          src="/hero1.png"
          alt="Team Working"
          style={{
            width: "100%",
            borderRadius: "16px",
            animation: inView ? "slideUp 1.2s ease forwards" : "none",
            animationDelay: "0.2s",
            opacity: 0,
          }}
        />
      </div>

      {/* Right Column (Main Text) */}
      <div style={{ maxWidth: "600px" }}>
        <p
          style={{
            color: "#ff5722",
            fontWeight: "600",
            marginBottom: "10px",
            animation: inView ? "slideRight 0.8s ease forwards" : "none",
            opacity: 0,
          }}
        >
          Our Expertise
        </p>
        <h2
          style={{
            fontSize: "52px",
            fontWeight: "bold",
            lineHeight: "1.2",
            marginBottom: "20px",
            animation: inView ? "slideRight 1s ease forwards" : "none",
            animationDelay: "0.1s",
            opacity: 0,
          }}
        >
          Data Driven Strategies, <br />
          Measurable Results
        </h2>
        <p
          style={{
            color: "#060505ff",
            lineHeight: "1.6",
            marginBottom: "30px",
            animation: inView ? "slideRight 1.2s ease forwards" : "none",
            animationDelay: "0.2s",
            opacity: 0,
          }}
        >
          At Marko, we specialize in crafting innovative digital marketing
          strategies that drive real business growth. Our expertise ensures your
          brand stays ahead in the competitive digital landscape.
        </p>

        {/* List of Services */}
        <ul style={{ listStyle: "none", padding: 0, marginBottom: "40px" }}>
          {[
            "Performance Marketing",
            "Social Media Growth",
            "Content Marketing",
            "PPC & Paid Ads",
            "Brand Strategy",
            "Conversion Optimization",
          ].map((item, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "10px",
                opacity: 0,
                animation: inView ? "slideRight 0.6s ease forwards" : "none",
                animationDelay: `${0.3 + i * 0.1}s`,
              }}
            >
              <span style={{ color: "#ff5722" }}>✔</span>
              {item}
            </li>
          ))}
        </ul>

        {/* Experience Box with Count Animation */}
        <div
          style={{
            background: "rgba(247, 240, 240, 0.9)",
            borderRadius: "16px",
            padding: "25px 30px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
            animation: inView ? "slideUp 1s ease forwards" : "none",
            animationDelay: "0.5s",
            opacity: 0,
            boxShadow: "0 0 25px rgba(167,139,250,0.3)",
          }}
        >
          <h3
            style={{
              fontSize: "90px",
              fontWeight: "bold",
              color: "#ff5722",
              margin: 0,
              animation: inView ? "glowPulse 2s infinite ease-in-out" : "none",
            }}
          >
            {count}+
          </h3>
          <div>
            <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "5px" }}>
              Years of Experience <br /> in Digital Marketing
            </h4>
            <p style={{ color: "#aaa", fontSize: "14px" }}>
              We’ve helped brands grow across industries with measurable ROI and creative excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
