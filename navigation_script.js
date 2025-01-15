const button = document.getElementById('scrollButton');
const targetSection = document.getElementById('div3');
button.addEventListener('click', () => {
  targetSection.scrollIntoView({
  behavior: 'smooth', 
});
});
document.querySelectorAll('.nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
  e.preventDefault(); 
  const targetId = this.getAttribute('href'); 
  const targetElement = document.querySelector(targetId); 

targetElement.scrollIntoView({
  behavior: 'smooth',
});
});
});
document.querySelectorAll('nav_pc a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
  e.preventDefault(); 
  const targetId = this.getAttribute('href'); 
  const targetElement = document.querySelector(targetId); 

targetElement.scrollIntoView({
  behavior: 'smooth', // Enable smooth scrolling
});
});
});
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";  
}
  for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
}
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}