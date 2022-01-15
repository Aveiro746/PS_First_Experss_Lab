const express = require('express')
const tipsRoute = express.Router()

tipsRoute.get('/' , (req, res)=>{
    res.status(200).json({message: " Tips Connected"})
})

tipsRoute.get('/:total/:tipPercentage' , (req , res)=>{// Getting NaN
    let total = Number(req.params.total)
    let tipPercentage = Number(req.params.tipPercentage)
    let tip = (total *= tipPercentage)/100
    res.status(200).json({message : `The tip is ${tip}`})
})

module.exports = tipsRoute