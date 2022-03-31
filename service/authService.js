const db = require("../models");
const bcyrpt = require("bcrypt");
const jwt = require("jsonwebtoken");

class authService {
  constructor() {
    this.secret = process.env.SECRET;
  }

  async register(info) {
    //check if customerid exist
    const user = await db.User.findOne({
      where: {
        CustomerId: info.Customerid,
      },
    });
    if (user) {
      info.Customerid = Math.floor(Math.random() * 100000);
    }
    const newUser = await db.User.create(info);
    return newUser;
  }

  async login(info) {
    if (user) {
      const match = await bcyrpt.compare(info.Password, user.Password);
      if (match) {
        const token = jwt.sign(
          {
            id: user.id,
            CustomerId: user.CustomerId,
          },
          this.secret,
          { expiresIn: "1h" }
        );
        res.status(200).json({
          message: "Login successful",
          token: token,
        });
      } else {
        res.status(401).json({
          message: "Invalid credentials",
        });
      }
    } else {
      res.status(401).json({
        message: "Invalid credentials",
      });
    }
  }
}

module.exports = authService;
