import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to cryptosky platform
        </p>
        <a
          className="App-link"
          href="https://cryptoskyplatform.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          About us
        </a>
      </header>
    </div>
  );
}

export default App;
