import logo from '../../images/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Birthday List 🔜
        </p>
        <a
          className="App-link"
          href="https://en.wikipedia.org/wiki/Birthday_problem"
        >
          Read Birthday problem
        </a>
      </header>
    </div>
  );
}

export default App;
