
const mongoose = require('mongoose');
const { Schema } = mongoose;
const blogSchema = new Schema({
    title: String,
    author: String,
});

const blogModel = mongoose.model("blog", blogSchema)
module.exports= blogModel;
