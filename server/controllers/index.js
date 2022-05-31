"use strict";

const { User } = require("../models");
const { signToken } = require("../helpers/jsonwebtoken");
const { Op } = require("sequelize")
const { hashCompare } = require("../helpers/bcrypts")

class Controller {
  static async register(req, res, next) {
    try {
      const { userName, email, password } = req.body;
      const registerUser = await User.create({
        userName,
        email,
        password,
      });
      res.status(201).json({
        message: "Success register account",
				registerUser
      });
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    try {
      const { userLogin, password } = req.body;
      const user = await User.findOne({
        where: {
          [Op.or]: [{ userName: userLogin }, { email: userLogin }],
        },
      });
      if (!user) {
        throw new Error("Invalid login, please check your input!");
      }

      const correctPassword = hashCompare(password, user.password);

      if (!correctPassword) {
        throw new Error("Invalid Password!");
      }

      const readPayLoad = {
        id: user.id,
        userName: user.userName,
        email: user.email,
      };
      const access_token = signToken(readPayLoad);

      res.status(200).json({
        message: "Login Success",
        access_token: access_token,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
