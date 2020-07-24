import React, { useEffect, useContext } from "react";
import { UserContext } from "../context/userContext";
import { Link } from "react-router-dom";

import Card from "../components/Card";

const Dashboard = () => {
  const { user, fetchUser } = useContext(UserContext);
  console.log(user.savedQuotes);
  useEffect(() => {
    fetchUser();
  }, []);

  const renderSavedQuotes = () => {
    return user.savedQuotes.reverse().map((quote, i) => {
      return <Card key={i} {...quote} />;
    });
  };

  return (
    <div id="dashboard-page">
      <section>
        <h1>User data goes here</h1>
        {user.savedQuotes == undefined ? (
          <p>
            {" "}
            You don't have any quotes yet.
            <Link to="/explore"> Click here</Link> to start!
          </p>
        ) : (
          renderSavedQuotes()
        )}
      </section>
    </div>
  );
};

export default Dashboard;
