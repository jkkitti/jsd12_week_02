//Categories
const category = {
  category_id: 1,
  category_name: "Beverage"
};

//Products
const product = {
  product_id: 101,
  product_name: "Black Coffee",
  sku_code: "COFFEE-001",
  price: 50.00,
  qty_in_stock: 20,
  category_id: 1 
};

//Users
const user = {
  user_id: 9,
  name: "Aod",
  role: "Admin"
};

//Stock_Movements
const movement = {
  movement_id: 5001,
  product_id: 101,  
  user_id: 9,       
  type: "IN",       
  quantity: 10,     
  date: "2025-03-11"
};