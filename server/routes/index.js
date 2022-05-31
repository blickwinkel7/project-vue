"use strict"

const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("server")
})
router.post("/register", (req, res) => {
    res.send("register page")
})

router.post("/login", (req, res) => {
    res.send("login page")
})

module.exports = router