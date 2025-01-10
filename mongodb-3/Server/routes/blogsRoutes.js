const express = require("express")

const {
    getAllBlogs,
    deleteBlog,
    putBlog,
    uptadedBlog 
} = require("../controllers/blogControllers")

const router = express.Router();


router.get("/",getAllBlogs)
router.delete("/:id",deleteBlog)
router.put("/:id",putBlog)
router.post ("/:id", uptadedBlog )

module.exports =router;