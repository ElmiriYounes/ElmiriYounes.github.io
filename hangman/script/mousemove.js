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
        // by default with mousemove, in mobile if we touchstart the screen the circle appears...
        // navigator.maxTouchPoints return 1 if touch finger is detected or 0 if not detected
        // if navigator.maxTouchPoints == 0 => cursor move in mobile
        // if navigator.maxTouchPoints == -1 => touch finger
        // if navigator.maxTouchPoints == 256 => cursor move in desktop
        console.log(navigator.maxTouchPoints)
      if (navigator.maxTouchPoints === 0  || navigator.maxTouchPoints === 256) {
        circle.style.top = e.clientY - 50 + "px";
        circle.style.left = e.clientX - 50 + "px";
        moveCircle("not hide");
      }
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
})();