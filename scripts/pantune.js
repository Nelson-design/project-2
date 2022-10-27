
const img1 = "images/slider1.png";
const img2 = "images/slider2.jpg";
const img3 = "images/slider3.jpg";
const img4 = "images/slider4.jpg";
const img5 = "images/ads.jpg";


let imageArray = [img1, img2, img3, img4, img5];
const interval = 2000;

let slideVariable = document.querySelector("#slides");
let dots = document.querySelectorAll(".dot");


let index = 0;

function slide(){
  if(index >= imageArray.length) index = 0;
  slideVariable.src = imageArray[index];
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

setInterval(slide , interval)
slideVariable.addEventListener("load", setInterval);


// for (index = 0; i < dots.length; index++) {
//     dots[index].className = dots[index].className.
//                         replace(" active", "");
// }

// dots[slideIndex - 1].className += " active";


// slides[slideIndex - 1].style.display = "block";







// slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
  
//     // Change image every 4 seconds
//     setTimeout(showSlides, 4000); 