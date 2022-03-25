const express = require("express");
const cors = require("cors");

const userRouter = require("./routes/userRoute");
const accountRouter = require("./routes/accountRoute");
const cardRouter = require("./routes/cardRoute");
const transactionRouter = require("./routes/transactionRoute");
const USTRouter = require("./routes/userTransactionRoute");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/user", userRouter);

app.use("/api/account", accountRouter);

app.use("/api/card", cardRouter);

app.use("/api/transaction", transactionRouter);

app.use("/api/ust", USTRouter);

const port = process.env.PORT || 8081;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
