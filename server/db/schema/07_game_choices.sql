DROP TABLE IF EXISTS game_choices CASCADE;

CREATE TABLE game_choices (
  id SERIAL PRIMARY KEY NOT NULL,
  game_night_id INTEGER REFERENCES game_nights(id) ON DELETE CASCADE,
  bgatlas_game_1 VARCHAR(255) NOT NULL,
  bgatlas_game_2 VARCHAR(255),
  bgatlas_game_3 VARCHAR(255)
);