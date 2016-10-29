-- Crea tabla post

create table post(
  id SERIAL,
  content VARCHAR(255),
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);