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

  router.get("/:userId", (req, res) => {
    let userId = req.params.userId;
    let params = [userId];
    let query = `
    SELECT * FROM game_collections
    WHERE user_id = $1;
    `
    return db.query(query, params)
    .then((data) => {
      return res.json(data.rows)
    })
  });

  router.delete("/:userId/:gameId", (req, res) => {
    let userId = req.params.userId;
    let game = req.params.gameId;
    let params = [userId, game];
    let query = `
    DELETE FROM game_collections
    WHERE user_id = $1 AND bgatlas_game_id = $2;
    `
    return db.query(query, params)
    .then((data) => {
      return res.json(data.rows)
    })
  });

  return router
};