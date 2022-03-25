const db = require("../models");

const addCard = async (req, res) => {
  let { accountId, password, OwnerId } = req.body;

  const card = await db.Card.create({
    AccountId: accountId,
    OwnerId: OwnerId,
    Password: password,
  });

  res.json(card);
};

const getCards = async (req, res) => {
  const cards = await db.Card.findAll({
    include: [
      {
        model: db.Account,
        as: "Account",
      },
      "User",
    ],
  });

  res.json(cards);
};

const getCardByOwnerId = async (req, res) => {
  const card = await db.Card.findOne({
    where: {
      OwnerId: req.params.id,
    },
    include: [
      {
        model: db.Account,
        as: "Account",
      },
    ],
  });

  res.json(card);
};

const CardDelete = async (req, res) => {
  const card = await db.Card.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.json(card);
};

const Cardupdate = async (req, res) => {
  const card = await db.Card.update(
    {
      AccountId: req.body.accountId,
      Password: req.body.password,
      Money: req.body.money,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  res.json(card);
};

module.exports = {
  addCard,
  getCards,
  getCardByOwnerId,
  CardDelete,
  Cardupdate,
};
