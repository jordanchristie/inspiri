const express = require("express"),
  passport = require("passport"),
  app = express();

module.exports = (app) => {
  app.post(
    "/auth/local",
    passport.authenticate(
      "local"
      // {
      //   successRedirect: "/dashboard",
      //   failureRedirect: "/signup",
      // }
    ),
    (req, res) => {
      if (req.user) {
        res.redirect("/dashboard");
      } else {
        res.redirect("/login");
      }
    }
  );
};
