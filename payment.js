let date, address;
document
  .getElementById("change-address-btn")
  .addEventListener("click", function () {
    document.getElementById("address-container").style.display = "none";
    document.getElementById("address-form").style.display = "flex";
  });

document
  .getElementById("save-address-btn")
  .addEventListener("click", function () {
    const newAddress = document.getElementById("new-address").value.trim();

    if (newAddress) {
      document.getElementById("address-text").innerHTML = newAddress;
    }
    address = newAddress;

    document.getElementById("address-container").style.display = "flex";
    document.getElementById("address-form").style.display = "none";
  });

document
  .getElementById("change-delivery-btn")
  .addEventListener("click", function () {
    document.getElementById("delivery-form").style.display = "flex";
  });

document
  .getElementById("save-delivery-date-btn")
  .addEventListener("click", function () {
    const newDeliveryDate = document.getElementById("new-delivery-date").value;

    if (newDeliveryDate) {
      const formattedDate = new Date(newDeliveryDate).toLocaleDateString(
        "vi-VN",
        {
          weekday: "short",
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }
      );
      document.getElementById(
        "delivery-date"
      ).textContent = `Giao ${formattedDate}`;
    }

    date = newDeliveryDate;

    document.getElementById("delivery-form").style.display = "none";
  });

const BOUGHT_TICKETS_LOCALSTORAGE_KEY = "w3s-bought-tickets";
let BOUGHT_TICKETS =
  JSON.parse(localStorage.getItem(BOUGHT_TICKETS_LOCALSTORAGE_KEY)) || [];
const productListEl = document.getElementById("product-list");

function renderBoughtTickets() {
  productListEl.innerHTML = "";

  BOUGHT_TICKETS.forEach((ticket) => {
    const productItem = `
    <div id="product-item">
        <div class="product-details">
            <img src="${ticket.image}" alt="Product" />
            <div>
                <p>${ticket.title}</p>
                <p>SL: ${ticket.quantity}</p>
            </div>
        </div>
        <p class="price">
            <strong>${ticket.price}$ </strong> <span class="original-price"></span>
        </p>
    </div>
    `;

    productListEl.insertAdjacentHTML("beforeend", productItem);
  });
}

renderBoughtTickets();

const feePaymentEl = document.getElementById("fee-payment");
const totalPayment = document.getElementById("total-payment");
const renderFeePayment = () => {
  const feePayment = BOUGHT_TICKETS.reduce(
    (total, ticket) => total + ticket.price * ticket.quantity,
    0
  );
  feePaymentEl.textContent = feePayment + "$";
  totalPayment.textContent = feePayment + 2 + "$";
};

renderFeePayment();

const orderBtn = document.getElementById("order-btn");
orderBtn.addEventListener("click", function () {
  alert(
    ` Bạn đã đặt hàng thành công tổng số tiền ${totalPayment.textContent} vào ngày ${date}, địa chỉ: ${address} `
  );
  BOUGHT_TICKETS = [];
  localStorage.setItem(BOUGHT_TICKETS_LOCALSTORAGE_KEY, JSON.stringify([]));
  renderBoughtTickets();
  renderFeePayment();
});
