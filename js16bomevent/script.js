const count1 = document.querySelector(".count1");
const start = document.querySelector(".start");
const count2 = document.querySelector(".count2");


let countIntervalId = null;

start.addEventListener("click", function () {
  
let count = +count1.value;
  
this.setAttribute("disabled",null)
  countIntervalId = setInterval(() => {
    count--;
    count2.textContent = count;
    if (count===0) {
        clearInterval(countIntervalId);
    }
  }, 100);
});