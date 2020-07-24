const express = require("express");
const User = require("../models/User");
const app = express();

module.exports = (app) => {
  app.get(`/api/journal`, async (req, res) => {
    const allEntries = await User.findOne({ id: req.user.id }, (err, user) => {
      try {
        res.send(user.journalEntries);
      } catch (err) {
        res.status(500).json({ error: `Couldn't retrieve journal entries` });
      }
    });
  });

  app.post(`/api/journal`, (req, res) => {
    console.log(req);
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

  app.delete(`/api/journal/remove/:id`, (req, res) => {
    const removedEntry = User.findById({ id: req.user.id }, (err, user) => {
      user.journalEntries.id(req.params.id).remove();

      user.save();
    });
  });
};
