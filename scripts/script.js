function validCode() {
  const discountCode = document.getElementById("coupon-code").value; 
  if (discountCode === "Couple 20") {
    amount(discountCode);
  } else if (discountCode === "NEW15") {
    amount(discountCode);
  } else {
    alert("Input a appropriate code");
  }
}

function phoneNumberValidation() {
  const phoneNumber = document.getElementById("phone-number").value;
  if (conformSeats.length > 0 && phoneNumber.length === 11) {
    document.getElementById("next-btn").removeAttribute("disabled");
  }
}
 

const conformSeats = [];
function alphabetId(event) {
if (conformSeats.length < 4 && !conformSeats.includes(event.target.id)) {
  conformSeats.push(event.target.id);
  purchaseSeat(event.target.id);
  const showSeat = document.getElementById("show-seat");
  const span = document.createElement("span");
  span.innerHTML = `
  <div class="text-base text-[#03071299] font-medium flex justify-between items-center">
    <p>
    ${event.target.id}
    </p>
    <p>Economy</p>
    <p>550</p>
  </div>`;
  showSeat.appendChild(span);

  // Button enable
  if (conformSeats.length === 4) {
    document.getElementById("apply-btn").removeAttribute("disabled");
  }

  // Update Value
  document.getElementById("show-total").innerText = conformSeats.length * 550;
  document.getElementById("available-seat").innerText =
    40 - conformSeats.length;
  document.getElementById("seat-booked").innerText = conformSeats.length;
  document.getElementById("grand-amount").innerText = conformSeats.length * 550;

  // Coupon validation
  document.getElementById("apply-btn").addEventListener("click", validCode);
  // next button enable
  document
    .getElementById("phone-number")
    .addEventListener("keyup", phoneNumberValidation);
} else if (conformSeats.includes(event.target.id)) {
 
} else {
  alert("You can not purchase more than 4 seats ");
}
phoneNumberValidation();
}