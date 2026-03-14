//Categories
const category = {
  category_id: 1,
  category_name: "Beverage"
};

//Products
const product = {
  product_id: 101,
  product_name: "Black Coffee",
  sku_code: "COF-001",
  price: 50.00,
  qty_in_stock: 20,
  reorder_level: 5,
  category_id: 1,
  created_at: "2025-03-11T00:00:00",
};

//Users
const user = {
  user_id: 1,
  name: "Aod",
  email: "aod@example.com",  
  password: "hash_password",
  role: "Admin",
  created_at: "2025-03-11T00:00:00"
};

//Stock_Movements
const movement = {
  movement_id: 1001,
  product_id: 101,  
  user_id: 1,       
  type: "IN",       
  quantity: 10,     
  date: "2025-03-11",
  remarks: "msg", // (ใส่ว่างก็ได้ถ้าไม่มีหมายเหตุ)
  created_at: "2025-03-11T00:00:00"  
};

console.log(category);
console.log(product);
console.log(user);
console.log(movement);