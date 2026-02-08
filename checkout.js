function confirmOrder() {
  const statusBox = document.getElementById("orderStatus");
  const statusText = document.getElementById("statusText");

  statusBox.style.display = "block";
  statusText.textContent = "📦 กำลังจัดส่งสินค้า";

  setTimeout(() => {
    statusText.textContent = "✅ จัดส่งสำเร็จแล้ว";
  }, 3000);
}
