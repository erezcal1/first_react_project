import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handle_Email_Change = (event) => {
    setEmail(event.target.value);
  };
  const handle_Password_Change = (event) => {
    setPassword(event.target.value);
  };
  const handle_Submit = (event) => {
    event.preventDefault();
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
          onChange={handle_Email_Change}
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
          onChange={handle_Password_Change}
        />
        {password.length < 6 && (
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
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
export default LoginPage;
