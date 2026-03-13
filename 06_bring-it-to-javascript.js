//Create a product list.
const products = [
  {
    id: "P001",
    name: "Coat hanger",
    price: 20,
    stock: 10
  },
  {
    id: "P002",
    name: "Clothespin",
    price: 10,
    stock: 20
  },
  {
    id: "P003",
    name: "Bowl",
    price: 40,
    stock: 15
  }
];

//View all products function.
function viewProducts() {
  console.log("Product List:");
  products.forEach(product => {
    console.log(product);
  });
}

viewProducts();


