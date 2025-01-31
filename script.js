//Button back to the top
let btnBackToTheTop = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    btnBackToTheTop.style.display = "block";
  } else {
    btnBackToTheTop.style.display = "none";
  }
}

btnBackToTheTop.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//DOM manipulation
let secondHeading = document.querySelector("h1");
secondHeading.style.color = "#F2955E"; 

//Button contact navigation
document.querySelectorAll(".btn-contact").forEach(button => {
  button.addEventListener("click", function() {
    window.location.href = "#contact";
  });
});