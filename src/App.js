import logo from './data/logo/logo.png';
import arrow from "./data/logo/arrow.png";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

       
   
  
    <img src={arrow} className="App-arrow" alt="arrrow"/>
      </header>
        <p className="App-info">
    
        Resume/Portfolio coming soon!
        </p>
    </div>
  );
}

export default App;
