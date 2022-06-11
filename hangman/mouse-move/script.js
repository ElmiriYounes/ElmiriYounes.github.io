let movemouse = document.querySelector(".movemouse");
let starAnimate = document.querySelector(".fa-star");

/**
 * mouse move for desktop (cursor mouse)
 */
(() => {
  document.querySelector(".target").addEventListener("mousemove", (e) => {
    let top = e.clientY;
    let left = e.clientX;
    movemouse.style.top = top + "px";
    movemouse.style.left = left + "px";
    movemouse.style.transition = "none";
    starAnimate.classList.add("opacity");
  });

  document.querySelector(".target").addEventListener("mouseleave", (e) => {
    // e.target.animate([{},{}],{duration: 1000})
    movemouse.style.top = "50%";
    movemouse.style.left = "50%";
    movemouse.style.transition = "all 0.3s ease-out";
    starAnimate.classList.remove("opacity");
  });
})();

/**
 * mouse move for mobile (touch finger mouse)
 */
(() => {
  document.querySelector(".target").addEventListener("touchmove", (e) => {
    let startX = e.touches[0].clientX;
    let startY = e.touches[0].clientY;

    movemouse.style.top = startY + "px";
    movemouse.style.left = startX + "px";
    movemouse.style.transition = "all 0.05s ease-out";
    starAnimate.classList.add("opacity");

    // equivalent of mouseleave
    let startTopDisplay = document.querySelector(".target").offsetTop;
    let startLeftDisplay = document.querySelector(".target").offsetLeft;
    let endTopDisplay =
      document.querySelector(".target").offsetHeight + startTopDisplay;
    let endLeftDisplay =
      document.querySelector(".target").offsetWidth + startLeftDisplay;
    if (
      startX <= startLeftDisplay ||
      startX >= endLeftDisplay ||
      startY <= startTopDisplay ||
      startY >= endTopDisplay
    ) {
      touchLeave();
    }
  });

  document.querySelector(".target").addEventListener("touchend", (e) => {
    touchLeave();
  });

  const touchLeave = () => {
    movemouse.style.top = "50%";
    movemouse.style.left = "50%";
    starAnimate.classList.remove("opacity");
    movemouse.style.transition = "all 0.3s ease-out";
  };
})();
