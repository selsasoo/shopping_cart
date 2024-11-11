const products = [
  {
    id: 1,
    name: "Smart TV",
    price: 499.99,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 2,
    name: "Laptop",
    price: 999.99,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 3,
    name: "Headphones",
    price: 199.99,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 4,
    name: "Smartphone",
    price: 699.99,
    image: "https://via.placeholder.com/200",
  },
];


let cart = [];


const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const totalPrice = document.getElementById("total-price");


function renderProducts() {
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
    productList.appendChild(productDiv);
  });
}


function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  cart.push(product);
  updateCart();
}


function removeFromCart(index) {
  cart.splice(index, 1); 
  updateCart();
}


function updateCart() {
  cartItems.innerHTML = ""; 
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    const cartItem = document.createElement("li");
    cartItem.innerHTML = `
            ${item.name} - $${item.price.toFixed(2)}
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
    cartItems.appendChild(cartItem);
  });

  totalPrice.innerText = total.toFixed(2); 
}


renderProducts();
