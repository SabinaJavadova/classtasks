import { carsData } from "./data.js";
import { getFromLocalstore, setToLocalstorage } from "./allFunc.js";

const userName = document.querySelector(".user-name");

const users = getFromLocalstore("users") || [];

function drawCards(arr) {
  const productsWrapper = document.querySelector(".products");

  arr.forEach((car) => {
    productsWrapper.innerHTML += `
            <div class="col-4">
                <div class="card">
                <div class="card-body">
                <h3 class="cardName">${car.name}</h3>
                <p class="cardType">${car.type}</p>
                   <div class="image">

                   <img src="${car.Image}" class="carImg" alt="${car.name}" width= "100%">
                                    
                                </div>
                                <div class="divs">
                                <div class="ikons">
  
                                <p class="fuel"><i class="fa-solid fa-gas-pump"></i> ${car.fuel}</p>
                                <p class="transmission"><i class="fa-solid fa-circle-notch"></i> ${car.transmission}</p>
                                <p class="passengers"><i class="fa-solid fa-users-line"></i> ${car.passengers}</p>
       </div>
                        <span class="car-price">Price: $${car.price}</span>
                        <button class="addToBasket">Add to Basket</button>
                    </div>
                                </div>
                </div>
            </div>
        `;
  }); document.querySelectorAll(".addToBasket").forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const id = event.target.getAttribute("data-id");
      addToBasket(id);
    });
  });
}


drawCards(carsData);



