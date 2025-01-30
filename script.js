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
secondHeading.style.color = "red"; 

//Event listener
//H3's color changes to red when mouse hovers over it
const showDishes = document.querySelectorAll("h3");

showDishes.forEach(function (dish){
  dish.onmouseenter = function () {
    dish.style.color = "red";
  }
  dish.onmouseleave = function () {
    dish.style.color = " #f8f2ed";
  }
})

//Event listener
//If field message is empty
//And username is in local storage
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  const fieldMessage = document.querySelector("#subject");
  const username = document.getElementById("username").value;
  console.log(username);

  if(fieldMessage.value === "") {
    alert("Veuillez écrire votre message");
    event.preventDefault();
  } else {
    localStorage.setItem("username", username);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const username = localStorage.getItem("username");

  document.getElementById("username").value = username;
  
});

//Fetch API
async function getDishes() {
  try {
    const response = await fetch("https://foodish-api.com/api/");
    
    if(!response.ok){
      throw new Error(response.status);
    } 
    
    const data = await response.json();

    const dishesContainer = document.getElementById("others-dishes-container");
    if(data.image){
      let dishTitle = document.createElement("h3");
      dishTitle.textContent = "Un autre plat à l'essai";

      let othersDishes = document.createElement("div");
      othersDishes.style.display = "flex";
      othersDishes.style.justifyContent = "center";
      othersDishes.classList.add("others-dishes");

      let otherDish = document.createElement("img");
      otherDish.classList.add("other-dish");
      otherDish.src = data.image;
      otherDish.alt = "un autre plat à l'essai";
      otherDish.style.width = "300px";  
      otherDish.style.height = "300px"; 

      othersDishes.appendChild(otherDish);
      dishesContainer.appendChild(dishTitle);
      dishesContainer.appendChild(othersDishes);
    } else {
      console.error("Pas de photo disponible");
    }
  } catch (error) {
    console.error(error);
  } 
}

getDishes();
