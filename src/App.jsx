/* eslint-disable no-unused-vars */
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/navbar.component";
import TestComponent from "./components/test.component";
import LoginPage from "./pages/login/Login.page";
import RegisterPage from "./pages/register/Register.page";

function App() {
  return (
    <div className="container">
      <Navbar></Navbar>
      <TestComponent></TestComponent>
      {/* <LoginPage></LoginPage> */}
      <RegisterPage></RegisterPage>
    </div>
  );
}

export default App;
