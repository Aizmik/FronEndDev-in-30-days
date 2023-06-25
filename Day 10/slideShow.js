let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slider-img");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;

  slides[slideIndex-1].style.display = "block";  

  if(slideIndex > 1){
    slideIndex = 0;
  }

  setTimeout(showSlides, 5000); // Change image every 2 seconds
}