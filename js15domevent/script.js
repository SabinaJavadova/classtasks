import { products } from "./data.js";
console.log(products);


const tBody= document.querySelector("tbody");
const searching = document.querySelector(".search");
const sorted = document.querySelector(".sort");


function drawTable(array) {
    tBody.innerHTML = "";
    array.forEach((product) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
              <td><img src="${product.image}" width="100"/></td>
              <td>${product.id}</td>
              <td>${product.title}</td>
              <td>${product.price}</td>
              <td>${product.category}</td>
              <td>${product.rating.rate}</td>
            <td><i class="fa-solid fa-trash-can text-danger delete-btn" data-id=${product.id}></i></td>
          `;
  
      tBody.appendChild(tr);
    })};

    drawTable(products)


    searching.addEventListener("input",function(event) {
        const filtered = products.filter((product)=>
        product.title.toLowerCase().includes(event.target.value.trim())
        );

        drawTable(filtered);
    });

   
    if (this.textContent === "ASC by Price") {
      this.textContent = "DESC by Price";
      sorted = products.toSorted((a, b) => a.price - b.price);
    } else if (this.textContent === "DESC by Price") {
      this.textContent = "Default";
      sorted = products.toSorted((a, b) => b.price - a.price);
    } else {
      this.textContent = "ASC by Price";
      sorted = structuredClone(products);
    }
    drawTable(sorted);
