const PRODUCTS = [
  {
    id: 1,
    image: "./assets/images/image.3.jpg",
    title: "BANGKOK, THAILAND",
    time: "Fri 27 Nov 2024",
    description: "IMPACT ARENA.",
    quantity: 1000,
  },
  {
    id: 2,
    image: "./assets/images/image.4.jpg",
    title: "MUMBAI, INDO",
    time: "Sat 28 Nov 2024",
    description: "MAHALAXMI RACE COURSE.",
    quantity: 1000,
  },
  {
    id: 3,
    image: "./assets/images/image.5.jpg",
    title: "MANILA, PHILIPPINES",
    time: "Sun 29 Nov 2024",
    description: "MALL OFF ASIA ARENA.",
    quantity: 1000,
  },
];

const tourTicketsEl = document.getElementById("tour-tickets");

function renderProducts() {
  tourTicketsEl.innerHTML = "";
  PRODUCTS.forEach((product) => {
    const productItemEl = `
            <div class="tour__tickets-item-container">
                <div class="tour__tikets-item">
                    <img src="${product.image}" alt="" />
                    <div style="padding: 12px;">
                      <h4 class="tour__tikets-item-title">${product.title}</h4>
                      <p class="tour__tikets-item-time">${product.time}</p>
                      <p class="tour__tikets-item-description">${product.description}</p>
                      <button class="tour__tikets-item-btn">Buy Tickets</button>
                      <input class="tour__tickets-item-quantity" type="number" />
                    </div>
                </div>
            </div>
        `;
    tourTicketsEl.insertAdjacentHTML("beforeend", productItemEl);
  });
}

renderProducts();
