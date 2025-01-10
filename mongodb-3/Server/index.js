const express = require('express')
const mongoose = require('mongoose')
const router = require("../Server/routes/blogsRoutes")
const dotenv = require("dotenv")
const app = express()
const port = 3000
dotenv.config()

const DB_URL = process.env.DB_URL;
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use("/blog", router)



mongoose.connect(DB_URL)
    .then(() => {

        console.log('Connected!')
        app.listen(PORT, () => {
            console.log(`Example app listening on port ${port}`)
        })

    });