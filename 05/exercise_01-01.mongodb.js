// ─────────────────────────────────────────────────────────
//  EXERCISE 1 — find() และ findOne() พื้นฐาน
//  database : sample_mflix
//  collection : comments
// ─────────────────────────────────────────────────────────


// เรียกใช้ database
use("sample_mflix");

// 1.1 ดึงข้อมูลทุก document จาก comments
// {} ว่างเปล่า = ไม่มีเงื่อนไข = เอาทุกอย่าง
db.comments.find({})