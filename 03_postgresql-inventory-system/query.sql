SELECT
  sm.date,          -- วันที่ของรายการ  มาจาก Stock_Movements
  sm.type,          -- IN หรือ OUT       มาจาก Stock_Movements
  sm.quantity,      -- จำนวน            มาจาก Stock_Movements
  p.product_name,   -- ชื่อสินค้า       มาจาก Products
  u.name AS recorded_by,  -- ชื่อคนทำรายการ มาจาก Users
  sm.remarks        -- หมายเหตุ         มาจาก Stock_Movements
FROM Stock_Movements sm   -- table หลักที่เริ่มดึง ย่อเป็น sm
JOIN Products p           -- เชื่อม Products ย่อเป็น p
  ON sm.product_id = p.product_id  -- เงื่อนไขการเชื่อม 
                                   -- product_id ใน Stock_Movements
                                   -- ต้องตรงกับ product_id ใน Products
JOIN Users u              -- เชื่อม Users ย่อเป็น u
  ON sm.user_id = u.user_id        -- เงื่อนไขการเชื่อม
                                   -- user_id ใน Stock_Movements
                                   -- ต้องตรงกับ user_id ใน Users
ORDER BY sm.date;         -- เรียงลำดับจากวันที่เก่าสุด → ใหม่สุด