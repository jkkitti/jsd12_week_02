// เรียกใช้ database
use("sample_mflix");

// 5.2 ภาพยนตร์ที่ runtime < 60 นาที เรียงจากมากไปน้อย 5 อันดับแรก
// กรอง $lt: 60 ก่อน แล้วค่อย sort + limit
db.movies.find({ runtime: { $lt: 60 } }).sort({ runtime: -1 }).limit(5)