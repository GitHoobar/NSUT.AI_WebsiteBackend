const {Router} = require("express")
const{handleCreateBlog, handleDeleteBlog, handleGetBlogs,handleGetBlog}= require("../../controllers/blog")
const router = Router()


router.get("/",handleGetBlogs)


router.get("/:id",handleGetBlog)

router.post("/create",handleCreateBlog)

router.delete("/:id",handleDeleteBlog)



module.exports = router