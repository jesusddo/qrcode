
const express = require('express')
const routes=require('./src/routes')
//const cors=require('cors')
const app=express()

app.use(express.static(__dirname+'/src/build/'))
//app.use(cors())
app.use(express.json())
app.use(routes)

const PORT=3000
app.listen(PORT,()=>{
    console.log(`Webserver is running on port ${PORT}`)
})