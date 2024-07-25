import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ selectedTab, setSelectedTab }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Blogs App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li
                className="nav-item"
                onClick={() => {
                  setSelectedTab("Home");
                }}
              >
                <Link
                  className={`nav-link ${selectedTab == "Home" && "active"}`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li
                className="nav-item"
                onClick={() => {
                  setSelectedTab("Blogs");
                }}
              >
                <Link
                  className={`nav-link ${selectedTab == "Blogs" && "active"}`}
                  to="/blogs"
                >
                  Blogs
                </Link>
              </li>
              <li
                className="nav-item"
                onClick={() => {
                  setSelectedTab("Users");
                }}
              >
                <Link
                  className={`nav-link ${selectedTab == "Blogs" && "active"}`}
                  to="/users"
                >
                  Users
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                id="searchInput"
              />
              <button className="btn btn-outline-success" type="button">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
