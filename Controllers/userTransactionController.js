const db = require("../models");

const addUTS = async (req, res) => {
  let { cardId, typeId, amount } = req.body;

  const uts = await db.UserT.create({
    cardId: cardId,
    typeId: typeId,
    amount: amount,
  });

  res.json(uts);
};

const getUTS = async (req, res) => {
  const uts = await db.UserT.findAll({
    include: [
      {
        model: db.Card,
        as: "Card",
      },
      "Transaction",
    ],
  });

  res.json(uts);
};

//List User
const getUTSByAccountId = async (req, res) => {
  const uts = await db.UserT.findAll({
    where: {
      cardId: req.params.id,
    },
    include: [
      {
        model: db.Card,
        as: "Card",
      },
      "Transaction",
    ],
  });

  res.json(uts);
};

//List Type
const getUTSByTransactionId = async (req, res) => {
  const uts = await db.UserT.findAll({
    where: {
      typeId: req.params.id,
    },
    include: [
      {
        model: db.Card,
        as: "Card",
      },
      "Transaction",
    ],
  });

  res.json(uts);
};

const UTSDelete = async (req, res) => {
  const uts = await db.UserT.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.json(uts);
};

const UTSupdate = async (req, res) => {
  const uts = await db.UserT.update(
    {
      cardId: req.body.cardId,
      typeId: req.body.typeId,
      amount: req.body.amount,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  res.json(uts);
};

module.exports = {
  addUTS,
  getUTS,
  getUTSByAccountId,
  getUTSByTransactionId,
  UTSDelete,
  UTSupdate,
};
