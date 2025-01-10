const blogModel =require("../models/blogModel");


const getAllBlogs =async (req, res) => {
    const blogs = await blogModel.find()
    res.send(blogs)
}

const deleteBlog = async (req, res) => {
    const id = req.params.id
    const deleted = await blogModel.findByIdAndDelete()
}


const uptadedBlog =  async (req, res) => {
    const newBlog = blogModel({ ...req.body });
    await newBlog.save();

}

const putBlog = 
     async (req, res) => {
        const id = req.params.id;
        const uptaded = await blogModel.findByIdAndUpdate(id, {
            ...req.body
        }, {
            new: true,
        });
    
    
        res.json(uptaded)
    }
    

    module.exports={
        getAllBlogs,
        deleteBlog,
        uptadedBlog,
        putBlog
    };