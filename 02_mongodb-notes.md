# MongoDB for Web Developer — บันทึกความเข้าใจ

## MongoDB คืออะไร?

MongoDB คือระบบจัดการฐานข้อมูลแบบ **NoSQL** ที่เก็บข้อมูลในรูปแบบ **Document (JSON-like)** แทนที่จะเป็นตาราง ทำให้ยืดหยุ่นกว่า Relational Database มาก

---

## โครงสร้างข้อมูล

| MongoDB | เทียบกับ SQL |
|---------|--------------|
| Database | Database |
| Collection | Table |
| Document | Row |
| Field | Column |

---

## MongoDB เหมาะกับอะไร

ข้อดี
โครงสร้างข้อมูลยืดหยุ่น
รองรับ Big Data
เขียนและอ่านข้อมูลเร็ว
เหมาะกับข้อมูลแบบ JSON

ตัวอย่างระบบที่เหมาะ
Social Media
Real-time Analytics
Content Management System
Log Data

---

## ตัวอย่าง Document:**
```json
{
  "_id": "ObjectId(...)",
  "name": "สมชาย",
  "email": "somchai@example.com",
  "hobbies": ["อ่านหนังสือ", "เล่นเกม"]
}
```

---

## คำสั่งพื้นฐาน (CRUD)

```js
// เพิ่มข้อมูล
db.users.insertOne({ name: "สมชาย", age: 25 });

// ดึงข้อมูล
db.users.find();
db.users.findOne({ name: "สมชาย" });

// แก้ไขข้อมูล
db.users.updateOne(
  { name: "สมชาย" },
  { $set: { age: 26 } }
);

// ลบข้อมูล
db.users.deleteOne({ name: "สมชาย" });
```

---

## การ Query แบบมีเงื่อนไข

```js
// หาคนที่อายุมากกว่า 20
db.users.find({ age: { $gt: 20 } });

// หาคนที่ชื่อ "สมชาย" หรืออายุ 25
db.users.find({ $or: [{ name: "สมชาย" }, { age: 25 }] });
```

---

## สรุปความเข้าใจ

**MongoDB เหมาะกับข้อมูลที่มีโครงสร้าง flexible และใช้กับ JSON data ได้ดี**

MongoDB เป็นฐานข้อมูลแบบ NoSQL ที่เก็บข้อมูลในรูปแบบ document
ทำให้สามารถเก็บข้อมูลที่มีโครงสร้างยืดหยุ่นได้ง่าย และเหมาะกับระบบที่ต้องการ scalability สูง
เมื่อเทียบกับ PostgreSQL
PostgreSQL เหมาะกับข้อมูลที่มีโครงสร้างชัดเจน
MongoDB เหมาะกับข้อมูลที่เปลี่ยนแปลงโครงสร้างได้บ่อย

MongoDB เหมาะกับข้อมูลที่ไม่มีโครงสร้างตายตัว หรือมีการเปลี่ยนแปลง schema บ่อย เช่น ระบบ content หรือ social media  
ต่างจาก PostgreSQL ตรงที่ไม่ต้องกำหนด schema ล่วงหน้า และสามารถเก็บ array หรือ object ซ้อนกันได้ใน document เดียว  
จุดด้อยคือไม่มี JOIN แบบ SQL จึงต้องออกแบบ collection ให้ดีตั้งแต่ต้น