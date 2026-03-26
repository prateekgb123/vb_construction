import { useState, useEffect } from "react";

export default function About() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>

        <h2
          style={{
            ...styles.heading,
            fontSize: isMobile ? "26px" : "36px",
          }}
        >
          About VB Interiors
        </h2>

        {/* TOP ROW */}
        <div
          style={{
            ...styles.row,
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          {/* LEFT */}
          <div style={styles.left}>
            <p style={styles.text}>
              VB Interiors is a Bangalore-based interior design and construction
              company committed to transforming spaces into elegant environments.
            </p>

            <p style={styles.text}>
              We specialize in residential and commercial interiors with modern,
              functional, and customized designs.
            </p>

            <p style={styles.text}>
              From concept to execution, we deliver complete solutions with
              quality and precision.
            </p>

            {/* WHY */}
            <div style={styles.extraSection}>
              <h3 style={styles.subHeading}>Why Choose Us</h3>
              <ul style={styles.list}>
                <li>✔ Customized designs</li>
                <li>✔ Premium materials</li>
                <li>✔ On-time delivery</li>
                <li>✔ Experienced team</li>
                <li>✔ End-to-end solutions</li>
              </ul>
            </div>

            {/* STATS */}
            <div
              style={{
                ...styles.stats,
                flexDirection: "row", // always row
                justifyContent: "space-between",
                textAlign: "center",
              }}
            >
              <div>
                <h3>50+</h3>
                <p>Projects</p>
              </div>
              <div>
                <h3>5+</h3>
                <p>Years</p>
              </div>
              <div>
                <h3>100%</h3>
                <p>Satisfaction</p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div style={styles.right}>
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6"
              alt="interior"
              style={{
                ...styles.image,
                position: isMobile ? "static" : "sticky",
              }}
            />
          </div>
        </div>

        {/* 🔥 NEW SECTION BELOW IMAGE */}
        <div
  style={{
    ...styles.bottomGrid,
    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
  }}
>
          {/* SERVICES */}
          <div style={styles.extraCard}>
            <h3 style={styles.subHeading}>What We Offer</h3>
            <ul style={styles.list}>
              <li>✔ Residential Interiors</li>
              <li>✔ Office Interiors</li>
              <li>✔ Modular Kitchen</li>
              <li>✔ 3D Design</li>
              <li>✔ Turnkey Projects</li>
              <li>✔ Renovation</li>
            </ul>
          </div>

          {/* PROCESS */}
          <div style={styles.extraCard}>
            <h3 style={styles.subHeading}>Our Process</h3>
            <ul style={styles.list}>
              <li>1️⃣ Requirement Discussion</li>
              <li>2️⃣ Design Planning</li>
              <li>3️⃣ Material Selection</li>
              <li>4️⃣ Execution</li>
              <li>5️⃣ Delivery</li>
            </ul>
          </div>
        </div>

        {/* CARDS */}
       <div style={styles.grid}>
  <div style={styles.card}>
    <h3>Our Story</h3>
    <p>
      VB Interiors was founded with a vision to transform everyday spaces into
      elegant and functional environments. What started as a small initiative
      has grown into a trusted name in interior design, delivering high-quality
      solutions tailored to client needs.
    </p>
  </div>

  <div style={styles.card}>
    <h3>Our Mission</h3>
    <p>
      Our mission is to design and deliver modern, innovative, and high-quality
      interiors that perfectly balance aesthetics and functionality. We aim to
      exceed client expectations through creativity, precision, and timely execution.
    </p>
  </div>

  <div style={styles.card}>
    <h3>Our Vision</h3>
    <p>
      We aspire to become a leading interior design brand known for excellence,
      innovation, and reliability. Our vision is to create inspiring spaces that
      enhance lifestyles and leave a lasting impression.
    </p>
  </div>
</div>

      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "80px 20px",
    background: "#f1f5f9",
  },

  container: {
    maxWidth: "1100px",
    margin: "auto",
  },

  heading: {
    textAlign: "center",
    marginBottom: "50px",
    color: "#0f172a",
    fontWeight: "600",
  },

  row: {
    display: "flex",
    gap: "60px",
    alignItems: "center", // 🔥 center alignment fix
    marginBottom: "50px",
  },

  left: {
    flex: 1.2,
  },

  right: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },

  image: {
    width: "100%",
    maxWidth: "420px",
    borderRadius: "16px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
  },

  text: {
    fontSize: "15px",
    color: "#475569",
    lineHeight: "1.8",
    marginBottom: "14px",
  },

stats: {
  display: "flex",
  justifyContent: "space-between",
  gap: "10px",
  marginTop: "25px",
  fontWeight: "bold",
},

  extraSection: {
    marginTop: "25px",
  },

  subHeading: {
    fontSize: "18px",
    marginBottom: "12px",
    color: "#0f172a",
    fontWeight: "600",
  },

  list: {
    lineHeight: "1.9",
    color: "#475569",
  },

  bottomGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "30px",
    marginTop: "20px",
    marginBottom: "50px",
  },

  extraCard: {
    background: "#ffffff",
    padding: "25px",
    borderRadius: "14px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
    textAlign: "left",
    transition: "0.3s",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "25px",
  },

 card: {
  background: "#ffffff",
  padding: "25px",
  borderRadius: "16px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  textAlign: "center",
  lineHeight: "1.6",
  transition: "0.3s",
}
};