# PostgreSQL for Web Developer — บันทึกความเข้าใจ

## PostgreSQL คืออะไร?

PostgreSQL เป็นระบบจัดการฐานข้อมูลแบบ Relational Database Management System (RDBMS)  
ใช้สำหรับเก็บข้อมูลแบบมีโครงสร้าง โดยข้อมูลจะถูกจัดเก็บเป็น **ตาราง (Table)** ที่มี **แถว (Row)** และ **คอลัมน์ (Column)**

---

## โครงสร้างข้อมูล

| คำศัพท์ | ความหมาย |
|---------|-----------|
| Database | ฐานข้อมูลทั้งหมด |
| Table | ตารางเก็บข้อมูล |
| Row | แถวข้อมูล (1 record) |
| Column | คอลัมน์ / ฟิลด์ |
| Primary Key | คีย์หลัก ระบุ record ไม่ซ้ำกัน |
| Foreign Key | คีย์ที่อ้างอิงไปยังตารางอื่น |

---

## PostgreSQL เหมาะกับอะไร

ข้อดี
รองรับข้อมูลที่มีโครงสร้าง
มี ACID Transaction
มีความเสถียรสูง
ใช้ SQL มาตรฐาน

ตัวอย่างระบบที่เหมาะ
Inventory System
Banking System
ERP
E-commerce

---

## คำสั่ง SQL พื้นฐาน (CRUD)

```sql
-- สร้างตาราง
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100)
);

-- เพิ่มข้อมูล
INSERT INTO users (name, email) VALUES ('สมชาย', 'somchai@example.com');

-- ดึงข้อมูล
SELECT * FROM users;
SELECT name FROM users WHERE id = 1;

-- แก้ไขข้อมูล
UPDATE users SET name = 'สมหญิง' WHERE id = 1;

-- ลบข้อมูล
DELETE FROM users WHERE id = 1;
```

---

## การเชื่อมตาราง (JOIN)

```sql
-- INNER JOIN: ดึงเฉพาะข้อมูลที่ตรงกันทั้งสองตาราง
SELECT users.name, orders.product
FROM users
INNER JOIN orders ON users.id = orders.user_id;
```

---

## สรุปความเข้าใจ

**PostgreSQL เหมาะกับข้อมูลที่มีโครงสร้างชัดเจนและต้องการความสัมพันธ์ของข้อมูล**

PostgreSQL เป็นฐานข้อมูลแบบ relational ที่ใช้ SQL ในการจัดการข้อมูล
ข้อมูลถูกจัดเก็บเป็นตารางและสามารถเชื่อมกันด้วย Primary Key และ Foreign Key
เหมาะสำหรับระบบที่ต้องการความถูกต้องของข้อมูลสูง เช่นระบบธุรกิจหรือระบบที่มี transaction จำนวนมาก

PostgreSQL เหมาะกับข้อมูลที่มีโครงสร้างชัดเจนและมีความสัมพันธ์กัน เช่น ระบบ e-commerce ที่ต้องการเชื่อม Users → Orders → Products
จุดเด่นคือรองรับ ACID (ความถูกต้องของ Transaction) และมี schema ที่แน่นอน ทำให้ข้อมูลมีความสม่ำเสมอ