const products = [
    {
      id: 1,
      firstName: "Emily",
      lastName: "Johnson",
      username: "emilys",
      password: "emilyspass",
      image: "https://dummyjson.com/icon/emilys/128&quot",
    },
    {
      id: 2,
      firstName: "Michael",
      lastName: "Williams",
      username: "michaelw",
      password: "michaelspass",
      image: "https://dummyjson.com/icon/michaelw/128&quot",
    },
    {
      id: 3,
      firstName: "Sophia",
      lastName: "Brown",
      username: "sophiab",
      password: "sophiabpass",
      image: "https://dummyjson.com/icon/sophiab/128&quot",
    },
    {
      id: 4,
      firstName: "James",
      lastName: "Davis",
      username: "jamesd",
      password: "jamesdpass",
      image: "https://dummyjson.com/icon/jamesd/128&quot",
    },
  ];

  const container = document.querySelector(".container");
 const detail = document.querySelector(".detail");
 const detailArea =document.querySelector( ".detailArea")
  function drawPoint(products) {
    container.innerHTML="";
    products.forEach(product => {
      const card = document.createElement("div");
      card.classList.add("card")
      card.innerHTML=`
       <img src="${product.image}"/>
         <h3>${product.firstName} ${product.lastName}</h3>
          <p>Username: ${product.username}</p>
          <button class="detail">Detail</button>
          <div class="detailArea"> </div>
      `

      container.appendChild(card);
    });
  }

  drawPoint(products);