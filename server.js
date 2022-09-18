//dependencies
const express = require("express")

//config
require("dotenv").config()
const PORT = process.env.PORT
const app = express()


//Routes
app.get("/", (req, res) =>{
    res.send("Welcome to an Awsome App about breads")
})

//Breads
const breadsController = require("./cotrollers/breads_controller")
app.use("/breads", breadsController)


//Listen 
app.listen(PORT, () => {
    console.log("listening on port", PORT)
})
console.log(PORT)
