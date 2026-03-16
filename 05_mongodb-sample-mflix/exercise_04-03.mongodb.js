// เรียกใช้ database
use("sample_mflix");

// 4.3 ดูข้อมูลจริงของภาพยนตร์เหล่านั้น (ไม่ต้อง .count())
db.movies.find({ plot: { $regex: "street.$", $options: "i" } })