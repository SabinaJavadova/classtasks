const express = require('express')
const mongoose = require('mongoose');
const axios = require('axios');
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
mongoose.connect('mongodb+srv://sabinacavadova005:sebine1510@cluster0.nr4wk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('Connected!')
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    });
    
    const { Schema } = mongoose;
    const blogSchema = new Schema({
        title: String,
        author: String,
      });


      const blogModel = mongoose.model("blog",blogSchema);


      app.get("/blog",async (req,res)=>{
        const blogs = await blogModel.find()
        res.send(blogs)
      })
      app.delete("/blog/:id",async (req,res)=>{
        const id = req.params.id
        const deleted = await blogModel.findByIdAndDelete()
      })



      
      