const db = require("../models");

const addTransaction = async (req, res) => {
  let { name } = req.body;

  const transaction = await db.Transaction.create({
    name: name,
  });

  res.json(transaction);
};

const getTransactions = async (req, res) => {
  const transactions = await db.Transaction.findAll({});

  res.json(transactions);
};

const TransactionDelete = async (req, res) => {
  const transaction = await db.Transaction.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.json(transaction);
};

const Transactionupdate = async (req, res) => {
  const transaction = await db.Transaction.update(
    {
      name: req.body.name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  res.json(transaction);
};

module.exports = {
  addTransaction,
  getTransactions,
  TransactionDelete,
  Transactionupdate,
};
