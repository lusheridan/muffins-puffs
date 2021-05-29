var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var paginas = document.getElementsByClassName("section-carrousel-pagina");
  var dots = document.getElementsByClassName("section-carrousel-dot");
  if (n > paginas.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = paginas.length}
  for (i = 0; i < paginas.length; i++) {
      paginas[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  paginas[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
