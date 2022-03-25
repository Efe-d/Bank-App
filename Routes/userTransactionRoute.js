const USTRoute = require("../controllers/userTransactionController");

const route = require("express").Router();

route.post("/add", USTRoute.addUTS);
route.get("/getAll", USTRoute.getUTS);
//List Type
route.get("/getByType/:id", USTRoute.getUTSByTransactionId);
//List User
route.get("/getByUser/:id", USTRoute.getUTSByAccountId);

route.delete("/delete/:id", USTRoute.UTSDelete);

route.put("/update/:id", USTRoute.UTSupdate);

module.exports = route;
