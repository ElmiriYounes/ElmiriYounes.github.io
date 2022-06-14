(() => {
  let circles = document.querySelectorAll(".mouse-move");
  let speed = 0; // secondes
  const keyboard = document.querySelector(".keyboard");

  circles.forEach((circle) => {
    circle.style.transition = `all ${speed}s ease-out`;
    speed += 0.2;
  });

  document.body.addEventListener("mousemove", (e) => {
    circles.forEach((circle) => {
      circle.style.top = e.clientY - 60 + "px";
      circle.style.left = e.clientX - 50 + "px";
    });
  });

  document.body.addEventListener("mouseenter", () => {
    circles.forEach((circle) => {
      circle.classList.remove("mouse-move-hidden");
    });
  });

  document.body.addEventListener("mouseleave", () => {
    circles.forEach((circle) => {
      circle.classList.add("mouse-move-hidden");
    });
  });

  keyboard.addEventListener("mouseenter", () => {
    circles.forEach((circle) => {
      circle.classList.add("mouse-move-hidden");
    });
  });

  keyboard.addEventListener("mouseleave", () => {
    circles.forEach((circle) => {
      circle.classList.remove("mouse-move-hidden");
    });
  });

  document.body.addEventListener("touchmove", (e) => {
    circles.forEach((circle) => {
      circle.classList.remove("mouse-move-hidden");
      circle.style.top = e.clientY - 60 + "px";
      circle.style.left = e.clientX - 50 + "px";
    });
  });
})();
