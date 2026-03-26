import { useEffect, useState } from "react";
import axios from "axios";

export default function Gallery() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/media")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching media:", err);
        setLoading(false);
      });

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="gallery" style={styles.section}>
      <h2
        style={{
          ...styles.heading,
          fontSize: isMobile ? "24px" : "32px",
        }}
      >
        Our Work
      </h2>

      {loading ? (
        <p style={styles.message}>Loading...</p>
      ) : data.length === 0 ? (
        <p style={styles.message}>No media found</p>
      ) : (
        <div
          style={{
            ...styles.grid,
            gridTemplateColumns: isMobile
              ? "1fr"
              : "repeat(auto-fit, minmax(250px, 1fr))",
          }}
        >
          {data.map((item, i) => {
            const optimizedUrl = item.url.replace(
              "/upload/",
              "/upload/f_auto,q_auto/"
            );

            return (
              <div key={i} style={styles.card}>
                {item.type === "image" ? (
                  <img
                    src={optimizedUrl}
                    alt="gallery"
                    style={{
                      ...styles.media,
                      height: isMobile ? "200px" : "250px",
                    }}
                  />
                ) : (
                  <video
                    style={{
                      ...styles.media,
                      height: isMobile ? "200px" : "250px",
                    }}
                    controls
                  >
                    <source src={item.url} type="video/mp4" />
                  </video>
                )}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

const styles = {
  section: {
    padding: "60px 15px",
    textAlign: "center",
  },

  heading: {
    marginBottom: "25px",
  },

  message: {
    fontSize: "14px",
    color: "#64748b",
  },

  grid: {
    display: "grid",
    gap: "15px",
  },

  card: {
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    transition: "0.3s",
  },

  media: {
    width: "100%",
    objectFit: "cover",
  },
};