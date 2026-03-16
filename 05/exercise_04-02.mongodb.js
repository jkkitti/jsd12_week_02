// เรียกใช้ database
use("sample_mflix");

// 4.2 นับภาพยนตร์ที่ plot ลงท้ายด้วยคำว่า "street"
// "street.$" → $ = สิ้นสุด string, . = อักขระใดก็ได้ 1 ตัว (จุดปิดประโยค)
db.movies.find({ plot: { $regex: "street.$", $options: "i" } }).count()