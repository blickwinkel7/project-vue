"use strict"

const express = require("express")
const router = express.Router()
const Controller = require("../controllers")
const authentication = require("../middlewares/authentication")


router.get("/", (req, res) => {
    res.send("server")
})
router.post("/register", Controller.register)
router.post("/login", (req, res) => {
    res.send("login page")
})

module.exports = router