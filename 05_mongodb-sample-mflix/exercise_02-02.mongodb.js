// ─────────────────────────────────────────────────────────
//  EXERCISE 2 — Filter หลายเงื่อนไข + นับจำนวน
//  database : sample_mflix
//  collections : movies 
// ─────────────────────────────────────────────────────────


// เรียกใช้ database
use("sample_mflix");

// 2.2 นับจำนวนภาพยนตร์ที่ type = "movie" และ rated = "TV-G"
db.movies.find({ type: "movie", rated: "TV-G" }).count()