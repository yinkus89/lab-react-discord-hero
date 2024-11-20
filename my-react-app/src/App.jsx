import './App.css';
import heroImage from './assets/discord-background.png'; // Path to the hero image
import logo from './assets/discord-logo-white.png'; // Path to the Discord logo

function App() {
  return (
    <div className="App">
      <header className="hero-section">
        <img src={logo} alt="Discord Logo" className="discord-logo" />
        <h1>Join millions of players and friends on Discord</h1>
        <p>Text, voice, and video chat for gamers and communities.</p>
        <button>Download</button>
        <img src={heroImage} alt="Discord Hero" className="hero-image" />
      </header>
    </div>
  );
}

export default App;
