const express = require("express");
const User = require("../models/User");
const fetch = require("node-fetch");
const app = express();

module.exports = (app) => {
  app.get(`/api/journal/add`, (req, res) => {
    const { title, content } = req.body;

    const newJournalEntry = User.findOne({ id: req.body.id }, (err, user) => {
      try {
        user.journalEntries.push({
          title,
          content,
        });

        user.save();
      } catch (error) {
        res.status(500).json({ error: `Couldn't add entry, please try again` });
      }
    });
  });
};
