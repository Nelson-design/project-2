let i = 0;
const Images = [];
const time = 2000;

images[0] = 'image1.jpg';
images[1] = 'image2.jpg';
images[2] = 'image3.jpg';
images[3] = 'image4.jpg';
 
const images = 0;
function changeImg() {
  const images = document.getElementById("slides");

  for (i = 0; i < images.length; i++) {
    images[i]
  }

  setTimeout('changeImg()', time);
}

window.onload = changeImg;