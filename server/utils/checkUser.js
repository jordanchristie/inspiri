module.exports = (req, res, next) => {
  if (req.user === undefined) {
    throw new Error("Please sign in to save things.");
  }

  next();
};
