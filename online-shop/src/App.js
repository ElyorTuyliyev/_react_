import logo from "./logo.svg";
import "./App.css";
import Title from "./Title";
import Header from "./companents/header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>hello react js</p>
        <Title />
        <Header />
      </header>
    </div>
  );
}

export default App;
