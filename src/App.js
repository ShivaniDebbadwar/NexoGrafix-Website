import React, { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import ExpertiseSection from "./components/ExpertiseSection";
import MissionSection from "./components/MissionSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";

const styles = `
@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-120px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes slideInRight {
  from { opacity: 0; transform: translateX(120px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes pulseGlow {
  0% { box-shadow: 0 0 5px #ff5722, 0 0 10px #ff5722; }
  50% { box-shadow: 0 0 20px #ff5722, 0 0 35px #ff5722; }
  100% { box-shadow: 0 0 5px #ff5722, 0 0 10px #ff5722; }
}
@keyframes hoverPulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}
`;

export default function HomePage() {
  const [animate, setAnimate] = useState(false);
  useEffect(() => setAnimate(true), []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "white", minHeight: "100vh", position: "relative" }}>
      <style>{styles}</style>

      {/* Navbar */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 80px",
          background: "white", // keeps nav separate
          position: "relative",
          zIndex: 20,
        }}
      >
        {/* Logo */}
       <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
  <img
    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhudobxJTULVUfG2hHEW592Ge6NxbXtmnU6zr5HgjaNGNy46btT52u_sn0A3-N9zXVj-yQ3lNgb1DziACkc7pgN0r24ARXKXGcMwGX5VakAPhpkNZCzWR1hfl7fV3iXnRTPB5QJ5sb5hzyZyl0aFS9xjWz69YCF6iOZYT6wods7L57xJHJf2P8fgVsVqjK5/s320/nexografixlogo.png"
    alt="Nexografix Logo"
    style={{ width: "35px", height: "35px", objectFit: "contain" }}
  />
  <h1 style={{ fontSize: "22px", fontWeight: "bold", color: "black" }}>
    NEXOGRAFIX{" "}
    <span style={{ fontSize: "12px", color: "gray" }}></span>
  </h1>
</div>

        {/* Menu */}
        <nav style={{ display: "flex", gap: "35px", fontSize: "16px", fontWeight: "500" }}>
          {["Home", "About Us", "Services ▼", "Pages ▼", "Blog ▼", "Contact Us"].map((link, i) => (
            <a
              key={i}
              href="#"
              style={{
                color: link === "Home" ? "#ff5722" : "black",
                textDecoration: "none",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#ff5722")}
              onMouseLeave={(e) => (e.target.style.color = link === "Home" ? "#ff5722" : "black")}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div style={{ display: "flex", alignItems: "center", gap: "25px" }}>
          {/* 9 dots icon */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 6px)",
              gridGap: "5px",
              padding: "10px",
              borderRadius: "50%",
              background: "FFC107",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#ff5722";
              e.currentTarget.style.animation = "hoverPulse 0.6s ease";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.animation = "none";
            }}
          >
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#ff5722",
                }}
              />
            ))}
          </div>

          {/* Phone CTA with glow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: "white",
              padding: "8px 16px",
              borderRadius: "30px",
              animation: "pulseGlow 2s infinite ease-in-out",
            }}
          >
            <div style={{ background: "#ff5722", padding: "6px", borderRadius: "50%" }}>
              <Phone size={16} />
            </div>
            <span style={{ fontSize: "14px", color:"black" }}>+91 9661284439</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section
        style={{
          position: "relative",
          height: "85vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "0 40px",
          overflow: "hidden",
        }}
      >
        {/* Background Video (scoped only to hero) */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -2,
          }}
        >
          <source src="/waves.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
             background: "linear-gradient(to bottom, rgba(26, 3, 3, 0.6), rgba(0,0,0,0.9))", zIndex: -1,
          }}
        />

        {/* Content */}
        <div style={{ maxWidth: "1000px", zIndex: 1 }}>
          <h2
            style={{
              color: "white",
              fontSize: "68px",
              fontWeight: "bold",
              lineHeight: "1.2",
              marginBottom: "30px",
              animation: animate ? "slideInLeft 1s ease forwards" : "none",
              opacity: 0,
            }}
          >
            Amplify Your Brand with <br />
            Cutting-Edge Digital <span style={{ color: "#ff5722" }}>Marketing</span>
          </h2>
          <p
            style={{
              fontSize: "20px",
              color: "white",
              maxWidth: "750px",
              margin: "0 auto 50px auto",
              animation: animate ? "slideInRight 1s ease forwards" : "none",
              animationDelay: "0.3s",
              opacity: 0,
            }}
          >
            Marko empowers businesses to grow online with data driven digital marketing,
            innovative branding, and performance focused strategies trusted by top brands.
          </p>

          {/* CTA Row */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
              marginTop: "40px",
            }}
          >
            <button
              style={{
                animation: "pulseGlow 2s infinite ease-in-out",
                background: "#e7e4ddff",
                padding: "14px 40px",
                borderRadius: "30px",
                border: "none",
                fontSize: "16px",
                fontWeight: "bold",
                color: "black",
                cursor: "pointer",
              }}
            >
              Get Started →
            </button>
          </div>
        </div>
      </section>
       <ExpertiseSection />
      <MissionSection />
      <ServicesSection />
      <TestimonialsSection />
    </div>
  );
}
