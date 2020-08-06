const express = require("express"),
  passport = require("passport"),
  app = express();

module.exports = (app) => {
  app.post(
    "/auth/local",
    passport.authenticate("local", { failureRedirect: "/signup" }),
    (req, res) => {
      console.log(res);
      res.redirect("/dashboard");
    }
  );
};
