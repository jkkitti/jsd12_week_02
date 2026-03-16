// ─────────────────────────────────────────────────────────
//  EXERCISE 3 — Nested Field (ข้อมูลซ้อนกัน)
//  collection: theaters
//
//  ความเข้าใจ:
//  Document theaters มีโครงสร้างซ้อนกันแบบนี้:
//  {
//    location: {
//      address: {
//        state: "AL",
//        city:  "La Quinta"
//      }
//    }
//  }
//  วิธีเข้าถึง nested field ใช้ "dot notation" และต้องใส่ "" ครอบ
//  เพราะ JavaScript ตีความ . เป็น property access
// ─────────────────────────────────────────────────────────


// เรียกใช้ database
use("sample_mflix");

// 3.1 นับจำนวนโรงหนังในรัฐ AL
db.theaters.find({ "location.address.state": "AL" }).count()