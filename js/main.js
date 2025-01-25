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

if (
  nextBtnFirst &&
  slidePage &&
  bullet.length &&
  progressCheck.length &&
  submitBtn &&
  nextBtnSec &&
  prevBtnThird &&
  prevBtnSec &&
  total
) {
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
}


//! Table

document.addEventListener("DOMContentLoaded", () => {
  const draggableElements = document.querySelectorAll(".draggable");
  let activeElement = null;
  let offsetX = 0;
  let offsetY = 0;

  // Initial positions for each table (customize as needed)
  const initialPositions = [
    { id: "table-1", top: 20, left: 50 },
    { id: "table-2", top: 20, left: 300 },
    { id: "table-3", top: 20, left: 400 },
    { id: "table-4", top: 20, left: 700 },
    { id: "table-5", top: 20, left: 800 },
    { id: "table-6", top: 20, left: 1100 },
    { id: "table-7", top: 400, left: 50 },
    { id: "table-8", top: 400, left: 300 },
    { id: "table-9", top: 400, left: 400 },
    { id: "table-10", top: 350, left: 700 },
    { id: "table-11", top: 400, left: 1000 },
    { id: "table-12", top: 750, left: 50 },
    { id: "table-13", top: 800, left: 300 },
    { id: "table-14", top: 800, left: 400 },
    { id: "table-15", top: 800, left: 600 },
    { id: "table-16", top: 800, left: 800 },
    { id: "table-17", top: 800, left: 1100 },
  ];

  // Detect device type
  const isTouchDevice = "ontouchstart" in document.documentElement;

  // Define event types for mouse and touch
  const events = {
    start: isTouchDevice ? "touchstart" : "mousedown",
    move: isTouchDevice ? "touchmove" : "mousemove",
    end: isTouchDevice ? "touchend" : "mouseup",
  };

  // Apply initial positions
  initialPositions.forEach((position) => {
    const element = document.getElementById(position.id);
    if (element) {
      element.style.top = `${position.top}px`;
      element.style.left = `${position.left}px`;
      element.style.position = "absolute"; // Ensure absolute positioning
    }
  });

  // Function to start dragging
  const startDrag = (e) => {
    activeElement = e.target.closest(".draggable");

    if (activeElement) {
      const rect = activeElement.getBoundingClientRect();
      const containerRect = activeElement.parentElement.getBoundingClientRect();

      offsetX = isTouchDevice
        ? e.touches[0].clientX - rect.left + containerRect.left
        : e.clientX - rect.left + containerRect.left;
      offsetY = isTouchDevice
        ? e.touches[0].clientY - rect.top + containerRect.top
        : e.clientY - rect.top + containerRect.top;

      // Add event listeners for dragging
      document.addEventListener(events.move, drag);
      document.addEventListener(events.end, stopDrag);
    }
  };

  // Function to drag the element
  const drag = (e) => {
    if (!activeElement) return;

    const containerRect = activeElement.parentElement.getBoundingClientRect();
    const x = isTouchDevice ? e.touches[0].clientX : e.clientX;
    const y = isTouchDevice ? e.touches[0].clientY : e.clientY;

    const newLeft = x - offsetX + containerRect.left;
    const newTop = y - offsetY + containerRect.top;

    activeElement.style.left = `${newLeft - containerRect.left}px`;
    activeElement.style.top = `${newTop - containerRect.top}px`;
  };

  // Function to stop dragging
  const stopDrag = () => {
    activeElement = null;

    // Remove event listeners
    document.removeEventListener(events.move, drag);
    document.removeEventListener(events.end, stopDrag);
  };

  // Add event listeners to all draggable elements
  draggableElements.forEach((element) => {
    element.addEventListener(events.start, startDrag);
  });
});

//! Tree

document.addEventListener("DOMContentLoaded", () => {
  const draggableTrees = document.querySelectorAll(".tree");
  let activeElement = null;
  let offsetX = 0;
  let offsetY = 0;

  // Initial positions for each table (customize as needed)
  const initialPositions = [
    { id: "tree-1", top: 20, left: 100 },
    { id: "tree-2", top: 20, left: 200 },
    { id: "tree-3", top: 20, left: 500 },
    { id: "tree-4", top: 20, left: 600 },
    { id: "tree-5", top: 20, left: 900 },
    { id: "tree-6", top: 20, left: 1000 },
    { id: "tree-7", top: 300, left: 50 },
    { id: "tree-8", top: 300, left: 280 },
    { id: "tree-9", top: 300, left: 360 },
    { id: "tree-10", top: 300, left: 420 },
    { id: "tree-11", top: 200, left: 1100 },
    { id: "tree-12", top: 300, left: 1100 },
    { id: "tree-13", top: 480, left: 50 },
    { id: "tree-14", top: 480, left: 280 },
    { id: "tree-15", top: 480, left: 360 },
    { id: "tree-16", top: 480, left: 420 },
    { id: "tree-17", top: 480, left: 1100 },
    { id: "tree-18", top: 650, left: 50 },
    { id: "tree-19", top: 650, left: 280 },
    { id: "tree-20", top: 650, left: 360 },
  ];

  // Detect device type
  const isTouchDevice = "ontouchstart" in document.documentElement;

  // Define event types for mouse and touch
  const events = {
    start: isTouchDevice ? "touchstart" : "mousedown",
    move: isTouchDevice ? "touchmove" : "mousemove",
    end: isTouchDevice ? "touchend" : "mouseup",
  };

  // Apply initial positions
  initialPositions.forEach((position) => {
    const element = document.getElementById(position.id);
    if (element) {
      element.style.top = `${position.top}px`;
      element.style.left = `${position.left}px`;
      element.style.position = "absolute";
    }
  });

  // Function to start dragging
  const startDrag = (e) => {
    activeElement = e.target.closest(".tree");

    if (activeElement) {
      const rect = activeElement.getBoundingClientRect();
      const containerRect = activeElement.parentElement.getBoundingClientRect();

      offsetX = isTouchDevice
        ? e.touches[0].clientX - rect.left + containerRect.left
        : e.clientX - rect.left + containerRect.left;
      offsetY = isTouchDevice
        ? e.touches[0].clientY - rect.top + containerRect.top
        : e.clientY - rect.top + containerRect.top;

      // Add event listeners for dragging
      document.addEventListener(events.move, drag);
      document.addEventListener(events.end, stopDrag);
    }
  };

  // Function to drag the element
  const drag = (e) => {
    if (!activeElement) return;

    const containerRect = activeElement.parentElement.getBoundingClientRect();
    const x = isTouchDevice ? e.touches[0].clientX : e.clientX;
    const y = isTouchDevice ? e.touches[0].clientY : e.clientY;

    const newLeft = x - offsetX + containerRect.left;
    const newTop = y - offsetY + containerRect.top;

    activeElement.style.left = `${newLeft - containerRect.left}px`;
    activeElement.style.top = `${newTop - containerRect.top}px`;
  };

  // Function to stop dragging
  const stopDrag = () => {
    activeElement = null;

    // Remove event listeners
    document.removeEventListener(events.move, drag);
    document.removeEventListener(events.end, stopDrag);
  };

  // Add event listeners to all draggable elements
  draggableTrees.forEach((element) => {
    element.addEventListener(events.start, startDrag);
  });
});

//! ====================================== Modal
// Get elements
const openModalButton = document.getElementById("openModalButton");
const modal = document.getElementById("myModal");
const closeButton = document.querySelector(".close-button");

if (openModalButton && modal && closeButton) {
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
}

/** ?   If you use any code for javascript,
 *? please write avobe the modal code,
 *? couse of window event lisener not accecept it. */
