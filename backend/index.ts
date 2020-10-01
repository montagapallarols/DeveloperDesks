import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import { DeveloperModel } from "./models/types";
const app = express();
const Developer: DeveloperModel = require("./models").developer;

app.use(cors());

app.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const devs = await Developer.findAll();
    res.json(devs);
  } catch (e) {
    next(e);
  }
});

app.listen(8000, () => {
  console.log("Server Started at Port, 8000");
});
