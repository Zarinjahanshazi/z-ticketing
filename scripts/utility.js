  function amount(elementId) {
    const couponField = document.getElementById("coupon-field");
    const showTotal = document.getElementById("show-total").innerText;
    const span = document.createElement("span");
    if (elementId === "NEW15") {
      span.innerHTML =  `<div class="text-base text-[#030712] font-medium flex inter justify-between items-center  ">
          <p class="text-[#1DD100]">Discount</p>
          <p class="text-[#1DD100]" >BDT <span id="after-discount">${
            parseInt(showTotal) * 0.15
          }</span></p>
      </div>`;
      couponField.innerHTML = "";
      couponField.appendChild(span);
    } else {
      span.innerHTML = `
      <div class="text-base text-[#030712] font-medium flex inter justify-between items-center">
          <p class="text-[#1DD100] ">Discount</p>
          <p class="text-[#1DD100]">BDT <span id="after-discount">${
            parseInt(showTotal) * 0.2
          }</span></p>
      </div>`;
      couponField.innerHTML = "";
      couponField.appendChild(span);
    }
    const afterDiscount = document.getElementById("after-discount").innerText;
    document.getElementById("grand-amount").innerText =
      parseInt(showTotal) - parseInt(afterDiscount);
  }

//color change for seats
  function purchaseSeat(elementId) {
    document.getElementById(elementId).style.backgroundColor = "#1DD100";
    document.getElementById(elementId).style.color = "white";
  }


  function unPurchaseSeat(elementId) {
    document.getElementById(elementId).style.backgroundColor = "#F2F2F2";
    document.getElementById(elementId).style.color = "#03071280";
  }