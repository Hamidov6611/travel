import React from "react";
import { useNavigate } from "react-router-dom";
import './navbar.css'
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" onClick={() => navigate('/')}>
            TravelBook
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav w-100 d-flex nav1">
              <a
                className="nav-link active w-75"
                aria-current="page"
                onClick={() => navigate("/add")}
              >
                Add
              </a>
              <div className="btn-group">
              <button
                className="btn btn-outline-primary "
                aria-current="page"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <a
                className="btn btn-outline-success "
                aria-current="page"
                onClick={() => navigate("/register")}
              >
                Register
              </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
