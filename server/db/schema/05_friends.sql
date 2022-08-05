DROP TABLE IF EXISTS friends CASCADE;

CREATE TABLE friends (
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  friend_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);