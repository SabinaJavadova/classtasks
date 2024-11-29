import { BASE_URL } from "./constants.js";

const cards = document.querySelector(".cards");
 const search =document.querySelector(".search")
let arr =[];
function getData(endpoint) {
  axios.get(`${BASE_URL}/${endpoint}`)
  .then((data)=>{
    arr=data.data;
    drawTable(data.data)
  }).catch((err)=>{
    console.log(err);
    
  })
}
getData("products")

function drawTable(arr) {
  cards.innerHTML=""
  arr.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("card")
    card.innerHTML=`
    <img src="${product.image}">
    <h2>${product.name}</h2>
    <p>${product.description}</p>
    <p class="price">Price: ${product.price}</p>
    `
    cards.appendChild(card)
  });
  
}

search.addEventListener("keyup",()=> {
  console.log(arr);
  console.log(search);
  
  
  const filtered = arr.filter((item)=>
  item.name.toLowerCase().includes(search.value.toLowerCase())||
  item.description.toLowerCase().includes(search.value.toLowerCase())
);
drawTable(filtered)
})