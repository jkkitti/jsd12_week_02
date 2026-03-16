// ─────────────────────────────────────────────────────────
//  EXERCISE 6 — Array Operators + AND/OR + Projection
//  collection: movies
//
//  ความเข้าใจ:
//  MongoDB เก็บข้อมูลหลายค่าใน field เดียวเป็น array เช่น
//    genres:    ["Drama", "History"]
//    countries: ["USA", "UK"]
//    cast:      ["Tom Hanks", "Robin Wright"]
//
//  $in  → match ถ้า field มีค่าใดค่าหนึ่งใน list (OR logic)
//  $all → match ถ้า field มีครบทุกค่าใน list   (AND logic)
//
//  Projection (parameter ที่ 2 ของ find):
//    { field: 1 } = แสดงเฉพาะ field นั้น
//    { field: 0 } = ซ่อน field นั้น
//    { _id: 0 }   = ซ่อน _id (ปกติจะติดมาเสมอ ต้องบอกให้ซ่อน)
//
//  AND/OR explicit:
//    $and: [ {cond1}, {cond2} ]  = ทุกเงื่อนไขต้องจริง
//    $or:  [ {cond1}, {cond2} ]  = เงื่อนไขใดอย่างน้อย 1 ข้อต้องจริง
// ─────────────────────────────────────────────────────────

// เรียกใช้ database
use("sample_mflix");

// 6.1 ภาพยนตร์ที่ออกปี 1950–1970 และฉายในสหรัฐอเมริกา
// countries เป็น array → $in เช็คว่ามี "USA" อยู่ใน array หรือไม่
db.movies.find({
  countries: { $in: ["USA"] },
  year: { $gte: 1950, $lte: 1970 }
})