const express = require("express");
const router = express.Router();

module.exports = (db) => {
  
  router.get("/", (req, res) => {
    const params = [];
    const query = `SELECT * FROM users;`;
    db.query(query)
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
       
        return res.json(data.rows[0])
      })
  })

  router.get("/:id/friends", (req, res) => {
    let user_id = req.params.id;
    const params = [user_id];
    const query = `
    SELECT user_id, friend_id, first_name, last_name, email, city
    FROM friends
    JOIN users on id = friend_id
    WHERE user_id = $1;
    `
    return db.query(query, params)
      .then((data) => {
        // console.log(data.rows)
        return res.json(data.rows)
      })
  })

  router.get("/:id/collection", (req, res) => {
    let user_id = req.params.id;
    const params = [user_id];
    const query = `
    SELECT name, min_players, max_players, thumb_url, large_url, bgatlas_game_id as id FROM game_collections
    WHERE user_id = $1;
    `
    return db.query(query, params)
      .then((data) => {
        // console.log(data.rows)
        return res.json(data.rows)
      })
  })

  router.post("/:id/collection", (req, res) => {
    let game = req.body;
    const params = [game.user, game.name, game.min_players, game.max_players, game.thumb_url, game.id];
    const query = `
    INSERT INTO game_collections (user_id, name, thumb_url, large_url, min_players, max_players, bgatlas_game_id)
    VALUES ($1, $2, $5, $5, $3, $4, $6)
    `
    return db.query(query, params)
      .then((data) => {
        return res.json(data.rows)
      })
  })
  return router;
};
