-- Clear existing data to prevent duplication
TRUNCATE TABLE Categories      RESTART IDENTITY CASCADE;


-- Mock Data for Categories
INSERT INTO Categories (category_name) VALUES
  ('Beverage'),
  ('Food'),
  ('Snack');