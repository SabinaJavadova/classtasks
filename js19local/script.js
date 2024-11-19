const names = document.querySelector(".name");
const score = document.querySelector(".score");
const submit = document.querySelector(".submit");
const form = document.querySelector("form");
const avar = document.querySelector(".avarage");
const people = JSON.parse(localStorage.getItem("people")) || [];
let arr =[];
localStorage.getItem("people",JSON.stringify(arr));

function add() {
    const nameValue = names.value;
    const scoreValue = +score.value;
    let obj = {
    "id":Date.now(),
    "name":nameValue,
    "score":scoreValue
    }

arr.push(obj)

localStorage.setItem("people",JSON.stringify(arr));
names.value = "";
score.value = "";


}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    add();  
});
