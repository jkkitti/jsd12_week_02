CREATE TABLE Categories (
  category_id   SERIAL       PRIMARY KEY,
  category_name VARCHAR(100) NOT NULL
);

CREATE TABLE Products (
  product_id   SERIAL         PRIMARY KEY,
  product_name VARCHAR(255)   NOT NULL,
  sku_code     VARCHAR(100)   UNIQUE,
  price        DECIMAL(10,2)  NOT NULL DEFAULT 0.00,
  qty_in_stock INTEGER        NOT NULL DEFAULT 0,
  reorder_level INTEGER,
  category_id  INTEGER        NOT NULL,
  created_at   TIMESTAMP      DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (category_id) REFERENCES Categories(category_id)
);

CREATE TABLE Users (
  user_id    SERIAL       PRIMARY KEY,
  name       VARCHAR(100) NOT NULL,
  email      VARCHAR(100) UNIQUE,
  password   VARCHAR(255) NOT NULL,
  role       VARCHAR(50),
  created_at TIMESTAMP    DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Stock_Movements (
  movement_id SERIAL      PRIMARY KEY,
  product_id  INTEGER     NOT NULL,
  user_id     INTEGER     NOT NULL,
  type        VARCHAR(10) CHECK (type IN ('IN', 'OUT')),
  quantity    INTEGER     NOT NULL CHECK (quantity > 0),
  remarks     VARCHAR(255),
  date        DATE,
  created_at  TIMESTAMP   DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (product_id) REFERENCES Products(product_id),
  FOREIGN KEY (user_id)    REFERENCES Users(user_id)
);