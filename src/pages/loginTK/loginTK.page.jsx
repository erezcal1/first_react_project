import axios from "axios";
import Joi from "joi-browser";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { authActions } from "../../store/auth";
import { useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";
import loginSchema from "../../validation/login.validation";

const LoginTKPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const email_Change = (ev) => {
    setEmail(ev.target.value);
  };
  const password_Change = (ev) => {
    setPassword(ev.target.value);
  };

  const handle_Submit = (ev) => {
    if (ev) ev.preventDefault();
    const validate = Joi.validate({ email, password }, loginSchema, {
      abortEarly: false,
    });
    const { error } = validate;
    if (error) {
      toast.error("Make Sure You Follow The Rules", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      axios
        .post("/auth", {
          email,
          password,
        })
        .then(({ data }) => {
          localStorage.setItem("token", data.token);
          toast.success("🦄 Logged In", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          dispatch(authActions.login()); //update redux state
          dispatch(authActions.updateUserData(jwt_decode(data.token)));
          history.push("/dashboard");
        })
        .catch((err) => {
          toast.error("🦄 Invalid Email Or Password", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    }
  };

  return (
    <form onSubmit={handle_Submit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={email}
          onChange={email_Change}
        />
        {/* if state */}
        {!email && (
          <div id="emailHelp" className="form-text">
            please enter your email address
          </div>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          value={password}
          onChange={password_Change}
        />
        {password.length < 6 && (
          <div id="emailHelp" className="form-text">
            please enter your password with at least 6 digits
          </div>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
export default LoginTKPage;
