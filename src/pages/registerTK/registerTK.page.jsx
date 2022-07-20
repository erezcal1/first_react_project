import Joi from "joi-browser";
import { useState } from "react";
import registerTkSchema from "../../validation/registerTK.validation";
import { toast } from "react-toastify";
import axios from "axios";

const RegisterTKPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [biz, setBiz] = useState(false);

  const handleName = (ev) => {
    setName(ev.target.value);
  };
  const handleEmail = (ev) => {
    setEmail(ev.target.value);
  };
  const handlePassword = (ev) => {
    setPassword(ev.target.value);
  };
  const handleBiz = (ev) => {
    setBiz(ev.target.checked);
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    const joiValidate = Joi.validate(
      { name, email, password, biz },
      registerTkSchema,
      { abortEarly: false }
    );
    const { error } = joiValidate;
    if (error) {
      for (let item of error.details) {
        toast.error(`${item.message.replaceAll('"', "")}`, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } else {
      axios
        .post("/users", {
          name: name,
          email: email,
          password: password,
          biz: biz,
        })
        .then((res) => {
          toast.success("🦄 Registered Move to logIn to Connect", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        })
        .catch((error) => {
          console.log(error);
          toast.error("Something Went Wrong", {
            position: "bottom-center",
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
    <form className="row g-3" onSubmit={handleSubmit}>
      <div className="col-md-6">
        <label htmlFor="input_FirstName" className="form-label">
          First Name:
        </label>
        <input
          type="text"
          className="form-control"
          id="input_FirstName"
          value={name}
          onChange={handleName}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="input_Email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          className="form-control"
          id="input_Email"
          value={email}
          onChange={handleEmail}
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
          onChange={handlePassword}
        />
        {password.length < 8 && (
          <div id="emailHelp" className="form-text">
            please enter your password with at least 6 digits
          </div>
        )}
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
          onChange={handleBiz}
          checked={biz}
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          biz checkbox
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
export default RegisterTKPage;
