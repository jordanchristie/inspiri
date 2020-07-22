const express = require("express"),
  User = require("../models/User"),
  fetch = require("node-fetch");
app = express();

module.exports = (app) => {
  app.get("/api/quotes", async (req, res) => {
    try {
      const result = await fetch(
        "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json&lang=en"
      );
      const json = await result.json();
    } catch (error) {
      res.status(500).json("Something went wrong while saving this quote.");
    }

    res.send(json);
  });

  // Add Quote
  app.post("/api/quotes/add", (req, res) => {
    const { author, quote } = req.body;

    const newQuote = User.findOne({ id: req.user.id }, (err, user) => {
      user.savedQuotes.push({
        author,
        quote,
        isSaved: true,
      });
      user.save();
    });
  });

  // Remove Quote
  app.delete("/api/quotes/remove/:id", (req, res, next) => {
    const user = User.findOne({ _id: req.user._id }, (err, user) => {
      user.savedQuotes.id(req.params.id).remove();

      user.save();
    });
  });
};
