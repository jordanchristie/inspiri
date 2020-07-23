import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

const Header = ({ user }) => {
  return (
    <header>
      <NavBar>
        <NavTitle to="/" className="brand-logo">
          Inspiri
        </NavTitle>

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
  background: #ee6e73;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    color: #fff;
  }

  ul {
    list-style: none;
    margin-right: 3em;
  }

  li {
    display: inline;
    margin: 1rem;
  }
`;

const NavTitle = styled(Link)`
  font-size: 3rem;
`;
