function togglePassword(id, el) {
  const input = document.getElementById(id);
  if (input.type === "password") {
    input.type = "text";
    el.textContent = "🙈";
  } else {
    input.type = "password";
    el.textContent = "👁️";
  }
}

// สมัครสมาชิก
function register() {
  const user = document.getElementById("newUser").value.trim();
  const pass = document.getElementById("newPass").value;
  const confirm = document.getElementById("confirmPass").value;

  if (!user || !pass || !confirm) {
    alert("❌ กรุณากรอกข้อมูลให้ครบ");
    return;
  }

  if (pass.length < 6) {
    alert("⚠️ รหัสผ่านต้องอย่างน้อย 6 ตัว");
    return;
  }

  if (pass !== confirm) {
    alert("❌ รหัสผ่านไม่ตรงกัน");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const exists = users.find(u => u.username === user);
  if (exists) {
    alert("⚠️ ชื่อผู้ใช้นี้ถูกใช้แล้ว");
    return;
  }

  users.push({ username: user, password: pass });
  localStorage.setItem("users", JSON.stringify(users));

  alert("✅ สมัครสมาชิกสำเร็จ");
  window.location.href = "login.html";
}

// เข้าสู่ระบบ
function login() {
  const user = document.getElementById("loginUser").value.trim();
  const pass = document.getElementById("loginPass").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const found = users.find(
    u => u.username === user && u.password === pass
  );

  if (!found) {
    alert("❌ ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
    return;
  }

  localStorage.setItem("loggedInUser", user);
  alert("🎉 เข้าสู่ระบบสำเร็จ");
  window.location.href = "index.html";
}
