let display = document.querySelector(".image-display");
let target = document.getElementById("target");
let images = document.querySelectorAll(".image");

/**
 * Drag/Drop for desktop with mouse cursor
 */

images.forEach((image) => {
  // dragstart = starting drag
  image.addEventListener("dragstart", (event) => {
    // opacity 0.2 on dragstart
    image.style.opacity = "0.3";
    // store source url of image (=> image.getAttribute("src")) on a data variable named "sourceUrl" for example
    event.dataTransfer.setData("sourceUrl", image.getAttribute("src"));
  });

  // dragend = end of drag
  image.addEventListener("dragend", () => {
    // opacity 1 on dragend
    image.style.opacity = "1";
  });
});

// by default the drop is denied on drop event => enable it with calling the function preventDefault();
// enable preventDefault() for event dragover and drop
display.addEventListener("dragover", (event) => {
  // enable drop
  event.preventDefault();
});

// on drop
display.addEventListener("drop", (event) => {
  // enable drop
  event.preventDefault();
  // keep the url data stored after dragstart event
  let urlImage = event.dataTransfer.getData("sourceUrl");
  target.src = urlImage;
});

/**
 * Drag/Drop for mobile screen with touch
 */

// the small draggable image followinf touch move
let draggableImg = document.querySelector(".draggable-mobile");

images.forEach((image) => {
  // dragstart = starting drag
  let leftTouch;
  let topTouch;
  let sourceUrl;
  let startTopDisplay;
  let startLeftDisplay;
  let endTopDisplay;
  let endLeftDisplay;
  image.addEventListener("touchmove", (e) => {
    // get position of cursor
    leftTouch = e.targetTouches[0].pageX;
    topTouch = e.targetTouches[0].pageY;
    // get limits of div display image
    startTopDisplay = display.offsetTop;
    startLeftDisplay = display.offsetLeft;
    endTopDisplay = display.offsetHeight + startTopDisplay;
    endLeftDisplay = display.offsetWidth + startLeftDisplay;
    // opacity 0.2 on dragstart
    image.style.opacity = "0.3";
    // get url source of image
    sourceUrl = image.getAttribute("src");
    // generate small draggable image
    draggableImg.src = sourceUrl;
    draggableImg.style.display = "block";
    draggableImg.style.left = leftTouch - 35 + "px";
    draggableImg.style.top = topTouch - 20 + "px";
  });
  // dragend = end of drag
  image.addEventListener("touchend", () => {
    // opacity 1 on dragend
    image.style.opacity = "1";
    // check if into the bloc display image to drop image
    if (
      leftTouch >= startLeftDisplay &&
      leftTouch <= endLeftDisplay &&
      topTouch >= startTopDisplay &&
      topTouch <= endTopDisplay
    ) {
      target.src = sourceUrl;
    }
    draggableImg.style.display = "none";
  });
});
