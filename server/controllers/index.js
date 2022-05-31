"use strict"

const { User } = require("../models")
const { signToken } = require("../helpers/jsonwebtoken")

class Controller {
    static async register (req, res, next ){
        try {
            const { userName, email, password } = req.body
            const registerUser = await User.create({
                userName,
                email,
                password
            })
         res.status(201).json({
             message:"Success register account"
         })
        } catch (err) {
            res.status(500).json({
                error:{
                    message:"Internal Server Error"
                }
            })
        }
    }
}

module.exports = Controller