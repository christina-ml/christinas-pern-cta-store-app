DROP TABLE IF EXISTS products;

CREATE TABLE products (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL,
    description TEXT,
    price INT DEFAULT 0,
    rating INT CHECK (rating > 0 AND rating <= 5),
    featured BOOLEAN,
    seller TEXT,
    image TEXT
);