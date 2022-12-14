DROP TABLE IF EXISTS game_nights CASCADE;

CREATE TABLE game_nights (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL,
  host_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  competitive BOOLEAN NOT NULL DEFAULT FALSE,
  status VARCHAR(255),
  location VARCHAR(255),
  date VARCHAR(255) NOT NULL
);