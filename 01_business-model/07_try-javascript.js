// ===== ข้อมูลจำลอง (แทน Database) =====
const db = {
  categories: [
    { category_id: 1, category_name: "Electronics" },
    { category_id: 2, category_name: "Clothing" },
  ],
  products: [
    { product_id: 1, product_name: "Laptop", sku_code: "LAP001", price: 25000, qty_in_stock: 10, reorder_level: 3, category_id: 1 },
    { product_id: 2, product_name: "T-Shirt",  sku_code: "TSH001", price: 299,   qty_in_stock: 50, reorder_level: 10, category_id: 2 },
  ],
  users: [
    { user_id: 1, name: "สมชาย", email: "som@example.com", role: "admin" },
  ],
  stock_movements: [],
  next_movement_id: 1,
};


// ===== 1. ดูสินค้าทั้งหมด =====
function getAllProducts() {
  return db.products.map(p => {
    const cat = db.categories.find(c => c.category_id === p.category_id);
    return { ...p, category_name: cat?.category_name ?? "ไม่ระบุ" };
  });
}


// ===== 2. เพิ่มสินค้าเข้าคลัง (Stock IN) =====
function stockIn(productId, quantity, userId, remarks = "") {
  const product = db.products.find(p => p.product_id === productId);
  if (!product) return { success: false, message: "ไม่พบสินค้า" };
  if (quantity <= 0)  return { success: false, message: "จำนวนต้องมากกว่า 0" };

  product.qty_in_stock += quantity;

  db.stock_movements.push({
    movement_id: db.next_movement_id++,
    product_id: productId,
    user_id: userId,
    type: "IN",
    quantity,
    date: new Date().toISOString().split("T")[0],
    remarks,
    created_at: new Date().toISOString(),
  });

  return { success: true, message: `เพิ่มสต็อก ${product.product_name} +${quantity} ชิ้น` };
}


// ===== 3. ตัดสินค้าออกคลัง (Stock OUT) =====
function stockOut(productId, quantity, userId, remarks = "") {
  const product = db.products.find(p => p.product_id === productId);
  if (!product)               return { success: false, message: "ไม่พบสินค้า" };
  if (quantity <= 0)          return { success: false, message: "จำนวนต้องมากกว่า 0" };
  if (product.qty_in_stock < quantity)
                              return { success: false, message: "สินค้าในคลังไม่เพียงพอ" };

  product.qty_in_stock -= quantity;

  db.stock_movements.push({
    movement_id: db.next_movement_id++,
    product_id: productId,
    user_id: userId,
    type: "OUT",
    quantity,
    date: new Date().toISOString().split("T")[0],
    remarks,
    created_at: new Date().toISOString(),
  });

  return { success: true, message: `ตัดสต็อก ${product.product_name} -${quantity} ชิ้น` };
}


// ===== 4. เช็คสินค้าที่ต้องสั่งซื้อเพิ่ม =====
function getLowStockProducts() {
  return db.products.filter(p => p.qty_in_stock <= p.reorder_level);
}


// ===== 5. ดูประวัติการเคลื่อนไหวสินค้า =====
function getMovementHistory(productId) {
  return db.stock_movements
    .filter(m => m.product_id === productId)
    .map(m => {
      const user = db.users.find(u => u.user_id === m.user_id);
      const product = db.products.find(p => p.product_id === m.product_id);
      return { ...m, user_name: user?.name, product_name: product?.product_name };
    });
}


// ===== ทดสอบใช้งาน =====
console.log("📦 สินค้าทั้งหมด:", getAllProducts());

console.log(stockIn(1, 5, 1, "รับสินค้าจาก Supplier A"));   // +5 Laptop
console.log(stockOut(1, 3, 1, "ขายให้ลูกค้า"));             // -3 Laptop
console.log(stockOut(1, 99, 1));                              // ❌ ไม่พอ

console.log("⚠️ สินค้าใกล้หมด:", getLowStockProducts());
console.log("📋 ประวัติ Laptop:", getMovementHistory(1));