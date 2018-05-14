CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username TEXT,
    img TEXT,
    auth_id TEXT
);

CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name TEXT,
    description TEXT,
    price REAL
);

CREATE TABLE IF NOT EXISTS pictures (
    product_id SERIAL PRIMARY KEY,
    img_url TEXT
);

CREATE TABLE IF NOT EXISTS cart (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    prod_id INTEGER REFERENCES products(id),
    quantity INTEGER
);



INSERT INTO products(id, name, description, price)
VALUES(1, 'beef','test' 100)


INSERT INTO pictures(img_url, product_id)
VALUES('https://s3-us-west-1.amazonaws.com/jtruf72personalproject/tree1.png', 1)