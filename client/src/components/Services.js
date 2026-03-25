import { useState, useEffect } from "react";
import residential from "../assets/residential.jpg";
import modular from "../assets/modular.jpg";
import falseCeiling from "../assets/false.jpg";
import office from "../assets/office.jpg";
import turnkey from "../assets/turnkey.jpg";
import renovation from "../assets/renovation.jpg";

const services = [
  { title: "Residential Interiors", img: residential },
  { title: "Modular Kitchen", img: modular },
  { title: "False Ceiling", img: falseCeiling },
  { title: "Office Design", img: office },
  { title: "Turnkey Projects", img: turnkey },
  { title: "Renovation", img: renovation }
];

export default function Services() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="services" style={styles.section}>
      <div style={styles.container}>
        
        <h2
          style={{
            ...styles.heading,
            fontSize: isMobile ? "26px" : "36px"
          }}
        >
          Our Services
        </h2>

        <div
          style={{
            ...styles.grid,
            gridTemplateColumns: isMobile
              ? "1fr"
              : "repeat(auto-fit, minmax(250px, 1fr))"
          }}
        >
          {services.map((s, i) => (
            <div key={i} style={styles.card}>
              
              <img
                src={s.img}
                alt={s.title}
                style={{
                  ...styles.image,
                  height: isMobile ? "200px" : "220px"
                }}
              />

              <div style={styles.overlay}>
                <h3 style={styles.title}>{s.title}</h3>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "80px 15px",
    background: "#f8fafc"
  },

  container: {
    maxWidth: "1100px",
    margin: "auto"
  },

  heading: {
    textAlign: "center",
    marginBottom: "40px",
    color: "#0f172a"
  },

  grid: {
    display: "grid",
    gap: "20px"
  },

  card: {
    position: "relative",
    borderRadius: "12px",
    overflow: "hidden",
    cursor: "pointer",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
  },

  image: {
    width: "100%",
    objectFit: "cover",
    transition: "0.4s"
  },

  overlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    background: "rgba(0,0,0,0.6)",
    color: "#fff",
    padding: "12px",
    textAlign: "center"
  },

  title: {
    margin: 0,
    fontSize: "16px"
  }
};