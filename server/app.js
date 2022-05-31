"use strict"

const express = require("express")
const app = express()
const port = 3000
const cors = require("cors")
const routes = require("./routes")
const errorHandlres = require("./middlewares/errorHandlers")

app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(routes)
app.use(errorHandlres)

app.listen(port, () => {
    console.log(`Listening to port: ${port}`)
})