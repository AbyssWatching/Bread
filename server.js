//dependencies
const express = require("express")
const react = require("react")

//config
require("dotenv").config()
const PORT = process.env.PORT
const app = express()

//middleware
app.set("views", __dirname + "/views")
app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine())

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
