"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Account, {
        as: "Account",
      });

      User.hasMany(models.Card, {
        as: "Card",
      });
    }
  }
  User.init(
    {
      Name: DataTypes.STRING,
      Surname: DataTypes.STRING,
      Age: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
