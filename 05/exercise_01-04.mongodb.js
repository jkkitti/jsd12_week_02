// ─────────────────────────────────────────────────────────
//  EXERCISE 1 — find() และ findOne() พื้นฐาน
//  database : sample_mflix
//  collection : comments
// ─────────────────────────────────────────────────────────


// เรียกใช้ database
use("sample_mflix");

// 1.4 ค้นหา 1 document โดยใช้ name
db.comments.findOne({ name: "John Bishop" })