DROP TABLE IF EXISTS game_collections CASCADE;

CREATE TABLE game_collections (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  bgatlas_game_id VARCHAR(255) NOT NULL
);
