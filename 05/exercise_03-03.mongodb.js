// เรียกใช้ database
use("sample_mflix");

// 3.3 ดูตัวอย่าง document โรงหนัง 1 แห่งในเมือง La Quinta
db.theaters.findOne({ "location.address.city": "La Quinta" })