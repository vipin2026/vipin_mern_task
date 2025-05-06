const express = require('express')
const app = express()
require('dotenv').config()
require('./config/connection')
const PORT = process.env.PORT
const bodyParser = require('body-parser')
const cors = require("cors")

const userRoute = require('./controller/routes')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use("/user/v1",userRoute)

app.listen(PORT , ()=>{
    console.log(`server is running on ${PORT}`)
})