const express = require("express");
const router = express.Router();

module.exports = (db) => {

  router.get("/", (req, res) => {
    let query = `
    SELECT DISTINCT name, bgatlas_game_id as id, thumb_url FROM game_collections;
    `
    return db.query(query)
    .then((data) => {
      return res.json(data.rows)
    })
  });
  return router
};