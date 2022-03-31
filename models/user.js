"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");

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
      CustomerId: DataTypes.INTEGER,
      Password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",

      hooks: {
        beforeCreate(attributes, options) {
          attributes.Password = bcrypt.hashSync(attributes.Password, 10);
        },
      },
    }
  );
  return User;
};
