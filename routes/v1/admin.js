const mongoose = require("mongoose")
const express = require("express")
const Admin = require("../../models/admin")
const router = express()
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const checkAdmin= require("../../middlewares/checkAdmin");
const secret = "KHUSHAL"
router.post("/create", async (req, res) => {
    try {
        //token -> req -> verify -> acess/access

        let { email, password } = req.body

        //generate salt 
        const salt = await bcrypt.genSaltSync(10);
        //generate encrypted password

        const hashedPassword = await bcrypt.hashSync(password, salt);
        //create the account with encrypted password
        let admin = await Admin.create({
            email: email,
            password: hashedPassword,
        })
        res.json(admin)
    }
    catch (err) {
        res.status(400).json({ error: err })
        console.log(err)
    }
})

router.post("/login",checkAdmin, async (req, res) => {
    try {
        if(res.admin){
            console.log(res.admin)
            res.status(200).json({token:req.header("token"),admin:{id:res.admin._id,username:res.admin.username, email:res.admin.email}})
            return ;
        }
        // get credentials from user
        let { email, password } = req.body

        if (!email || !password) {
            res.status(400).json({ error: "Credentails not recieved", success: false })
        }
        //find the account in mongo db
        let admin = await Admin.findOne({ email: email })

        if (!admin) {
            
            res.status(400).json({ error: "Invalid Credentails", success: false })
            return;

        }
        


        //check if the account's password matches with the user password
        let isPasswordCorrect = await bcrypt.compare(password, admin.password)

        //make token
        var token = jwt.sign({ admin: { id: admin._id } }, secret);

        // if matches
        if (!isPasswordCorrect) {

            res.status(400).json({ error: "Invalid Credentials", success:false })
            return;
        }
        else {
            res.send({ token: token, admin: { _id: admin._id, username: admin.username, email: admin.email } })
        }
    }
    catch (err) {
        console.log(err)

        res.status(400).json({ error: "Internal Server Error" })
    }
})



module.exports = router
