const db = require("../models");

const addUser = async (req, res) => {
  let { name, surname, age, password } = req.body;

  const user = await db.User.create({
    Name: name,
    Surname: surname,
    Age: age,
    CustomerId: Math.floor(Math.random() * 100000),
    Password:password
  });

  //if customerid exist in db generate new customerid
  if (user.CustomerId) {
    user.CustomerId = Math.floor(Math.random() * 100000);
    user.save();
  }

  res.json(user);
};
//get all users
const getUsers = async (req, res) => {
  const users = await db.User.findAll({
    include: [
      {
        model: db.Account,
        as: "Account",
      },
      "Card",
    ],
  });

  res.json(users);
};

const updateUser = async (req, res) => {
  const user = await db.User.update(
    {
      Name: req.body.name,
      Surname: req.body.surname,
      Age: req.body.age,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  res.json(user);
};

const deleteUser = async (req, res) => {
  const user = await db.User.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.json("User Deleted " + user);
};

const deleteAllUsers = async (req, res) => {
  const user = await db.User.destroy({
    where: {},
    truncate: true,
  });

  res.json("All Users Deleted " + user);
};

module.exports = {
  addUser,
  getUsers,
  deleteAllUsers,
  updateUser,
  deleteUser,
};
