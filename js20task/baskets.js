import { carsData } from "./data.js";

import {
  getFromLocalstore,
  setToLocalstorage,
} from "./allFunc.js";

const tBody = document.querySelector("tbody");
const clearBtn = document.querySelector("clear-all");
const totalPrice = document.querySelector("total-price");
const users = JSON.parse(localStorage.getItem('users')) || [];  // Initialize `users` from localStorage

const loggedInUser = users.find((us) => us.isLogged);

// console.log(loggedInUser);


function drawTable(basketArr, carsDataArr) {
  tBody.innerHTML = "";
  basketArr.forEach((item) => {
    console.log(item);
    const carsData = carsDataArr.find((p) => p.id == item.carsDataId);

    const trElem = document.createElement("tr");
    trElem.innerHTML = `
        <td><img src="${carsData.Image}" width="100"/></td>
                      <td>${carsData.type}</td>
                      <td>$ ${carsData.price}</td>
                      
    `;
    tBody.append(trElem);
  });
}
