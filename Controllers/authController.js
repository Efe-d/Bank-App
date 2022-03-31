const db = require("../models");
const bcyrpt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authService = require("../service/authService");
const AuthService = new authService();

const Register = async (req, res) => {
  const info = {
    Name: req.body.name,
    Surname: req.body.surname,
    Age: req.body.age,
    Password: req.body.password,
    CustomerId: Math.floor(Math.random() * 100000),
  };
  //chech if customerid exist in db generate new customerid
  const user = await db.User.findOne({
    where: {
      CustomerId: info.CustomerId,
    },
  });
  if (user) {
    info.CustomerId = Math.floor(Math.random() * 100000);
  }
  const newUser = await db.User.create(info);
  res.json(newUser);
};

const Login = async (req, res) => {
  const info = {
    CustomerId: req.body.customerid,
    Password: req.body.password,
  };
  const user = await db.User.findOne({
    where: {
      CustomerId: info.CustomerId,
    },
  });
  if (!user) {
    return res.status(401).json({
      message: "Invalid CustomerId",
    });
  }
  const isPasswordValid = await bcyrpt.compare(info.Password, user.Password);
  if (!isPasswordValid) {
    return res.status(401).json({
      message: "Invalid Password",
    });
  }
  const token = jwt.sign({ id: user.id }, "secret", {
    expiresIn: "1h",
  });
  res.json({
    token,
  });
};

module.exports = {
  Register,
  Login,
};
