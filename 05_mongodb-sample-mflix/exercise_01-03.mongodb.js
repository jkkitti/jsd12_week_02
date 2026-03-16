// ─────────────────────────────────────────────────────────
//  EXERCISE 1 — find() และ findOne() พื้นฐาน
//  database : sample_mflix
//  collection : comments
// ─────────────────────────────────────────────────────────


// เรียกใช้ database
use("sample_mflix");

// 1.3 ค้นหา 1 document โดยใช้ email
// ใส่ filter ใน {} เพื่อกำหนดเงื่อนไข
// field ทั่วไปใส่เป็น string ได้เลย 
db.comments.findOne({ email: "john_bishop@fakegmail.com" })