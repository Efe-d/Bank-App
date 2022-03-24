const express = require("express");
const cors = require("cors");

const userRouter = require("./routes/userRoute");
const accountRouter = require("./routes/accountRoute");
const cardRouter = require("./routes/cardRoute");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/user", userRouter);

app.use("/api/account", accountRouter);

app.use("/api/card", cardRouter);

const port = process.env.PORT || 8081;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
