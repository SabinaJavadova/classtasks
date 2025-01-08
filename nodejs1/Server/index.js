import express from 'express'
import { v4 as uuidv4 } from 'uuid';
import cors from "cors";
const app = express()
const port = 3000
app.use(express.json());
app.use(cors())

let data = [
  {
    id: 2,
    description: "Sweet and savory sauces relishes spreads and seasonings",
    name: "Condiments",
  },
  {
    id: 1,
    description: "Soft drinks coffees teas beers and ales",
    name: "Beverages",
  },
  {
    id: 3,
    description: "Desserts candies and sweet breads",
    name: "Confections",
  },
  {
    id: 4,
    description: "Cheeses",
    name: "Dairy Products",
  },
  {
    id: 5,
    description: "Breads crackers pasta and cereal",
    name: "Grains/Cereals",
  },
  {
    id: 6,
    description: "Prepared meats",
    name: "Meat/Poultry",
  },
  {
    id: 7,
    description: "Dried fruit and bean curd",
    name: "Produce",
  },
  {
    id: 8,
    description: "Seaweed and fish",
    name: "Seafood",
  },
];
let counter = 1000;

app.get('/data', (req, res) => {
  console.log(data);
  res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 

app.post("/api/data", (req, res) => {
  const { name, description } = req.body;

  const newData = {
    id: uuidv4(),
    name,
    description
  };

  data.push(newData);
  res.status(201).send({
    message: "successfully posted product!",
    newData,
  });
});



app.put('/api/data/:id', (req, res) => {
  const {id} = req.params;
  const {name, description} = req.body;
  const idx = data.findIndex((p)=> p.id=== +id)
  const updated = {
    id: +id,
    name,
    description
  };
  data[idx] = updated;
  res.status(200).send({
    updatedData: updated
  })
})

app.delete('/data/:id', (req, res) => {
  const {id} = req.params;
  const idx = data.findIndex((p)=> p.id === +id);

  const deleted = data.splice(idx, 1);
  res.status(200).send({
    deletedData: deleted,
    data: data,
    message: "succes"
  })
})