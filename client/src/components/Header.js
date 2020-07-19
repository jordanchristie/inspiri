import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

const Header = ({ user }) => {
  return (
    <header>
      <NavBar>
        <Link to="/" className="brand-logo">
          Inspiri
        </Link>

        <ul>
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
      </NavBar>
    </header>
  );
};

const mapStateToProps = ({ user }) => {
  return { user };
};

export default connect(mapStateToProps)(Header);

const NavBar = styled.nav`
  color: #fff;
  background: #ee6e73;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 1em;

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  li {
    display: inline;
    margin: 1rem;
  }
`;
