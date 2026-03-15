-- Clear existing data to prevent duplication
TRUNCATE TABLE Products        RESTART IDENTITY CASCADE;

-- Mock Data for Products
INSERT INTO Products (product_name, sku_code, price, qty_in_stock, reorder_level, category_id) VALUES
  ('Black Coffee',   'COF-001', 50.00,  20, 5,  1),
  ('Green Tea',      'TEA-001', 45.00,  15, 5,  1),
  ('Latte',          'COF-002', 65.00,  10, 3,  1),
  ('Toast',          'FOO-001', 35.00,  30, 10, 2),
  ('Croissant',      'FOO-002', 55.00,  4,  5,  2),
  ('Chocolate Chip', 'SNK-001', 40.00,  3,  5,  3);