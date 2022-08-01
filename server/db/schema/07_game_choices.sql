DROP TABLE IF EXISTS game_choices CASCADE;

CREATE TABLE game_choices (
  id SERIAL PRIMARY KEY NOT NULL,
  game_night_id INTEGER REFERENCES game_nights(id) ON DELETE CASCADE,
  bgatlas_game_id VARCHAR(255) NOT NULL
);