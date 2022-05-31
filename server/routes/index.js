"use strict"

const express = require("express")
const router = express.Router()
const Controller = require("../controllers")
const ControllerCoin = require("../controllers/controllerCoin")
const authentication = require("../middlewares/authentication")


router.get("/", (req, res) => {
    res.send("server")
})
router.post("/register", Controller.register)
router.post("/login", Controller.login)
router.get("/coins", ControllerCoin.getCoints )

module.exports = router