const buyTicketBtns = document.querySelectorAll("button.tour__tikets-item-btn");

buyTicketBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (currentUser) {
      // Xử lý mua ticket
      alert("Người dùng đã đăng nhập");
    } else {
      window.location.href = "./login_signup.html";
    }
  });
});
