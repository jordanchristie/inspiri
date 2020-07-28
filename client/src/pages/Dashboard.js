import React, { useEffect, useContext } from "react";
import { UserContext } from "../context/userContext";
import { Link } from "react-router-dom";

import Card from "../components/Card";

const Dashboard = () => {
  const { user, fetchUser } = useContext(UserContext);
  useEffect(() => {
    fetchUser();
  }, []);

  console.log(user);

  const renderSavedQuotes = () => {
    return user.savedQuotes.reverse().map((quote, i) => {
      return <Card key={i} {...quote} />;
    });
  };

  return (
    <div id="dashboard-page">
      <section>
        <h1>User data goes here</h1>
        {user && user.savedQuotes.length ? (
          renderSavedQuotes()
        ) : (
          <p>
            {" "}
            You don't have any quotes yet.
            <Link to="/quotes"> Click here</Link> to start!
          </p>
        )}
      </section>
    </div>
  );
};

export default Dashboard;
