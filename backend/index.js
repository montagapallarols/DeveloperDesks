const express = require("express");
const cors = require("cors");

const deskRouter = require("./routers/desks");
const authRouter = require("./routers/auth");

const PORT = process.env.PORT || 4001;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/desks", deskRouter);
app.use("/auth", authRouter);

app.listen(PORT, () => console.log(`Running on port: ${PORT}`));
