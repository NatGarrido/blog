-- Crea tabla post

create table post(
  id SERIAL,
  content VARCHAR(255),
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

INSERT INTO post (content, created_at, updated_at) VALUES ('Hola como estas', current_timestamp, current_timestamp);