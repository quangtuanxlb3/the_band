
document.getElementById("change-address-btn").addEventListener("click", function () {
    document.getElementById("address-container").style.display = "none";
    document.getElementById("address-form").style.display = "flex";
  });
  

  document.getElementById("save-address-btn").addEventListener("click", function () {
    const newAddress = document.getElementById("new-address").value.trim();
  
    if (newAddress) {
      document.getElementById("address-text").innerHTML = newAddress;
    }
  
    document.getElementById("address-container").style.display = "flex";
    document.getElementById("address-form").style.display = "none";
  });
  

  document.getElementById("change-delivery-btn").addEventListener("click", function () {
    document.getElementById("delivery-form").style.display = "flex";
  });

  document.getElementById("save-delivery-date-btn").addEventListener("click", function () {
    const newDeliveryDate = document.getElementById("new-delivery-date").value;
  
    if (newDeliveryDate) {
     
      const formattedDate = new Date(newDeliveryDate).toLocaleDateString("vi-VN", {
        weekday: "short",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
      document.getElementById("delivery-date").textContent = `Giao ${formattedDate}`;
    }
  
    document.getElementById("delivery-form").style.display = "none";
  });
  