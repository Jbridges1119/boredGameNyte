const express = require("express");
const router = express.Router();

module.exports = (db) => {
  // /api/gamenytes
  router.get("/", (req, res) => {
    const params = [];
    const query = `
    SELECT * FROM game_nights;
    `;
    return db.query(query, params)
      .then((data) => {
        return res.json(data.rows);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  })
  // Get game nights hosted by :id
  router.get("/host/:id", (req, res) => {
    let user_id = req.params.id;
    const params = [user_id];
    const query = `
    SELECT game_nights.id as id, first_name, last_name, game_nights.title, game_nights.host_id, game_nights.competitive, game_nights.status, game_nights.location, game_nights.date FROM users
    JOIN game_nights ON users.id = game_nights.host_id
    WHERE host_id = $1
    LIMIT 3;
    `;
    return db.query(query, params)
      .then((data) => {
        return res.json(data.rows);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  })
  // Get game nights invited to by :id
  router.get("/invited/:id", (req, res) => {
    let user_id = req.params.id;
    const params = [user_id];
    const query = `
    SELECT * FROM attendees
    JOIN game_nights ON id = attendees.game_night_id
    WHERE attendee_id = $1;
    `;
    return db.query(query, params)
      .then((data) => {
        return res.json(data.rows);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  })
  // easy way to get gameNyte info (except BGA game id's)
  router.get("/:id", (req, res) => {
    let gn_id = req.params.id
    const params = [gn_id];
    const query = `
    SELECT * FROM game_nights
    WHERE game_nights.id = $1;
    `;
    return db.query(query, params)
      .then((data) => {
        return res.json(data.rows);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  })
  // easy way to get attendee info
  router.get("/:id/attendees", (req, res) => {
    let gn_id = req.params.id
    const params = [gn_id];
    const query = `
    SELECT game_night_id, attend_status, first_name, last_name, email FROM attendees
    JOIN users ON attendee_id = users.id
    WHERE game_night_id = $1;
    `;
    return db.query(query, params)
      .then((data) => {
        return res.json(data.rows);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  })
  // This route will give us just the games for a game night (BGA game id's)
  router.get("/:id/games", (req, res) => {
    let gn_id = req.params.id
    const params = [gn_id];
    const query = `
    SELECT DISTINCT game_night_id, game_choices.bgatlas_game_id, name, min_players, max_players, thumb_url, large_url FROM game_choices
    JOIN game_collections ON game_collections.bgatlas_game_id = game_choices.bgatlas_game_id
    WHERE game_night_id = $1;
    `;
    return db.query(query, params)
      .then((data) => {
        return res.json(data.rows);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  })
  return router;
};