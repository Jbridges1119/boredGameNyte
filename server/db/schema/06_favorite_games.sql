DROP TABLE IF EXISTS favorite_games CASCADE;

CREATE TABLE favorite_games (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  bgatlas_game_id VARCHAR(255)
);