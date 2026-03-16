// ─────────────────────────────────────────────────────────
//  EXERCISE 1 — find() และ findOne() พื้นฐาน
//  database : sample_mflix
//  collection : comments
// ─────────────────────────────────────────────────────────


// เรียกใช้ database
use("sample_mflix");

// 1.2 ค้นหา 1 document โดยใช้ _id
// _id ต้องห่อด้วย ObjectId() เสมอ เพราะ MongoDB เก็บเป็น BSON ไม่ใช่ string
db.comments.findOne({ _id: ObjectId("5a9427648b0beebeb69579f5") });