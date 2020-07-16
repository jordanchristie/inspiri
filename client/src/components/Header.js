import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import background from "../assets/images/background.jpg";

const Header = ({ user }) => {
  return (
    <header>
      <nav className="nav-wrapper">
        <Link to="/" className="brand-logo">
          Inspiri
        </Link>
        <span data-target="slide-out" className="sidenav-trigger">
          <i className="fa fa-bars fa-2x"></i>
        </span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/quotes">Quotes</Link>
          </li>
          <li>
            <Link to="/journal">Journal</Link>
          </li>
          <li>
            <Link to="/mindfulness">Mindfulness</Link>
          </li>
          {Object.keys(user).length ? (
            <>
              <li>
                <Link to="/dashboard">Profile</Link>
              </li>

              <li>
                <a href="/api/logout">Logout</a>
              </li>
            </>
          ) : (
            <>
              <li>
                <a href="/api/logout">Login</a>
              </li>
              <li>
                <a href="/api/logout">Sign Up</a>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

const mapStateToProps = ({ user }) => {
  return { user };
};

export default connect(mapStateToProps)(Header);
