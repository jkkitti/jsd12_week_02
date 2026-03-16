// เรียกใช้ database
use("sample_mflix");

// 6.6 ดู title + awards.wins ของทุกเรื่องที่ Hal Roach กำกับ (ใช้ Projection)
// Parameter ที่ 2 = projection กำหนดว่าจะแสดง field ไหน
//   title: 1           → แสดง title
//   "awards.wins": 1   → แสดง awards.wins (nested field ใช้ dot notation)
//   _id: 0             → ซ่อน _id (ถ้าไม่บอก _id จะติดมาเสมอ)
db.movies.find(
  { directors: { $in: ["Hal Roach"] } },
  { title: 1, "awards.wins": 1, _id: 0 }