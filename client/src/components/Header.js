import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import { UserContext } from "../context/userContext";

const Header = () => {
  const { user } = useContext(UserContext);

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
          {user !== undefined ? (
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

export default Header;

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
