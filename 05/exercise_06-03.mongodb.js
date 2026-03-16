// เรียกใช้ database
use("sample_mflix");

// 6.3 นับว่า Roy L. McCardell แสดงกี่เรื่อง
// "cast" เป็น array → MongoDB ค้นใน array ได้โดยตรง ไม่ต้องใช้ $in
db.movies.find({ cast: "Roy L. McCardell" }).count()