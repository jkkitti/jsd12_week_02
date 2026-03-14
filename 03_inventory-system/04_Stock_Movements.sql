-- Clear existing data to prevent duplication
TRUNCATE TABLE Stock_Movements       RESTART IDENTITY CASCADE;


-- Mock Data for Stock_Movements
INSERT INTO Stock_Movements (product_id, user_id, type, quantity, date, remarks) VALUES
  (1, 1, 'IN',  50, '2025-03-01', 'รับสินค้าจาก Supplier'),
  (2, 1, 'IN',  30, '2025-03-01', 'รับสินค้าจาก Supplier'),
  (3, 1, 'IN',  20, '2025-03-01', 'รับสินค้าจาก Supplier'),
  (4, 2, 'IN',  40, '2025-03-05', 'รับสินค้าจาก Supplier'),
  (5, 2, 'IN',  10, '2025-03-05', 'รับสินค้าจาก Supplier'),
  (6, 2, 'IN',  15, '2025-03-05', 'รับสินค้าจาก Supplier'),
  (1, 2, 'OUT', 10, '2025-03-10', 'ขายให้ลูกค้า'),
  (2, 2, 'OUT', 5,  '2025-03-10', 'ขายให้ลูกค้า'),
  (4, 3, 'OUT', 8,  '2025-03-11', 'ขายให้ลูกค้า'),
  (5, 3, 'OUT', 6,  '2025-03-11', 'ขายให้ลูกค้า'),
  (6, 3, 'OUT', 12, '2025-03-12', 'ขายให้ลูกค้า');