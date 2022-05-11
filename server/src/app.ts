import express, { Application, Request, Response, json } from "express";
import dotenv from "dotenv";
import cors from "cors";

import router from "./routes";

dotenv.config();

const app: Application = express();

app.use(cors());
app.disable("x-powered-by");
app.use(json());

app.get("/", (req: Request, res: Response) => {
  res.send("ok");
});

app.use("/", router);

export default app;
