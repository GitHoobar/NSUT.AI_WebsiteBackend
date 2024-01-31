require('dotenv').config()
const express= require("express")
const cors= require("cors")
const ConnectToMongoose = require("./db")
const app= express()
const port= process.env.PORT || 4000
app.use(express.json())
app.use(cors())

ConnectToMongoose()

app.use("/members",require("./routes/v1/member"))
app.use("/events",require("./routes/v1/event"))
app.use("/blogs",require("./routes/v1/blog"))
app.use("/projects",require("./routes/v1/project"))
app.use("/admin",require("./routes/v1/admin"))
app.listen(port, ()=>{
    console.log(`listening on ${port}`)
})