const div = document.createElement("div");
div.classList.add("card")
const h3 = document.createElement("h3");
h3.classList.add("name");
h3.textContent = "Azmp202";

document.body.appendChild(div);
div.appendChild(h3);

div.style.backgroundColor="green";
div.style.width="200px"
div.style.height="200px"
div.style.borderRadius="20px";
div.style.border="1px solid red";

h3.style.color="white";
h3.style.textAlign="center"
h3.style.paddingTop="15px"
