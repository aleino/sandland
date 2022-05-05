import { action, Action, thunk, Thunk } from "easy-peasy";
import { Measurement } from "../../../lib/shared/types";
import API from "../api";

export type MeasurementsModel = {
  data: Measurement[];
  replaceAll: Action<MeasurementsModel, Measurement[]>;
  fetchAll: Thunk<MeasurementsModel>;
};

const measurementsModel: MeasurementsModel = {
  data: [],
  replaceAll: action((state, payload) => {
    state.data = payload;
  }),
  fetchAll: thunk(async (actions) => {
    const response = await API.measurements.fetchAll();
    actions.replaceAll(response);
  }),
};

export default measurementsModel;
