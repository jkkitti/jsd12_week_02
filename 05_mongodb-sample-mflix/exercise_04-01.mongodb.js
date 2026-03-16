// ─────────────────────────────────────────────────────────
//  EXERCISE 4 — Regular Expression ($regex)
//  collection: movies
//
//  ความเข้าใจ:
//  $regex ใช้ค้นหา pattern ในข้อความ (text search แบบง่าย)
//  - $options: "i" = case-insensitive (ไม่สนพิมพ์ใหญ่-เล็ก)
//  - "American"   = ค้นหาคำนี้ตรงไหนก็ได้ใน field
//  - "^abc"        = ขึ้นต้นด้วย "abc"
//  - "abc$"        = ลงท้ายด้วย "abc"
//  - "street.$"    = ลงท้ายด้วย "street" + อักขระ 1 ตัว (จุดปิดประโยค)
// ─────────────────────────────────────────────────────────

// เรียกใช้ database
use("sample_mflix");

// 4.1 นับภาพยนตร์ที่ plot มีคำว่า "American" (ไม่สนพิมพ์ใหญ่-เล็ก)
db.movies.find({ plot: { $regex: "American", $options: "i" } }).count()