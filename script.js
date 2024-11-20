function showit(var1) {
  // Hide the one div that is shown
  document.getElementById("divvy1").style.display = "none"
  document.getElementById("divvy2").style.display = "none"
  document.getElementById("divvy3").style.display = "none"
  document.getElementById("divvy4").style.display = "none"
  document.getElementById("divvy5").style.display = "none"
  document.getElementById("divvy6").style.display = "none"
  // show the one div that you sent to the function
  document.getElementById(var1).style.display = "block"
}
let slideIndex = 0
showSlides()

function showSlides() {
  let i
  let slides = document.getElementsByClassName("mySlides")
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  slideIndex++
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex - 1].style.display = "block"
  setTimeout(showSlides, 5000) 
  }
