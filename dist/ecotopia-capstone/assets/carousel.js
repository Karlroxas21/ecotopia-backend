const slider = document.querySelector(".image-slider");
const arrLeft = document.querySelector(".arrow-left");
const arrRight = document.querySelector(".arrow-right");
const heading = document.querySelector(".caption h1");
const description = document.querySelector(".caption p");

const images = ["tree.jpg", "soilerosion.jpg", "fire.jpg"];
const headings = ["Tree", "Soil", "Forest"];
const descriptions = [
  "The tree has already changed",
  "The soil has already crack",
  "The forest has already fire",
];

let id = 0;
function slide(id) {
  slider.style.backgroundImage = `url(/assets/exploreimages/${images[id]})`;
  slider.classList.add("image-fade");
  setTimeout(() => {
    slider.classList.remove("image-fade");
  }, 550);
  heading.innerText = headings[id];
  description.innerText = descriptions[id];
}
arrLeft.addEventListener("click", () => {
  id--;
  if (id < 0) {
    id = images.length - 1;
  }
  slide(id);
});

arrRight.addEventListener("click", () => {
  id++;
  if (id > images.length - 1) {
    id = 0;
  }
  slide(id);
});