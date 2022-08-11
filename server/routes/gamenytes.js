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
    SELECT game_nights.id, 
    first_name, 
    last_name, 
    game_nights.title, 
    game_nights.host_id, 
    game_nights.competitive, 
    game_nights.status, 
    game_nights.location, 
    game_nights.date, 
    game_choices.bgatlas_game_1, 
    game_choices.bgatlas_game_2, 
    game_choices.bgatlas_game_3 FROM users
    JOIN game_nights ON users.id = game_nights.host_id
    JOIN game_choices ON game_nights.id = game_choices.game_night_id
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
  // Get game nights hosted by :id
  router.get("/host/:id/all", (req, res) => {
    let user_id = req.params.id;
    const params = [user_id];
    const query = `
    SELECT game_nights.id, 
    first_name, 
    last_name, 
    game_nights.title, 
    game_nights.host_id, 
    game_nights.competitive, 
    game_nights.status, 
    game_nights.location, 
    game_nights.date, 
    game_choices.bgatlas_game_1, 
    game_choices.bgatlas_game_2, 
    game_choices.bgatlas_game_3 FROM users
    JOIN game_nights ON users.id = game_nights.host_id
    JOIN game_choices ON game_nights.id = game_choices.game_night_id
    WHERE host_id = $1;
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
    JOIN users ON game_nights.host_id = users.id
    JOIN game_choices ON game_choices.game_night_id = attendees.game_night_id
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
  // Get 'completed' game nights attended by :id
  router.get("/attended/:id", (req, res) => {
    let user_id = req.params.id;
    const params = [user_id];
    const query = `
    SELECT * FROM attendees 
    JOIN game_nights ON id = attendees.game_night_id 
    WHERE game_nights.status = 'complete' and attendees.attend_status = 't' and attendees.attendee_id = $1 ;
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
    SELECT DISTINCT
    title,
    host_id,
    competitive,
    status,
    location,
    date,
    attendees.attendee_id,
    attendees.attend_status,
    users.first_name,
    users.last_name,
    users.email,
    game_choices.bgatlas_game_1 as game_1,
    game_choices.bgatlas_game_2 as game_2,
    game_choices.bgatlas_game_3 as game_3
    FROM game_nights
    JOIN attendees ON game_nights.id = attendees.game_night_id
    JOIN users ON users.id = attendees.attendee_id
    JOIN game_choices ON game_choices.game_night_id = game_nights.id
    JOIN game_collections ON host_id = game_collections.user_id
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
    SELECT game_nights.id,
    game_nights.title,
    game_nights.host_id, 
    game_choices.bgatlas_game_1, 
    game_choices.bgatlas_game_2, 
    game_choices.bgatlas_game_3 FROM users
    JOIN game_nights ON users.id = game_nights.host_id
    JOIN game_choices ON game_nights.id = game_choices.game_night_id
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