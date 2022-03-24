const db = require("../models");

const addAccount = async (req, res) => {
  let { userId, password, money } = req.body;

  const account = await db.Account.create({
    UserID: userId,
    Password:password,
    Money: money,
  });

  res.json(account);
};

const getAccounts = async (req, res) => {
  const accounts = await db.Account.findAll({
    include: [
      {
        model: db.User,
        as: "User",
      },
    ],
  });

  res.json(accounts);
};

const getAccountById = async (req, res) => {
  const account = await db.Account.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: db.User,
        as: "User",
      },
    ],
  });

  res.json(account);
};

const updateAccount = async (req, res) => {
  const account = await db.Account.update(
    {
      UserId: req.body.userId,
      Password: req.body.password,
      Money: req.body.money,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  res.json(account);
};

const deleteAccount = async (req, res) => {
  const account = await db.Account.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.json(account);
};

module.exports = {
  addAccount,
  getAccounts,
  getAccountById,
  updateAccount,
  deleteAccount,
};
