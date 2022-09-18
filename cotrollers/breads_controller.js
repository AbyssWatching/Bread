const express = require("express")
const breads = express.Router()
const Breads = require("../models/bread.js")

//index
breads.get("/", (req, res) => {
    res.send(Breads)
})

//show
breads.get("/:arrayIndex", (req, res) =>{
    res.send(Breads[req.params.arrayIndex])
})

module.exports = breads