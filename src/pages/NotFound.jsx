import React from "react";

const NotFound = () => {
  const goHome = () => {
    window.location.href = "/";
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404</h1>
      <p style={styles.paragraph}>
        Oops! The page you are looking for does not exist.
      </p>
      <button style={styles.button} onClick={goHome}>
        Go Home
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
    background: "radial-gradient(circle, #0f0c29, #302b63, #24243e)",
    color: "white",
    textAlign: "center",
    overflow: "hidden",
  },
  heading: {
    fontSize: "8rem",
    letterSpacing: "5px",
    animation: "glitch 1s infinite alternate",
  },
  paragraph: {
    fontSize: "1.5rem",
    marginTop: "10px",
    opacity: 0.8,
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "1.2rem",
    color: "white",
    background: "#ff0080",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    transition: "0.3s",
  },
};

// Adding glitch animation via CSS in JS
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(
  `
  @keyframes glitch {
    0% { text-shadow: 5px 5px red, -5px -5px blue; }
    100% { text-shadow: -5px -5px red, 5px 5px blue; }
  }
`,
  styleSheet.cssRules.length
);

export default NotFound;
