import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app: Application = express();

app.use(cors());
app.disable("x-powered-by");

app.get("/", (req: Request, res: Response) => {
  res.send("ok");
});

export default app;
