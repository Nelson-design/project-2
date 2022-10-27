const img1 = "images/image1.jpg";
const img2 = "images/image2.jpg";
const img3 = "images/image3.jpg";
const img4 = "images/image4.jpg";

let image = document.querySelector(".slider-images");
const dots = document.querySelectorAll(".dot");

let index = 0;
let imgList = [img1, img2, img3, img4];
const interval = 2000;

function slider() {
  if (index >= imgList.length) index = 0;
  image.src = imgList[index];
  dotIndex(index);
  index++;
}

const dotIndex = (n) => {
  // Remove active when not on index
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
  // Put back active when at the correct index
  dots[n].classList.add("active");
};

setInterval(slider, interval);

image.addEventListener("load", setInterval);