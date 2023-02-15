DROP DATABASE IF EXISTS items_db;
CREATE DATABASE items_db;

\c items_db;

DROP TABLE IF EXISTS items;
CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    item_name VARCHAR (50) NOT NULL,
    pick_up_instructions TEXT NOT NULL,
    posted_date DATE NOT NULL DEFAULT CURRENT_DATE,
    is_available BOOLEAN,
    picture TEXT
);