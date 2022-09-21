import { React, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting'

function App() {
  const [contador, setContador] = useState(1600);
  const increase = () => {
    setContador(count => count + 50);
  };
  const decrease = () => {
    setContador(count => count - 50);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting name='Lolo' age="50"></Greeting>
        <p>
          Edit <code>src/App.js</code> and save to reload....
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
          <button onClick={increase}>Boton</button>
          <button onClick={decrease}>Boton</button>
          <p>
            {contador}
          </p>
      </header>
    </div>
  );
}

export default App;
