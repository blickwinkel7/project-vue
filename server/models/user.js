"use strict";
const { Model } = require("sequelize");
const { hashPassword } = require("../helpers/bcrypts");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: "this user name has already use!",
        },
        validate: {
          notEmpty: {
            msg: "please input your user name!",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: "Opps.. looks like you have an account please login first",
        },
        validate: {
          isEmail: {
            msg: "it's not email format!",
          },
          notEmpty: {
            msg: "email is required!",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          notEmpty:{
            msg:"please input your password!"
          }
        }
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  User.beforeCreate((instance, option) => {
    instance.password = hashPassword(instance.password)
  })
  return User;
};
