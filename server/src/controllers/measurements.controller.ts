import db from "../db";
import { Measurement } from "../../../lib/shared/types";

const findAll = () => db.measurements;

const replaceAll = (measurements: Measurement[]) => {
  db.measurements = measurements;
  return db.measurements;
};

const clear = () => {
  db.measurements = [];
  return db.measurements;
};

export default {
  findAll,
  replaceAll,
  clear,
};
