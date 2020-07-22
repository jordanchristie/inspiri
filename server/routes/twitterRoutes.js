const express = require("express");
const passport = require("passport");
const app = express();

module.exports = (app) => {
  app.get("/auth/twitter", passport.authenticate("twitter"));

  app.get(
    "/auth/twitter/callback",
    passport.authenticate("twitter", { failureRedirect: "/" }),
    (req, res) => res.redirect("/dashboard")
  );
};
