import { useState, useEffect } from "react";
import logo from "../assets/logo.jpg";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav style={styles.nav}>
      
      {/* LEFT */}
      <div style={styles.left}>
        <img src={logo} alt="logo" style={styles.logoImg} />
        <h2 style={styles.logoText}>VB Interiors</h2>
      </div>

      {/* DESKTOP MENU */}
      {!isMobile && (
        <div style={styles.menu}>
          <a href="#home" style={styles.link}>Home</a>
          <a href="#about" style={styles.link}>About</a>
          <a href="#gallery" style={styles.link}>Gallery</a>
          <a href="#contact" style={styles.link}>Contact</a>
        </div>
      )}

      {/* HAMBURGER */}
      {isMobile && (
        <div style={styles.hamburger} onClick={() => setOpen(!open)}>
          ☰
        </div>
      )}

      {/* MOBILE MENU */}
      {isMobile && open && (
        <div style={styles.mobileMenu}>
          <a href="#home" style={styles.mobileLink} onClick={()=>setOpen(false)}>Home</a>
          <a href="#about" style={styles.mobileLink} onClick={()=>setOpen(false)}>About</a>
          <a href="#gallery" style={styles.mobileLink} onClick={()=>setOpen(false)}>Gallery</a>
          <a href="#contact" style={styles.mobileLink} onClick={()=>setOpen(false)}>Contact</a>
        </div>
      )}

    </nav>
  );
}

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    width: "100%",
    height: "65px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
    background: "#0f172a",
    zIndex: 1000
  },

  left: {
    display: "flex",
    alignItems: "center",
    gap: "10px"
  },

  logoImg: {
    width: "40px",
    height: "40px",
    objectFit: "contain"
  },

  logoText: {
    color: "#fff",
    fontSize: "22px",
    fontWeight: "bold",
    margin: 0
  },

  menu: {
    display: "flex",
    gap: "25px"
  },

  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "15px"
  },

  hamburger: {
    fontSize: "26px",
    color: "#fff",
    cursor: "pointer"
  },

  mobileMenu: {
    position: "absolute",
    top: "65px",
    left: 0,
    width: "100%",
    background: "#0f172a",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px 0",
    gap: "20px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.3)"
  },

  mobileLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px"
  }
};