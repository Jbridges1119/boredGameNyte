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

  router.get("/:id", (req, res) => {
    let user_id = req.params.id;
    const params = [user_id];
    const query = `
    SELECT * FROM users
    WHERE id = $1;
    `
    return db.query(query, params)
      .then((data) => {
        console.log(data.rows)
        return res.json(data.rows[0])
      })
  })
  return router;
};
