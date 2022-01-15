const express = require('express')
const magicRoute = express.Router()
const data = require("../data/magicballdata")

magicRoute.get('/' , (req, res)=>{
    res.status(200).json({message: " Magic Connected"})
})

magicRoute.get('/:idx' , (req , res)=>{
    let idx = Number(req.params.idx)
    res.status(200).json({message: data[idx]})
} )



module.exports = magicRoute