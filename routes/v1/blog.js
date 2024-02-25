const {Router} = require("express")
const{handleCreateBlog, handleDeleteBlog, handleGetBlogs,handleGetBlog,handleUpdateBlog}= require("../../controllers/blog")
const getAdmin = require("../../middlewares/getAdmin")
const router = Router()


router.get("/all", handleGetBlogs)


router.get("/:id",getAdmin, handleGetBlog)

router.post("/create",getAdmin,handleCreateBlog)

router.delete("/:id",getAdmin,handleDeleteBlog)

router.patch("/:id",getAdmin, handleUpdateBlog)

module.exports = router