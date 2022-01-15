const express = require('express')
const bodyParser = require('body-parser')
const greetingsRoute = require ('./Routes/greetingsroute')
const magicRoute = require('./Routes/magicroute')
const tipsRoute = require('./Routes/tipsroute')

const app = express()
const port = 8888

app.use(bodyParser.json())

app.use('/greetings' , greetingsRoute)
app.use('/magic' , magicRoute)
app.use('/tips' ,tipsRoute )

app.get('/', (req, res)=>{
    res.status(200).json({message:"api up"})
})

app.listen(port, ()=>{
    console.log("online")
})