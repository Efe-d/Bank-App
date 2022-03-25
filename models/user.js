"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Account, {
        foreignKey: "UserID",
        as: "Account",
      });

      User.hasMany(models.Card, {
        foreignKey: "OwnerId",
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
