"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate(models) {
      Card.hasOne(models.Account, {
        as: "Account",
        foreignKey: "AccountID",
      });

      Card.belongsTo(models.User, {
        as: "User",
        foreignKey: "UserID",
      });
    }
  }
  Card.init(
    {
      AccountId: DataTypes.INTEGER,
      OwnerId: DataTypes.INTEGER,
      Password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Card",
    }
  );
  return Card;
};
