/* eslint-disable no-unused-vars */
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/navbar.component";
import TestComponent from "./components/test.component";

function App() {
  return (
    <div className="container">
      <Navbar></Navbar>
      <TestComponent></TestComponent>
    </div>
  );
}

export default App;
