import { Measurement } from "../../lib/shared/types";

export type DB = {
  measurements: Measurement[];
};

const db = {
  measurements: [] as Measurement[],
};

export default db;
