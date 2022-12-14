DROP TABLE IF EXISTS attendees CASCADE;

CREATE TABLE attendees (
  attendee_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  game_night_id INTEGER REFERENCES game_nights(id) ON DELETE CASCADE,
  attend_status BOOLEAN
);