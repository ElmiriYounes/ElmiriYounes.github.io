const btnGallery = document.querySelectorAll(".btn-gallery");
const gallery = document.querySelectorAll(".gallery");
var bntActive = 0;

for (let index in btnGallery) {
  let item = btnGallery[index];
  item.addEventListener("click", () => {
    btnGallery[bntActive].classList.remove("active-btn-gallery");
    gallery[bntActive].classList.add("gallery-hidden");
    btnGallery[index].classList.add("active-btn-gallery");
    gallery[index].classList.remove("gallery-hidden");
    bntActive = index;
  });
}
