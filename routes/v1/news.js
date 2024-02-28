const {Router} = require("express")
const{handleCreateNews, handleDeleteNews, handleGetNewss,handleGetNews,handleUpdateNews}= require("../../controllers/news")
const getAdmin = require("../../middlewares/getAdmin")
const router = Router()


router.get("/all", handleGetNewss)


router.get("/:id",getAdmin, handleGetNews)

router.post("/create",getAdmin,handleCreateNews)

router.delete("/:id",getAdmin,handleDeleteNews)

router.patch("/:id",getAdmin, handleUpdateNews)

module.exports = router