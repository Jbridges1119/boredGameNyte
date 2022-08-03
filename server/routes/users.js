const router = require("express").Router();

//Example
module.exports = (db) => {
  const example = {};
  const query = "";
  router.get("/", (req, res) => {
    db.query(query, [example])
      .then((data) => {
        const info = data.rows;
        res.json({ info });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
};
