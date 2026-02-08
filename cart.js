let cart = JSON.parse(localStorage.getItem("cart")) || [];
const table = document.getElementById("cartTable");
const totalBox = document.getElementById("cartTotal");

function renderCart() {
  table.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.qty;

    table.innerHTML += `
      <tr>
        <td>
          ${item.name} <br>
          <small>จำนวน: ${item.qty}</small>
        </td>
        <td>฿${item.price * item.qty}</td>
        <td>
          <button class="remove-btn" onclick="removeItem(${index})">
            ลบ
          </button>
        </td>
      </tr>
    `;
  });

  totalBox.textContent = total;
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

renderCart();
