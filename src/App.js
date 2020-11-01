import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>ComIT - Teamwork</p>
        <a  className="Github-link"
            href="https://github.com/ledung1974/comit-teamwork.git"
            target="_blank"
            rel="noopener noreferrer"
        >
            ComIt-Teamwork GitHub: Le Dung - Pious George - Ikenna Ohia 
        </a>
      </header>
    </div>
  );
}

export default App;
