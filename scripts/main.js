const homeSliders = document.querySelectorAll(".home__slider");
const interval = 5000;
let index = 0;

function showSlider() {
  homeSliders[index].style.display = "block";
  homeSliders.forEach((slider, i) => {
    if (i !== index) {
      slider.style.display = "none";
    }
  });
  index++;
  if (index >= 3) {
    index = 0;
  }
}

showSlider();

setInterval(() => {
  showSlider();
}, interval);

const currentUserEl = document.getElementById("current-user");
const currentUserNameEl = document.getElementById("current-user-name");
const loginRegisterEl = document.getElementById("login-register");
const logoutBtn = document.getElementById("logout-btn");

checkLogin();

function checkLogin() {
  if (currentUser) {
    currentUserEl.style.display = "block";
    currentUserNameEl.textContent = currentUser.email;
    loginRegisterEl.style.display = "none";
  } else {
    currentUserEl.style.display = "none";
    loginRegisterEl.style.display = "block";
  }
}

logoutBtn.onclick = () => {
  localStorage.removeItem(CURRENT_USER_LOCALSTORAGE_KEY);
  currentUser = null;
  checkLogin();
};
