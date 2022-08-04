const express = require("express");
const router = express.Router();

module.exports = (db) => {
  const params = [];
  const query = `SELECT * FROM users;`;
  router.get("/", (req, res) => {
    db.query(query, params)
      .then((data) => {
        const users = data.rows;
        res.json({ users });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
