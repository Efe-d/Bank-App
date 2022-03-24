const db = require("../models");

const addUser = async (req, res) => {
  let { name, surname, age } = req.body;

  const user = await db.User.create({
    Name: name,
    Surname: surname,
    Age: age,
  });

  res.json(user);
};

//get all users
const getUsers = async (req, res) => {
  const users = await db.User.findAll({
    include: ["Account"],
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

  res.json(user);
};

module.exports = {
  addUser,
  getUsers,
  updateUser,
  deleteUser,
};
