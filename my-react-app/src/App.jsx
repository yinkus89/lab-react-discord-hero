// src/App.jsx
import "./App.css";
import discordLogo from "./assets/discord-logo-white.png";
import menuIcon from "./assets/menu-icon.png";
import backgroundImage from "./assets/discord-background.png";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        padding: "20px",
      }}
    >
      <img
        src={discordLogo}
        alt="Discord Logo"
        style={{ marginBottom: "20px" }}
      />
      <h1 style={{ fontFamily: "Poppins", fontSize: "48px" }}>
        Welcome to Discord
      </h1>
      <p style={{ fontFamily: "Roboto", fontSize: "24px" }}>
        Your place to talk and hang out.
      </p>
      <button
        style={{
          backgroundColor: "#5865F2",
          border: "none",
          color: "white",
          padding: "12px 24px",
          borderRadius: "8px",
          fontSize: "18px",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        Get Started
      </button>
    </div>
  );
}

export default App;
