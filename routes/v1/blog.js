const {Router} = require("express")
const{handleCreateBlog, handleDeleteBlog, handleGetBlogs,handleGetBlog,handleUpdateBlog}= require("../../controllers/blog")
const getAdmin = require("../../middlewares/getAdmin")
const router = Router()


router.get("/all",handleGetBlogs)


router.get("/:id",handleGetBlog)

router.post("/create",getAdmin,handleCreateBlog)

router.delete("/:id",getAdmin,handleDeleteBlog)

router.patch("/:id",(req,res)=>{
    res.send("updated")
})

module.exports = router