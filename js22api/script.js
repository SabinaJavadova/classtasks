import { BASE_URL } from "./constant.js";

function getAllData(endpoint) {
    fetch(`${BASE_URL}/${endpoint}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            drawTable(data)

        }).catch((err) => {
            console.log(err);

        })
}

getAllData("customers");

function getDataById(endpoint, id) {
     fetch(`${BASE_URL}/${endpoint}/${id}`)
        .then((respon) => {

            return respon.json()
        }).then((data) => {
             console.log(data);
             

        }).catch((err) => {
            console.log(err);

        })
}

// getDataById("customers", "BERGS")



const tBody = document.querySelector("tbody");


function drawTable(arr) {
    tBody.innerHTML=""
    arr.forEach((item) => {
        tBody.innerHTML +=`
       
        <tr>
                   
                    <td>${item.id}</td>
                    <td>${item.companyName}</td>
                    <td>${item.contactName}</td>
                    <td>${item.address?.phone}</td>
                    <td class="d-flex gap-2">
                <button class="delete btn btn-outline-danger" data-id=${item.id}>delete</button>
                <button class="edit btn btn-outline-success">edit</button>
                <a class="btn btn-outline-primary d-flex align-items-center" href="details.html?id=${item.id}">details</a>
            </td>
                  </tr>
                
        `
    });
}

drawTable(arr);

