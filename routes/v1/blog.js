const {Router} = require("express")
const{handleCreateBlog, handleDeleteBlog, handleGetBlogs,handleGetBlog,handleUpdateBlog}= require("../../controllers/blog")
const router = Router()


router.get("/all",handleGetBlogs)


router.get("/:id",handleGetBlog)

router.post("/create",handleCreateBlog)

router.delete("/:id",handleDeleteBlog)

router.patch("/:id",(req,res)=>{
    res.send("updated")
})

module.exports = router