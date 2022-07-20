/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import logo from "./logo.svg";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import Navbar from "./components/navbar/navbar.component";
import TestComponent from "./components/test.component";
import LoginPage from "./pages/login/Login.page";
import RegisterPage from "./pages/register/Register.page";
import ProductPage from "./pages/products/Products.page";
import UsersPage from "./pages/users/Users.page";
import AmazonFakePage from "./pages/amazonFake/amazonFake.page";
import FirstAjaxPage from "./pages/firstAjax/firstAjaxPage.page";
import { ToastContainer } from "react-toastify";
import CardsPage from "./pages/cards/cards.page";
import UserCardsPage from "./pages/userCards/userCards.page";
import ClassWorkPage from "./pages/classWork/classWork.page";
import Counter from "./pages/tk_counterPage/counter.page";
import DisplayCounter from "./pages/tk_counterPage/displayCounter.page";
import HomePage from "./pages/homePage/homePage.page";
import NotFoundPage from "./pages/notFoundPage/notFoundPage.page";
import LogOutPage from "./pages/logout/logout.page";
import QueryParamsPage from "./pages/queryParames/queryParames.page";
import AuthGuardRoute from "./components/userItem/authGuardRoute.component";
import { authActions } from "./store/auth";
import useAfterLogin from "./hooks/useafterLogin";
import FatherChildCom from "./pages/tk_FatherCaildCom/fatherCaildCom.page";

function App() {
  const dispatch = useDispatch();
  const afterLogin = useAfterLogin();
  useEffect(() => {
    axios
      .post("/auth/logInByToken")
      .then((res) => {
        console.log(res);
        const token = localStorage.getItem("token");
        afterLogin(token);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container">
      <Navbar></Navbar>
      <ToastContainer></ToastContainer>
      {/* <TestComponent></TestComponent> */}
      {/* <ProductPage></ProductPage> */}
      {/* <AmazonFakePage></AmazonFakePage> */}
      {/* <FirstAjaxPage></FirstAjaxPage> */}
      {/* <CardsPage></CardsPage> */}
      {/* <ClassWorkPage></ClassWorkPage> */}
      {/* <Counter></Counter> */}
      {/* <DisplayCounter></DisplayCounter> */}
      <FatherChildCom></FatherChildCom>
      <Switch>
        <Route path="/" exact>
          <HomePage></HomePage>
        </Route>
        <AuthGuardRoute
          path="/dashboard"
          component={UserCardsPage}
        ></AuthGuardRoute>
        <Route path="/login">
          <LoginPage></LoginPage>
        </Route>
        <Route path="/register">
          <RegisterPage></RegisterPage>
        </Route>
        <Route path="/logout">
          <LogOutPage></LogOutPage>
        </Route>
        <Route path="/qparams">
          <QueryParamsPage></QueryParamsPage>
        </Route>
        <AuthGuardRoute
          path="/create-card"
          component={CardsPage}
        ></AuthGuardRoute>
        <Route path="*">
          <NotFoundPage></NotFoundPage>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
