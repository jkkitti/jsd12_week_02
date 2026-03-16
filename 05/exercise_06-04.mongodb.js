// เรียกใช้ database
use("sample_mflix");

// 6.4 นับว่า Hal Roach กำกับกี่เรื่อง
db.movies.find({ directors: "Hal Roach" }).count()