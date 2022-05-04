import { Router } from "express";
import { measurementsRouter } from "./measurements.routes";

const router = Router();

router.use("/measurements/", measurementsRouter);

export default router;
