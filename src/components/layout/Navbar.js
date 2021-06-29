import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <a class="navbar-brand" href="#">
          CRUD
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link" to="/">
              Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/about">
              About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/contact">
              Contact
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/users/add">
        <button class="btn btn-outline-light">Add User</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
