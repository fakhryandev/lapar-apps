import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/responsive.css";
import Data from "../DATA.json";

const hamburgerButtonElement = document.querySelector("#hamburgerButton");
const drawerElement = document.querySelector(".app-bar .app-bar__navigation");
const mainElement = document.querySelector("#mainContent");
const data = Data.restaurants;

hamburgerButtonElement.addEventListener("click", (event) => {
  drawerElement.classList.toggle("open");
  event.stopPropagation();
});

mainElement.addEventListener("click", (event) => {
  drawerElement.classList.remove("open");
  event.stopPropagation();
});

data.forEach((item, index) => {
  document.querySelector(".restaurants").innerHTML += `
    <div class="restaurant-item">
        <div class="restaurant-item__header">
            <img src="${item.pictureId}"
                alt="Test"
                class="restaurant-item__header__poster"/>
        </div>
        <div class="restaurant-item__content">
            <h3>${item.city}</h3>
            <p>
                ${item.description}
            </p>
          </div>
    <div>`;
});
