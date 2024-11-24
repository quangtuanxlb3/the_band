const loginText = document.querySelector(".title-text .login");
// const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
const registerForm = document.getElementById("register-form");
const loginForm = document.getElementById("login-form");

signupBtn.onclick = () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
};

loginBtn.onclick = () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
};

signupLink.onclick = () => {
  signupBtn.click();
  return false;
};

registerForm.addEventListener("submit", (event) => {
  const form = event.target;
  const formData = new FormData(form);

  const email = formData.get("email");
  const password = formData.get("password");

  const user = register(email, password);

  if (!user) {
    alert("Tài khoản đã được đăng ký");
  }
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  const email = formData.get("email");
  const password = formData.get("password");

  const user = login(email, password);

  if (!user) {
    alert("Thông tin đăng nhập không chính xác");
  }

  window.location.href = "/index.html";
});
