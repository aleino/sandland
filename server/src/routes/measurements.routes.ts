import { Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";

import measurementsValidation from "../validators/measurements.validator";
import controller from "../controllers/measurements.controller";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  const measurements = controller.findAll();
  res.json(measurements);
});

router.post("/", (req: Request, res: Response) => {
  res.status(StatusCodes.METHOD_NOT_ALLOWED).send("POST method is not allowed");
});

router.put("/", measurementsValidation, (req: Request, res: Response) => {
  const measurements = req.body;
  const updatedMeasurements = controller.replaceAll(measurements);
  res.status(StatusCodes.CREATED).json(updatedMeasurements);
});

router.delete("/", (req: Request, res: Response) => {
  const measurements = controller.clear();
  res.status(StatusCodes.NO_CONTENT).json(measurements);
});

export { router as measurementsRouter };
