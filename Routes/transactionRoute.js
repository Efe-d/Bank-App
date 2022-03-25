const transactionRouter = require(`../controllers/transactionController`);

const route = require("express").Router();

route.post("/add", transactionRouter.addTransaction);
route.get("/getAll", transactionRouter.getTransactions);
route.delete("/delete/:id", transactionRouter.TransactionDelete);
route.put("/update/:id", transactionRouter.Transactionupdate);

module.exports = route;
