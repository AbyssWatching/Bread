const express = require("express")
const bread = require("../models/bread.js")
const breads = express.Router()
const Bread = require("../models/bread.js")

//index
breads.get("/", (req, res) => {
    res.render("Index",
    {
        breads: Bread
        //title: "Index Page"
        //res.send(Bread)
    })
})

//new
breads.get("/new", (req, res) => {
    res.render("new")
})


//show
breads.get("/:arrayIndex", (req, res) =>{

    if(Bread[req.params.arrayIndex]){
    
    res.render("Show", {
        bread: Bread[req.params.arrayIndex]
    })
    }

    else{
        res.send("404")
    }

   // res.send(Breads[req.params.arrayIndex])
})

//create
breads.post("/", (req,res) => {

    if(!req.body.image){
        req.body.image = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    }
    if(req.body.hasGluten ==="on"){
        req.body.hasGluten = "true"
    } else{
        req.body.hasGluten = "false"
    }
    Bread.push(req.body)
    res.redirect("/breads")
})




module.exports = breads