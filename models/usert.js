"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserT extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserT.belongsTo(models.Card, {
        foreignKey: "cardId",
        as: "Card",
      });

      UserT.belongsTo(models.Transaction, {
        foreignKey: "typeId",
        as: "Transaction",
      });
    }
  }
  UserT.init(
    {
      typeId: DataTypes.INTEGER,
      amount: DataTypes.INTEGER,
      cardId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "UserT",
    }
  );
  return UserT;
};
