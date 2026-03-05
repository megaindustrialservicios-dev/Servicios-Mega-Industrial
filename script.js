/* PORTFOLIO CAROUSEL */

const track = document.querySelector(".carousel-track");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const images = document.querySelectorAll(".carousel-track img");
const carousel = document.querySelector(".carousel");

let carouselIndex = 0;

function getImageWidth(){
return images[0].offsetWidth + 20;
}

function getVisibleImages(){
return Math.floor(carousel.offsetWidth / getImageWidth());
}

function updateCarousel(){

const imageWidth = getImageWidth();
track.style.transform = `translateX(-${carouselIndex * imageWidth}px)`;

}

nextBtn.addEventListener("click", () => {

carouselIndex++;

const maxIndex = images.length - getVisibleImages();

if(carouselIndex > maxIndex){
carouselIndex = 0;
}

updateCarousel();

});

prevBtn.addEventListener("click", () => {

carouselIndex--;

const maxIndex = images.length - getVisibleImages();

if(carouselIndex < 0){
carouselIndex = maxIndex;
}

updateCarousel();

});

/* autoplay */

setInterval(() => {

carouselIndex++;

const maxIndex = images.length - getVisibleImages();

if(carouselIndex > maxIndex){
carouselIndex = 0;
}

updateCarousel();

}, 4000);