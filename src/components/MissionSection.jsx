import React, { useEffect, useRef, useState } from "react";

const MissionSection = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect(); // run only once
          }
        });
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

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
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(-120px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(120px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-120px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* LEFT SIDE – TEXT CARDS */}
      <div style={{ maxWidth: "450px" }}>
        {[
          {
            title: "Data-Driven Approach",
            desc: "Every decision is backed by real-time analytics for maximum impact lorem ipsum dolor sit amet consectetur adipiscing elit.",
          },
          {
            title: "Creative & Innovative",
            desc: "Cutting-edge marketing techniques to keep you ahead of the competition lorem ipsum dolor sit amet consectetur adipiscing elit.",
          },
          {
            title: "Transparent Reporting",
            desc: "Clear insights and performance tracking so you always know your ROI lorem ipsum dolor sit amet consectetur adipiscing elit.",
          },
        ].map((card, i) => (
          <div
            key={i}
            style={{
              background: "rgba(245, 243, 243, 0.9)",
              borderRadius: "16px",
              padding: "30px",
              marginBottom: "20px",
              animation: inView ? "slideLeft 0.8s ease forwards" : "none",
              animationDelay: `${i * 0.15}s`,
              opacity: 0,
              boxShadow: "0 0 20px rgba(236, 141, 7, 0.2)",
            }}
          >
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "black",
                marginBottom: "10px",
              }}
            >
              {card.title}
            </h3>
            <p style={{ color: "black", marginBottom: "10px" }}>{card.desc}</p>
            <a
              href="#"
              style={{
                color: "#ff5722",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              Read More →
            </a>
          </div>
        ))}
      </div>

      {/* RIGHT SIDE – TEXT, IMAGE, CTA */}
      <div style={{ maxWidth: "600px" }}>
        {/* Mission Heading */}
        <div
          style={{
            animation: inView ? "slideDown 1s ease forwards" : "none",
            opacity: 0,
            marginBottom: "20px",
          }}
        >
          <p style={{ color: "#ff5722", fontWeight: "600" }}>Why Choose Marko</p>
          <h2
            style={{
              fontSize: "52px",
              fontWeight: "bold",
              lineHeight: "1.2",
            }}
          >
            Your Success is <br /> Our Mission
          </h2>
          <p style={{ color: "black", lineHeight: "1.6", marginTop: "15px" }}>
            In the fast-paced digital world, choosing the right marketing partner
            makes all the difference. At Marko, we don’t just create campaigns — we
            craft strategies that deliver measurable success.
          </p>
        </div>

        {/* Image */}
        <img
          src="/hero1.png"
          alt="Mission Team"
          style={{
            width: "100%",
            borderRadius: "16px",
            marginTop: "20px",
            marginBottom: "20px",
            animation: inView ? "slideUp 1s ease forwards" : "none",
            animationDelay: "0.2s",
            opacity: 0,
          }}
        />

        {/* Bottom CTA */}
        <div
          style={{
            background: "rgba(246, 236, 236, 0.9)",
            borderRadius: "16px",
            padding: "25px 30px",
            animation: inView ? "slideUp 1s ease forwards" : "none",
            animationDelay: "0.4s",
            opacity: 0,
            boxShadow: "0 0 25px rgba(239, 129, 4, 0.86)",
          }}
        >
          <h4
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "10px",
              color: "black",
            }}
          >
            Partner with Marko & take your brand to the next level.
          </h4>
          <a
            href="#"
            style={{
              color: "#ff5722",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            Let’s Talk Strategy →
          </a>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
