// เรียกใช้ database
use("sample_mflix");

// 3.2 นับจำนวนโรงหนังในเมือง La Quinta
db.theaters.find({ "location.address.city": "La Quinta" }).count()