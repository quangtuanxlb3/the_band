const ticketForm = document.querySelectorAll("form.ticket-form");

const BOUGHT_TICKETS_LOCALSTORAGE_KEY = "w3s-bought-tickets";
let BOUGHT_TICKETS =
  JSON.parse(localStorage.getItem(BOUGHT_TICKETS_LOCALSTORAGE_KEY)) || [];

ticketForm.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const quantity = formData.get("ticket-quantity");
    const productId = formData.get("ticket-product-id");

    if (quantity < 0) {
      alert("Số lượng vé phải lớn hơn 0");
    }

    buyTicket(productId, quantity);
    if (currentUser) {
    } else {
      window.location.href = "./login_signup.html";
    }
  });
});

function buyTicket(productId, quantity) {
  productId = +productId;
  quantity = +quantity;

  const product = PRODUCTS.find((product) => product.id === productId);

  if (!product) {
    alert("Không tìm thấy sản phẩm");
    return;
  }

  if (quantity > product.quantity) {
    alert("Số lượng vé không đủ để bán");
    return;
  }

  if (quantity === 0 || !quantity) {
    quantity = 1;
  }

  if (!BOUGHT_TICKETS.some((ticket) => ticket.productId === product.id)) {
    BOUGHT_TICKETS.push({ ...product, quantity });
  } else {
    BOUGHT_TICKETS = BOUGHT_TICKETS.map((ticket) => {
      if (ticket.productId === product.id) {
        return {
          ...ticket,
          quantity: ticket.quantity + quantity,
        };
      }
      return ticket;
    });
  }

  PRODUCTS = PRODUCTS.map((product) => {
    if (product.id === productId) {
      return {
        ...product,
        quantity: product.quantity - quantity,
      };
    }
    return product;
  });

  localStorage.setItem(
    BOUGHT_TICKETS_LOCALSTORAGE_KEY,
    JSON.stringify(BOUGHT_TICKETS)
  );

  const ticketNumberEl = document.getElementById(
    `ticket-quantity-${productId}`
  );
  ticketNumberEl.textContent = product.quantity - quantity;

  saveProductsToLocalStorage();
  renderCartQuantity();
}

function renderCartQuantity() {
  const cartNumberEl = document.getElementById("cart-number");
  const quantity = BOUGHT_TICKETS.reduce(
    (total, ticket) => total + ticket.quantity,
    0
  );

  cartNumberEl.textContent = quantity;
}

renderCartQuantity();
