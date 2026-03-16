// เรียกใช้ database
use("sample_mflix");

// 5.4 นับภาพยนตร์ที่ออกฉายระหว่างปี 1990–2000
// "released" เก็บเป็น Date type → ต้องใช้ ISODate() ไม่ใช่ตัวเลขปี
// $gte 1990-01-01 และ $lt 2001-01-01 = ครอบคลุมทั้งปี 2000
db.movies.find({
  released: {
    $gte: ISODate("1990-01-01T00:00:00Z"),
    $lt:  ISODate("2001-01-01T00:00:00Z")
  }
}).count()