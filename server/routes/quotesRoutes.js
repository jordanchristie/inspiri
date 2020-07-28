const express = require("express");
const User = require("../models/User");
const fetch = require("node-fetch");
const checkUser = require("../utils/checkUser");
const app = express();

module.exports = (app) => {
  app.get("/api/quotes", async (req, res) => {
    try {
      const result = await fetch(
        "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json&lang=en"
      );
      const json = await result.json();

      res.send(json);
    } catch (error) {
      res.status(500).json("Something went wrong retreiving this quote.");
    }
  });

  // Add Quote
  app.post("/api/quotes/add", checkUser, (req, res) => {
    console.log(req.body);
    const { quoteAuthor, quoteText } = req.body;

    const newQuote = User.findOne({ id: req.user.id }, (err, user) => {
      user.savedQuotes.push({
        quoteAuthor,
        quoteText,
        quoteSaved: true,
      });
      user.save();
    });
  });

  // Remove Quote
  app.delete("/api/quotes/remove/:id", checkUser, (req, res, next) => {
    const user = User.findOne({ _id: req.user._id }, (err, user) => {
      user.savedQuotes.id(req.params.id).remove();

      user.save();
    });
  });
};
