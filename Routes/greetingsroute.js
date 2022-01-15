const express = require('express')
const greetingsRoute = express.Router()

greetingsRoute.get('/', (req, res)=>{
    res.status(200).json({message: " Greetings Connected!"})
})

greetingsRoute.get('/:name', (req ,res)=>{
    let name =req.params.name
    res.status(200).json({greeting: `Good morning ${name}`})
})

module.exports = greetingsRoute