-- Clear existing data to prevent duplication
TRUNCATE TABLE  Users           RESTART IDENTITY CASCADE;

-- Mock Data for Users
INSERT INTO Users (name, email, password, role) VALUES
  ('Aod',     'aod@example.com',     'hash_password', 'Admin'),
  ('Somchai', 'somchai@example.com', 'hash_password', 'staff'),
  ('Malee',   'malee@example.com',   'hash_password', 'staff');