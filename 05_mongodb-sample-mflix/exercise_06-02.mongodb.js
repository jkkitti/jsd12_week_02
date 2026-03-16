// เรียกใช้ database
use("sample_mflix");

// 6.2 นับภาพยนตร์ที่ genres มีทั้ง "Drama" และ "History" และออกหลังปี 1970
// $all = ต้องมีครบทั้ง 2 genre ใน genres array
db.movies.find({
  genres: { $all: ["Drama", "History"] },
  released: { $gt: ISODate("1970-01-01T00:00:00Z") }
}).count()