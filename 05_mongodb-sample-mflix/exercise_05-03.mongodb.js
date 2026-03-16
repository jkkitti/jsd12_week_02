// เรียกใช้ database
use("sample_mflix");

// 5.3 เกิดปี 1955 → 3 ภาพยนตร์ที่ควรดูใน 10 ปีถัดไป (1955–1965)
// $gt: 1954 และ $lt: 1966 = ปี 1955 ถึง 1965
// sort year: 1 = ASC (เก่าสุดมาก่อน) → limit(3)
db.movies.find({ year: { $gt: 1954, $lt: 1966 } }).sort({ year: 1 }).limit(3)