import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    purpose: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.purpose.trim()) newErrors.purpose = "Purpose is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 2500);
      setFormData({ fullName: "", purpose: "", email: "" });
    }
  };

  // Internal CSS
  const styles = {
    section: {
      backgroundColor: "#000",
      minHeight: "80vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "50px 20px",
      color: "white",
      fontFamily: "Poppins, sans-serif",
    },
    container: {
      background: "linear-gradient(90deg, #111111, #0b0b0b, #111111)",
      border: "1px solid rgba(168, 85, 247, 0.4)",
      boxShadow: "0 0 25px rgba(168, 85, 247, 0.3)",
      borderRadius: "25px",
      padding: "60px 40px",
      maxWidth: "900px",
      width: "100%",
      textAlign: "center",
    },
    heading: {
      fontSize: "32px",
      fontWeight: "700",
      marginBottom: "15px",
    },
    highlight1: { color: "#a855f7" },
    highlight2: { color: "#c084fc" },
    paragraph: {
      color: "#a1a1aa",
      fontSize: "16px",
      marginBottom: "40px",
    },
    form: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      backgroundColor: "#0e0e0e",
      border: "1px solid #27272a",
      borderRadius: "9999px",
      padding: "10px",
      boxShadow: "inset 0 0 10px rgba(0,0,0,0.3)",
      gap: "10px",
    },
    input: {
      flex: "1 1 200px",
      minWidth: "200px",
      background: "transparent",
      border: "none",
      outline: "none",
      color: "white",
      padding: "12px 18px",
      fontSize: "14px",
      borderRadius: "9999px",
    },
    button: {
      background: "linear-gradient(90deg, #7e22ce, #9333ea)",
      color: "white",
      border: "none",
      padding: "12px 22px",
      borderRadius: "9999px",
      fontWeight: "600",
      fontSize: "15px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      transition: "0.3s",
    },
    buttonHover: {
      background: "linear-gradient(90deg, #9333ea, #a855f7)",
    },
    errorText: {
      color: "#ef4444",
      fontSize: "13px",
      marginTop: "10px",
    },
  };

  return (
    <section ref={ref} style={styles.section}>
      <div style={styles.container}>
        {/* Animated Heading */}
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
          style={styles.heading}
        >
          Stay <span style={styles.highlight1}>Ahead</span> in{" "}
          <span style={styles.highlight2}>Digital Marketing</span>
        </motion.h2>

        {/* Animated Paragraph */}
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          style={styles.paragraph}
        >
          Get exclusive insights, trends, and strategies delivered straight to
          your inbox. Subscribe now!
        </motion.p>

        {/* Animated Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ x: 100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
          style={styles.form}
        >
          <input
            type="text"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Why are you reaching out?"
            value={formData.purpose}
            onChange={(e) =>
              setFormData({ ...formData, purpose: e.target.value })
            }
            style={styles.input}
          />
          <input
            type="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            {submitted ? "Subscribed!" : "Subscribe Now"} <ArrowRight size={16} />
          </button>
        </motion.form>

        {/* Validation Messages */}
        {Object.values(errors).length > 0 && (
          <div style={styles.errorText}>
            {Object.values(errors).map((err, i) => (
              <div key={i}>{err}</div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
