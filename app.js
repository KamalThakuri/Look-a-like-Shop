const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");
close.addEventListener("click", () => {
  menu.style.visibility = "hidden";
});
open.addEventListener("click", () => {
  menu.style.visibility = "visible";
});

// my own
const items = document.querySelectorAll(".items");
const overlay = document.querySelector(".overlay");
const back = document.querySelector(".cancle-payment")
const payment = document.querySelector(".payment");

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function () {
    overlay.style.visibility = "visible";
  });
}

back.addEventListener("click", function () {
  overlay.style.visibility = "hidden";
})
payment.addEventListener("click", function () {
  overlay.style.visibility = "hidden";
})
