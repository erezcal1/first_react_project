/* eslint-disable jsx-a11y/anchor-is-valid */
import "./navbar.component.css";
import { useSelector } from "react-redux";
import { Fragment, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

const Navbar = () => {
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const userData = useSelector((state) => state.auth.userData);
  const [search, setSearch] = useState("");
  const history = useHistory();

  // NavLink replace the a tag
  //when using a tag, it will refresh the page and all the js will be reloaded
  //when using NavLink, it will not refresh the page and all the js we be saved
  // NavLink is the same as Link but only for the navbar
  // When NavLink detects that the URL is the same as the current URL, it will add the class "active" to the link
  const showLogIn = () => {
    if (userData.email) {
      return (
        <Fragment>
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              {userData.email}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/dashboard">
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/create-card">
              Create Business Card
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/logout">
              Logout
            </NavLink>
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

  const searchChange = (event) => {
    setSearch(event.target.value);
  };

  const searchSubmit = (event) => {
    event.preventDefault();
    history.push(`/qparams?q=${search}`);
  };

  return (
    //rename from class to className
    <nav
      className={`navbar navbar-expand-lg navbar-light mb-2 ${
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
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
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
              value={search}
              onChange={searchChange}
            />
            <button
              className="btn btn-danger"
              type="submit"
              onClick={searchSubmit}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
