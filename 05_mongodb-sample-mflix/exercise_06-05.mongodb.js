// เรียกใช้ database
use("sample_mflix");

// 6.5 ดูทุกเรื่องที่ Hal Roach กำกับ (ใช้ $in แสดง alternative syntax)
// $in บน array field = เช็คว่า "Hal Roach" อยู่ใน directors หรือไม่
// ได้ผลเหมือน directors: "Hal Roach" แต่ $in รองรับค้นหาหลายชื่อพร้อมกัน
db.movies.find({ directors: { $in: ["Hal Roach"] } })