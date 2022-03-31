const express = require("express");
const cors = require("cors");

const authRouter = require("./routes/authRouter");
const tokenCheck = require("./middleware/tokenCheck.middleware");

const userRouter = require("./routes/userRoute");
const accountRouter = require("./routes/accountRoute");
const cardRouter = require("./routes/cardRoute");
const transactionRouter = require("./routes/transactionRoute");
const USTRouter = require("./routes/userTransactionRoute");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/user", userRouter);

app.use("/api/account", tokenCheck, accountRouter);

app.use("/api/card", tokenCheck, cardRouter);

app.use("/api/transaction", tokenCheck, transactionRouter);

app.use("/api/ust", tokenCheck, USTRouter);

app.use("/api/auth", authRouter);

const port = process.env.PORT || 8081;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
