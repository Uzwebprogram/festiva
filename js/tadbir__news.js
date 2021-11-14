var modal = document.getElementById("myModal");
const modalContent = document.querySelector(".modal__content")
var btn = document.querySelectorAll(".myBtn");
var closeBtn = document.querySelector(".close")
var span = document.getElementsByClassName("close")[0];
btn.forEach(button => {
    button.onclick = function () {
        modal.style.display = "flex";
    }
})
span.onclick = function () {
    modal.style.display = "none";
}
closeBtn.onclick = function (event) {
    if (event.target != modalContent) {
        modal.style.display = "none";
    }
}
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
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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
