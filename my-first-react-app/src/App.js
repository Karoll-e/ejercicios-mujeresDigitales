import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is my first <code>React project</code>.
        </p>
        <a
          className="App-link"
          href="https://supermario-game.com/es"
          target="_blank"
          rel="noopener noreferrer"
        >
          Play Super Mario Bros!
        </a>
      </header>
    </div>
  );
}

export default App;
