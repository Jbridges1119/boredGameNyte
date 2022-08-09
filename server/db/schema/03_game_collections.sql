DROP TABLE IF EXISTS game_collections CASCADE;

CREATE TABLE game_collections (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255),
  thumb_url VARCHAR(255),
  large_url VARCHAR(255),
  min_players smallInt,
  max_players smallInt,
  bgatlas_game_id VARCHAR(255) NOT NULL
);
