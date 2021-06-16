import logo from './logo.svg';
import './App.css';
var ListaSimple = require('./EstructurasLineales/Lista_Simple');
var listasimple = new ListaSimple();
listasimple.agregar(5);
listasimple.agregar(10);
listasimple.mostrar();
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editar <code>src/App.js</code> guarde y luego recargue
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
