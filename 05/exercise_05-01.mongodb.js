// ─────────────────────────────────────────────────────────
//  EXERCISE 5 — Comparison Operators + sort() + limit()
//  collection: movies
//
//  ความเข้าใจ:
//  Operators เปรียบเทียบตัวเลข:
//    $lt  (<)   $lte (<=)   $gt  (>)   $gte (>=)   $eq (==)
//  .sort({ field:  1 }) = ASC  เรียงน้อย→มาก
//  .sort({ field: -1 }) = DESC เรียงมาก→น้อย
//  .limit(n) = จำกัดผลลัพธ์ n document
//  chain ต่อกันได้: find().sort().limit()
// ─────────────────────────────────────────────────────────


// เรียกใช้ database
use("sample_mflix");


// 5.1 ภาพยนตร์ที่ runtime ยาวที่สุด 5 อันดับแรก
// sort -1 = DESC (ยาวสุดมาก่อน) → limit(5) ตัดเหลือ 5
db.movies.find({}).sort({ runtime: -1 }).limit(5)





