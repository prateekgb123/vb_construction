import { useEffect, useState } from "react";
import axios from "axios";

export default function Hero() {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    axios.get("https://vb-construction.onrender.com/api/media")
      .then(res => setData(res.data));

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imagesOnly = data.filter(item => item.type === "image");

  useEffect(() => {
    if (imagesOnly.length === 0) return;

    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % imagesOnly.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [imagesOnly]);

  return (
    <section
      id="home"
      style={{
        ...styles.hero,
        height: isMobile ? "85vh" : "100vh"
      }}
    >
      {imagesOnly.length > 0 && (
        <img
          src={imagesOnly[index].url}
          alt="hero"
          style={{
            ...styles.image,
            transform: isMobile ? "scale(1.02)" : "scale(1.05)"
          }}
        />
      )}

      <div style={styles.overlay}></div>

      <div
        style={{
          ...styles.content,
          padding: isMobile ? "0 15px" : "0 20px"
        }}
      >
        <h1
          style={{
            ...styles.title,
            fontSize: isMobile ? "32px" : "clamp(40px, 6vw, 72px)"
          }}
        >
          Transform Your Space
        </h1>

        <p
          style={{
            ...styles.subtitle,
            fontSize: isMobile ? "14px" : "18px"
          }}
        >
          Modern interiors with elegance & style
        </p>

        <button
          style={{
            ...styles.button,
            padding: isMobile ? "10px 24px" : "12px 32px",
            fontSize: isMobile ? "14px" : "16px"
          }}
        >
          Explore
        </button>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    position: "relative",
    width: "100%",
    marginTop: "70px",
    overflow: "hidden"
  },

  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 6s ease"
  },

  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(to bottom, rgba(15,23,42,0.6), rgba(0,0,0,0.7))"
  },

  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "#fff",
    maxWidth: "800px"
  },

  title: {
    fontWeight: "700",
    lineHeight: "1.2",
    letterSpacing: "1px",
    textShadow: "0 8px 25px rgba(0,0,0,0.6)"
  },

  subtitle: {
    margin: "15px 0",
    color: "#e5e7eb"
  },

  button: {
    background: "linear-gradient(135deg, #e94560, #ff6b81)",
    border: "none",
    color: "#fff",
    borderRadius: "30px",
    cursor: "pointer",
    boxShadow: "0 8px 25px rgba(233,69,96,0.5)",
    transition: "0.3s"
  }
};