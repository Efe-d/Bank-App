const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    return res.status(401).json({
      message: "No token provided",
    });
  }
  try {
    const decoded = jwt.verify(token, "secret", {
      algorithms: ["HS256"],
    });
    req.user = decoded;
  } catch (err) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
  return next();
};

module.exports = verifyToken;
