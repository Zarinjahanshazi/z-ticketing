function validCode() {
  const discountCode = document.getElementById("discount-code").value; 
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
  const showSeat = document.getElementById("seat-info");
  const span = document.createElement("span");
  span.innerHTML = `<div class="text-base text-[#03071299]  flex justify-between items-center font-medium">
    <p> ${event.target.id} </p>
    <p>Economy</p>
    <p>550</p>
  </div>`;
  showSeat.appendChild(span);

  
  if (conformSeats.length === 4) {
    document.getElementById("apply-btn").removeAttribute("disabled");
  }

  
  document.getElementById("show-total").innerText = conformSeats.length * 550;
  document.getElementById("seats-left").innerText = 32 - conformSeats.length;
  document.getElementById("selected-seat").innerText = conformSeats.length;
  document.getElementById("grand-amount").innerText = conformSeats.length * 550;

  
  document.getElementById("apply-btn").addEventListener("click", validCode);
  
  document.getElementById("phone-number").addEventListener("keyup", phoneNumberValidation);
} else if (conformSeats.includes(event.target.id)) {
 
} else {
  alert("You can not purchase more than 4 seats ");
}
phoneNumberValidation();
}