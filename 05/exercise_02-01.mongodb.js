// ─────────────────────────────────────────────────────────
//  EXERCISE 2 — Filter หลายเงื่อนไข + นับจำนวน
//  database : sample_mflix
//  collections : movies 
// ─────────────────────────────────────────────────────────


// เรียกใช้ database
use("sample_mflix");

// 2.1 ดูตัวอย่าง document ที่ type = "movie" และ rated = "TV-G"
db.movies.findOne({ type: "movie", rated: "TV-G" })