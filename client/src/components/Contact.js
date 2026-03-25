import { useState, useEffect } from "react";
import axios from "axios";

export default function Contact() {
  const [form, setForm] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmit = async () => {
    await axios.post("http://localhost:5000/api/contact", form);
    alert("Message Sent");
  };

  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>

        <h2 style={{
          ...styles.heading,
          fontSize: isMobile ? "26px" : "36px"
        }}>
          Contact Us
        </h2>

        <div style={{
          ...styles.wrapper,
          flexDirection: isMobile ? "column" : "row"
        }}>

          {/* FORM */}
          <div style={{
            ...styles.formCard,
            padding: isMobile ? "20px" : "30px"
          }}>
            <h3 style={styles.subHeading}>Send a Message</h3>

            <input
              placeholder="Your Name"
              style={styles.input}
              onChange={e => setForm({ ...form, name: e.target.value })}
            />

            <input
              placeholder="Your Email"
              style={styles.input}
              onChange={e => setForm({ ...form, email: e.target.value })}
            />

            <textarea
              placeholder="Your Message"
              style={styles.textarea}
              onChange={e => setForm({ ...form, message: e.target.value })}
            />

            <button style={styles.button} onClick={handleSubmit}>
              Send Message
            </button>
          </div>

          {/* INFO */}
          <div style={{
            ...styles.info,
            textAlign: isMobile ? "center" : "left"
          }}>
            <h3 style={styles.subHeading}>Get in Touch</h3>

            <p style={styles.infoText}>📍 Bangalore, India</p>
            <p style={styles.infoText}>📞 +91 98765 43210</p>
            <p style={styles.infoText}>📧 vbinteriors@email.com</p>

            <p style={styles.infoDesc}>
              We’d love to hear from you! Whether you have a question,
              project idea, or need consultation — feel free to reach out.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "80px 15px",
    background: "#0f172a",
    color: "#fff"
  },

  container: {
    maxWidth: "1100px",
    margin: "auto"
  },

  heading: {
    textAlign: "center",
    marginBottom: "40px"
  },

  wrapper: {
    display: "flex",
    gap: "30px"
  },

  formCard: {
    flex: 1,
    background: "#1e293b",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
  },

  subHeading: {
    marginBottom: "20px"
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "none",
    outline: "none",
    fontSize: "14px"
  },

  textarea: {
    width: "100%",
    padding: "12px",
    height: "120px",
    borderRadius: "8px",
    border: "none",
    outline: "none",
    marginBottom: "15px"
  },

  button: {
    width: "100%",
    padding: "12px",
    background: "#38bdf8",
    color: "#000",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold"
  },

  info: {
    flex: 1,
    padding: "10px"
  },

  infoText: {
    marginBottom: "10px",
    fontSize: "15px"
  },

  infoDesc: {
    marginTop: "20px",
    color: "#cbd5f5",
    lineHeight: "1.6",
    fontSize: "14px"
  }
};