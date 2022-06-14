(() => {
  let circle = document.querySelector(".mouse-move");

  /**
   *
   * @param {String} toggle
   */
  const moveCircle = (toggle) => {
    toggle === "hide"
      ? circle.classList.add("mouse-move-hidden")
      : circle.classList.remove("mouse-move-hidden");
  };

  document.body.addEventListener(
    "mousemove",
    (e) => {
      circle.style.top = e.clientY - 50 + "px";
      circle.style.left = e.clientX - 50 + "px";
      moveCircle("not hide");
    },
    false
  );

  document.body.addEventListener(
    "mouseleave",
    () => {
      moveCircle("hide");
    },
    false
  );

  document.body.addEventListener(
    "touchmove",
    (e) => {
      circle.style.top = (e.touches[0].clientY - 50) + "px";
      circle.style.left = (e.touches[0].clientX - 50) + "px";
      moveCircle("not hide");
    },
    false
  );

  document.body.addEventListener("touchend", (e) => {
    moveCircle("hide");
  });
})();
