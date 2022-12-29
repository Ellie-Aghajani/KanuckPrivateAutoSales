DROP TABLE IF EXISTS vehicles CASCADE;
CREATE TABLE vehicles (
  id SERIAL PRIMARY KEY NOT NULL,
  owner_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  make VARCHAR(255) NOT NULL,
  model VARCHAR(255) NOT NULL,
  yr INT NOT NULL,
  color VARCHAR(20) NOT NULL,
  price INT NOT NULL,
  likes INT NOT NULL DEFAULT 0,
  thumbnail_img VARCHAR(255) NOT NULL, 
  fullsize_img VARCHAR(255) NOT NULL
);