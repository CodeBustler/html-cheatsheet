function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

function scrollToTop() {
  let elem = document.getElementById("top");
  elem.addEventListener("click", () => scrollTo(0, 0));
}
