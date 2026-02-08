/* ======================
   CART SYSTEM
====================== */

// โหลดตะกร้าจาก LocalStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// อัปเดตจำนวนตะกร้า
const cartCount = document.getElementById("cartCount");
if (cartCount) {
  cartCount.textContent = cart.length;
}

// ฟังก์ชันเพิ่มสินค้า
function addToCart(name, price) {
cart.push({ name, price, qty: 1 });
  localStorage.setItem("cart", JSON.stringify(cart));

  if (cartCount) {
    cartCount.textContent = cart.length;
  }

  alert("เพิ่มสินค้าแล้ว ✅");
}

/* ======================
   SEARCH SYSTEM
====================== */

const searchInput = document.getElementById("searchInput");
const products = document.querySelectorAll(".product-card");

if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    const keyword = searchInput.value.toLowerCase();

    products.forEach(product => {
      const name = product.querySelector("h3").textContent.toLowerCase();
      product.style.display = name.includes(keyword) ? "" : "none";
    });
  });
}
