import { BASE_URL } from "./constants.js";

const tBody =document.querySelector("tbody");
const create =document.querySelector(".create");
const modal = document.querySelector(".modal")
const modalBox = document.querySelector(".modalBox")
const submit = document.querySelector(".submit")
const name = document.querySelector(".name")
const description = document.querySelector(".description")
const price = document.querySelector(".price")
const endpoints = {
  users:"users",
  products:"products",
  categories:"categories"
}
function drawTable(arr) {
  tBody.innerHTML="";
  arr.forEach((item) => {
    const tr = document.createElement("tr")
    tr.innerHTML+=`
     
        <tr>
                   
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.price}</td>
                    <td>${item.description}</td>
                    <td>${item.stock}</td>
                    <td class="action">
                <button class="delete" data-id=${item.id}>delete</button>
                <button class="edit" data-id = ${item.id}>edit</button>
            </td>
                  </tr>
    `
    tBody.appendChild(tr)
  });
}

function addProduct(endpoint) {
  axios.get(`${BASE_URL}/${endpoint}`)
  .then((product)=>{
    console.log(product);
    drawTable(product.data)
  }).catch((error)=>{
    console.log(error);
    
  })
}
addProduct("products")


create.addEventListener("click", function () {
  modal.style.display = "flex";
  modalBox.style.display = "flex";
});
modal.addEventListener("click", function () {
  modal.style.display = "none";
  modalBox.style.display = "none";
});


modalBox.addEventListener("click", function (e) {
  e.stopPropagation();
});

submit.addEventListener("click", function() {
  axios.post(`${BASE_URL}/${endpoints.products}`, {
    name: name.value.trim(),
    description: description.value.trim(),
    price: price.value.trim(),
   
  })
})