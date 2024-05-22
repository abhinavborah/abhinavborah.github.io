// toggles the header based on scrollY position

var prevscrollpos = window.scrollY;
const header = document.querySelector("header");
window.addEventListener('scroll', function() {
  var currentscrollpos = window.scrollY;
  if (prevscrollpos > currentscrollpos) {
    header.style.top = "0";
  } else {
    header.style.top = "-5rem";

  }
  prevscrollpos = currentscrollpos;
});
