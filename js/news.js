var modal = document.getElementById("myModal");
const modalContent = document.querySelector(".modal__content")
var btn = document.querySelectorAll(".myBtn");

var closeBtn = document.querySelector(".close")

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.forEach(button => {
    button.onclick = function () {
        modal.style.display = "flex";
    }
})

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
closeBtn.onclick = function (event) {
    if (event.target != modalContent) {
        modal.style.display = "none";
    }
}


// hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
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