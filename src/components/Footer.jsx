import React from "react";
import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        background:
          "radial-gradient(circle at top center, #111 0%, #000 100%)",
        borderTop: "1px solid rgba(168, 85, 247, 0.4)",
        boxShadow: "0 -2px 25px rgba(168, 85, 247, 0.2)",
        color: "#ccc",
        fontFamily: "Poppins, sans-serif",
        padding: "70px 80px 40px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1.5fr",
          gap: "60px",
        }}
      >
        {/* ===== LOGO & DESCRIPTION ===== */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "15px",
            }}
          >
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "8px",
                background:
                  "linear-gradient(135deg, #a855f7 0%, #7e22ce 100%)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                fontWeight: "900",
                fontSize: "20px",
              }}
            >
              M
            </div>
            <div>
              <h2
                style={{
                  margin: 0,
                  color: "#fff",
                  fontSize: "22px",
                  fontWeight: "700",
                }}
              >
                marko
              </h2>
              <p
                style={{
                  margin: 0,
                  fontSize: "11px",
                  color: "#aaa",
                }}
              >
                Digital Marketing Agency
              </p>
            </div>
          </div>

          <h3
            style={{
              color: "#fff",
              fontWeight: "600",
              fontSize: "16px",
              marginBottom: "10px",
              lineHeight: "1.5",
            }}
          >
            Driving Digital Growth with <br />
            Innovation & Strategy
          </h3>
          <p
            style={{
              fontSize: "13px",
              color: "#aaa",
              lineHeight: "1.7",
              margin: 0,
              maxWidth: "300px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut elit tellus
            luctus nec ullamcorper mattis pulvinar dapibus leo.
          </p>
        </div>

        {/* ===== QUICK LINKS ===== */}
        <div>
          <h4
            style={{
              color: "#fff",
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "20px",
            }}
          >
            Quick Links
          </h4>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {["Home", "About Us", "Services", "Case Studies", "Blog", "Contact Us"].map(
              (item, index) => (
                <li
                  key={index}
                  style={{
                    color: "#aaa",
                    fontSize: "13px",
                    cursor: "pointer",
                    transition: "color 0.3s",
                  }}
                  onMouseOver={(e) => (e.target.style.color = "#a855f7")}
                  onMouseOut={(e) => (e.target.style.color = "#aaa")}
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* ===== SERVICES ===== */}
        <div>
          <h4
            style={{
              color: "#fff",
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "20px",
            }}
          >
            Services
          </h4>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {[
              "Social Media Marketing",
              "SEO Optimization",
              "PPC Advertising",
              "Content Marketing",
              "Branding Strategy",
              "Email Marketing",
            ].map((service, index) => (
              <li
                key={index}
                style={{
                  color: "#aaa",
                  fontSize: "13px",
                  cursor: "pointer",
                  transition: "color 0.3s",
                }}
                onMouseOver={(e) => (e.target.style.color = "#a855f7")}
                onMouseOut={(e) => (e.target.style.color = "#aaa")}
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* ===== CONTACT INFO ===== */}
        <div>
          <h4
            style={{
              color: "#fff",
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "20px",
            }}
          >
            Contact Info
          </h4>
          <p style={{ fontSize: "13px", color: "#aaa", lineHeight: "1.8" }}>
            ashish@nexografix.com
            <br />
            +91 9661284439
            <br />
            123 Digital Street, New York, USA
          </p>

          <h4
            style={{
              color: "#fff",
              fontSize: "16px",
              fontWeight: "600",
              marginTop: "25px",
              marginBottom: "12px",
            }}
          >
            Social Media
          </h4>
          <div style={{ display: "flex", gap: "10px" }}>
            {[FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn].map(
              (Icon, i) => (
                <div
                  key={i}
                  style={{
                    background: "#0f0f0f",
                    border: "1px solid rgba(168,85,247,0.5)",
                    color: "#a855f7",
                    width: "34px",
                    height: "34px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "all 0.3s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = "#a855f7";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = "#0f0f0f";
                    e.currentTarget.style.color = "#a855f7";
                  }}
                >
                  <Icon size={14} />
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* ===== BOTTOM BAR ===== */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          marginTop: "50px",
          paddingTop: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          color: "#888",
          fontSize: "13px",
        }}
      >
        <span>
          © 2025 <span style={{ color: "#a855f7" }}>NexoGrafix</span>. All
          Rights Reserved.
        </span>
        <div style={{ display: "flex", gap: "25px" }}>
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
