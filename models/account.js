"use strict";
const { Model } = require("sequelize");

const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    static associate(models) {
      Account.belongsTo(models.User, {
        foreignKey: "UserID",
        as: "User",
      });

      Account.hasMany(models.Card, {
        foreignKey: "AccountID",
        as: "Card",
      });
    }
  }
  Account.init(
    {
      UserID: DataTypes.INTEGER,
      Password: DataTypes.STRING,
      Money: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Account",

      hooks: {
        beforeCreate(attributes, options) {
          attributes.Password = bcrypt.hashSync(attributes.Password, 10);
          console.log(attributes.Password);
        },
      },
    }
  );
  return Account;
};
