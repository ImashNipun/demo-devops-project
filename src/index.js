const express = require("express")
const config = require('./config/index')

const app = express()

const PORT = 8000

app.get('/',(req,res)=>{
    res.status(200).json("Hello world-I am testing the piplines")
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})