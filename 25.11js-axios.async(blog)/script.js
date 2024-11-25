import { BASE_URL } from "./constants.js";

const container = document.querySelector(".container");

function getData(endpoint) {
  axios(`${BASE_URL}/${endpoint}`)
    .then((data) => {
      drawTable(data.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
getData("blogs");

function drawTable(arr) {
  container.innerHTML = "";
  arr.forEach((data) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <h3>${data.title}</h3>
      <h4>${data.body}</h4>
      <p>${data.author}</p>
      <div class="allBtn">
        <button class="delete btn" data-id="${data.id}">Delete</button>
        <button class="edit btn">Edit</button>
      </div>
    `;
    container.appendChild(card);
  });
  attachDeleteEventListeners();
}
function attachDeleteEventListeners() {
  const deleteBtns = document.querySelectorAll(".delete");

  deleteBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
          const id = this.getAttribute("data-id");
          console.log("Deleting ID:", id);  
          deleting("blogs", id, this);
      });
  });
}

function deleting(endpoint, id, btn) {

  console.log(`Sending DELETE request to: ${BASE_URL}/${endpoint}/${id}`);
  
  axios.delete(`${BASE_URL}/${endpoint}/${id}`)
      .then((response) => {
          if (response.status === 200) {
              console.log(`Deleted blog with ID: ${id}`);
              btn.closest(".card").remove();  
          } else {
              console.log(`Failed to delete blog with ID: ${id}, Status: ${response.status}`);
          }
      })
      .catch((err) => {
          console.error("Error deleting the blog:", err);
      });
}


getData("blogs")

