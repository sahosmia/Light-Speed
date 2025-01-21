// Questions
const slidePage = document.querySelector(".slide-page");
const total = 3;
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const submitBtn = document.querySelector(".submit");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;
let calculate = `-${(current / total) * 100}%`;

nextBtnFirst.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = `-${(current / total) * 100}%`;
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  current += 1;
});
nextBtnSec.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = `-${(current / total) * 100}%`;
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  current += 1;
});

// Submit Button
submitBtn.addEventListener("click", function () {
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  // current += 1;
  setTimeout(function () {
    alert("Your Form Successfully Signed up");
    location.reload();
  }, 800);
});
prevBtnSec.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = `-${((current - 2) / total) * 100}%`;
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnThird.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = `-${((current - 2) / total) * 100}%`;
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  current -= 1;
});

//! ====================================== Modal
// Get elements
const openModalButton = document.getElementById("openModalButton");
const modal = document.getElementById("myModal");
const closeButton = document.querySelector(".close-button");

// Open modal
openModalButton.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Close modal
closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

/** ?   If you use any code for javascript,
 *? please write avobe the modal code,
 *? couse of window event lisener not accecept it. */
