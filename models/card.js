"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate(models) {
      Card.belongsTo(models.Account, {
        foreignKey: "AccountID",
        as: "Account",
      });

      Card.belongsTo(models.User, {
        foreignKey: "OwnerId",
        as: "User",
      });

      Card.hasMany(models.UserT, {
        foreignKey: "cardId",
        as: "UserTs",
      });
    }
  }
  Card.init(
    {
      AccountID: DataTypes.INTEGER,
      OwnerId: DataTypes.INTEGER,
      Password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Card",

      hooks: {
        beforeCreate(attributes, options) {
          attributes.Password = bcrypt.hashSync(attributes.Password, 10);
        },
      },
    }
  );
  return Card;
};
