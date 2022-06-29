/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";
import registerSchema from "../../validation/register.validation";
import Joi from "joi-browser";

const RegisterPage = () => {
  const [first_Name, setFirstName] = useState("");
  // const [last_Name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_Password, setConfirmPassword] = useState("");
  const [isBiz, setIsBiz] = useState(false);
  const [show_Pass_Err_Msg, setShowPassErrMsg] = useState(false);

  const handle_FirstName_Change = (event) => {
    setFirstName(event.target.value);
  };
  // const handle_LastName_Change = (event) => {
  //   setLastName(event.target.value);
  // };
  const handle_Email_Change = (event) => {
    setEmail(event.target.value);
  };
  const handle_Password_Change = (event) => {
    setPassword(event.target.value);
  };
  const handle_ConfirmPassword_Change = (event) => {
    setConfirmPassword(event.target.value);
  };
  const handle_Checkbox_Change = (event) => {
    console.log(event.target.checked);
    setIsBiz(event.target.checked);
  };
  const handle_Submit = (event) => {
    event.preventDefault();
    if (password !== confirm_Password) {
      setShowPassErrMsg(true);
    }
    const validated_Value = Joi.validate(
      { first_Name, email, password, confirm_Password, isBiz },
      registerSchema,
      { abortEarly: false }
    );
    const { error } = validated_Value;
    if (error) {
      console.log(error);
      //invalid email or password
    } else {
      axios
        //can also use .post("/users")
        .post("http://localhost:3002/api/users", {
          name: first_Name,
          email: email,
          password: password,
          biz: isBiz,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log("error form axios", err));
    }
  };
  return (
    <form className="row g-3" onSubmit={handle_Submit}>
      <div className="col-md-6">
        <label htmlFor="input_FirstName" className="form-label">
          First Name:
        </label>
        <input
          type="text"
          className="form-control"
          id="input_FirstName"
          value={first_Name}
          onChange={handle_FirstName_Change}
        />
      </div>
      {/* <div className="col-md-6">
        <label htmlFor="input_LastName" className="form-label">
          Last Name:
        </label>
        <input
          type="text"
          className="form-control"
          id="input_LastName"
          value={last_Name}
          onChange={handle_LastName_Change}
        />
      </div> */}
      <div className="col-md-6">
        <label htmlFor="input_Email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          className="form-control"
          id="input_Email"
          value={email}
          onChange={handle_Email_Change}
        />
      </div>
      <div className="col-md-3">
        <label htmlFor="input_Password" className="form-label">
          Password:
        </label>
        <input
          type="password"
          className="form-control"
          id="input_Password"
          value={password}
          onChange={handle_Password_Change}
        />
        {password.length < 8 && (
          <div id="emailHelp" className="form-text">
            please enter your password with at least 6 digits
          </div>
        )}
      </div>

      <div className="col-md-3">
        <label htmlFor="input_ConfirmPassword" className="form-label">
          Confirm Password:
        </label>
        <input
          type="password"
          className="form-control"
          id="input_ConfirmPassword"
          value={confirm_Password}
          onChange={handle_ConfirmPassword_Change}
        />
      </div>
      {/* {password !== confirm_Password && (
        <div className="alert alert-danger" role="alert">
          The Password and confirm Password must be the same
        </div>
      )} */}
      {show_Pass_Err_Msg && (
        <div className="alert alert-danger" role="alert">
          The Password and confirm Password must be the same
        </div>
      )}
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
          onChange={handle_Checkbox_Change}
          checked={isBiz}
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>

      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </div>
    </form>
  );
};
export default RegisterPage;
