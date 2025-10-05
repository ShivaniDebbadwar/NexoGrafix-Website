import React, { useEffect, useRef, useState } from "react";

const CoreServices = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect(); // animate once
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Social Media Marketing",
      desc: "Build brand awareness & engage your audience effectively lorem ipsum dolor sit amet consectetur adip.",
    },
    {
      title: "Content Marketing",
      desc: "Build brand awareness & engage your audience effectively lorem ipsum dolor sit amet consectetur adip.",
    },
    {
      title: "PPC Advertising",
      desc: "Build brand awareness & engage your audience effectively lorem ipsum dolor sit amet consectetur adip.",
    },
    {
      title: "Email Marketing",
      desc: "Build brand awareness & engage your audience effectively lorem ipsum dolor sit amet consectetur adip.",
    },
    {
      title: "Branding & Design",
      desc: "Build brand awareness & engage your audience effectively lorem ipsum dolor sit amet consectetur adip.",
    },
    {
      title: "Web Development",
      desc: "Build brand awareness & engage your audience effectively lorem ipsum dolor sit amet consectetur adip.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      style={{
        background: "white",
        color: "black",
        textAlign: "center",
        padding: "120px 60px",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(-80px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(-120px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @media (max-width: 1024px) {
          .grid3 { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 700px) {
          .grid3 { grid-template-columns: repeat(1, 1fr); }
        }

        .view-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: rgba(250, 249, 247, 0.3);
          border-radius: 50px;
          padding: 12px 24px;
          font-weight: 600;
          text-decoration: none;
          box-shadow: 0 0 15px rgba(219, 138, 8, 0.25);
          transition: all 0.3s ease;
          width: 100%;
          max-width: 180px;
          margin: 0 auto;
        }

        .view-btn:hover {
          background: rgba(235, 136, 8, 0.5);
          box-shadow: 0 0 25px rgba(234, 130, 11, 0.5);
          transform: scale(1.03);
        }
      `}</style>

      {/* Heading */}
      <div
        style={{
          opacity: 0,
          animation: inView ? "slideUp 1s ease forwards" : "none",
        }}
      >
        <p style={{ color: "#e3890aff", fontWeight: 600, marginBottom: "10px" }}>
          Our Core Services
        </p>
        <h2
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            lineHeight: "1.2",
            color: "black",
            marginBottom: "70px",
          }}
        >
          Digital Solutions That Drive <br /> Real Results
        </h2>
      </div>

      {/* Services Grid */}
      <div
        className="grid3"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "40px",
          justifyItems: "center",
        }}
      >
        {services.map((srv, i) => (
          <div
            key={i}
            style={{
              background: "rgba(242, 234, 234, 0.95)",
              borderRadius: "18px",
              padding: "40px 35px",
              maxWidth: "360px",
              textAlign: "left",
              opacity: 0,
              animation: inView ? "slideLeft 0.9s ease forwards" : "none",
              animationDelay: `${i * 0.15}s`,
              boxShadow: "0 0 15px rgba(186, 89, 4, 0.1)",
            }}
          >
            {/* Icon */}
            <div
              style={{
                width: "55px",
                height: "55px",
                borderRadius: "14px",
                background: "rgba(80,40,160,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#cd7d06ff",
                fontSize: "26px",
                marginBottom: "20px",
              }}
            >
              ⚙️
            </div>

            <h3
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "10px",
                color: "black",
              }}
            >
              {srv.title}
            </h3>

            <p
              style={{
                color: "ff5722",
                marginBottom: "30px",
                fontSize: "15px",
                lineHeight: "1.6",
              }}
            >
              {srv.desc}
            </p>

            {/* View Button */}
            <a href="#" className="view-btn">
              <span style={{color: "#ff5722"}}>View Details</span>
              <span style={{ fontSize: "18px", color:"#ff5722" }}>➜</span>
            </a>
          </div>
        ))}
      </div>

      {/* Footer */}
      <p
        style={{
          marginTop: "90px",
          color: "black",
          fontSize: "15px",
        }}
      >
        Need a custom solution? Let’s create a strategy tailored for your business.{" "}
        <a
          href="#"
          style={{
            color: "#ff5722",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Get a Free Strategy Call
        </a>
      </p>
    </section>
  );
};

export default CoreServices;
