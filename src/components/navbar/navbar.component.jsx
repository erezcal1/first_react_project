/* eslint-disable jsx-a11y/anchor-is-valid */
import "./navbar.component.css";
import { useSelector } from "react-redux";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const userData = useSelector((state) => state.auth.userData);

  // NavLink replace the a tag
  //when using a tag, it will refresh the page and all the js will be reloaded
  //when using NavLink, it will not refresh the page and all the js we be saved
  // NavLink is the same as Link but only for the navbar
  const showLogIn = () => {
    if (userData.email) {
      return (
        <Fragment>
          <li className="nav-item">
            <NavLink className="nav-link">{userData.email}</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link">Logout</NavLink>
          </li>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <li className="nav-item">
            <NavLink className="nav-link" to="/register">
              Register
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              login
            </NavLink>
          </li>
        </Fragment>
      );
    }
  };

  return (
    //rename from class to className
    <nav
      className={`navbar navbar-expand-lg navbar-light ${
        loggedIn ? "bg-success" : "bg-warning"
      }`}
    >
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="#">
          Navbar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/dashboard">
                Dashboard
              </NavLink>
            </li>
            {showLogIn()}
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
