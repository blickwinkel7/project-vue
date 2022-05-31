"use strict"

const { payLoad } = require("../helpers/jsonwebtoken")
const { User } = require("../models")

const authentication = async (req, res, next ) => {
    try {
        const { access_token } = req.headers
        const readPayLoad = payLoad(access_token)

        const userLogin = await User.findByPk(+readPayLoad.id)
        if (!userLogin){
            throw new Error ("Not Found")
        }

        req.dataUser = {
            id:userLogin.id,
            userName:userLogin.id,
            email:userLogin.email
        }
        next()
    } catch (err) {
        let code = 500
        let msg = "Internal Server Error"

        if(err.name === "JsonWebTokenError" || err.message === "Not Found"){
            code = 401
            msg = "Invalid Token!"
        }

        res.status(code).json({
            message:msg
        })
    }
}

module.exports = authentication