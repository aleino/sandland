import { action, Action, thunk, Thunk } from "easy-peasy";
import { Measurement } from "../../../lib/shared/types";
import API from "../api";

export type MeasurementsModel = {
  data: Measurement[];
  uploadError: string | null;
  setUploadError: Action<MeasurementsModel, string | null>;
  replaceAll: Action<MeasurementsModel, Measurement[]>;
  fetchAll: Thunk<MeasurementsModel>;
  uploadCollection: Thunk<MeasurementsModel, Measurement[]>;
};

const measurementsModel: MeasurementsModel = {
  data: [],
  uploadError: null,
  setUploadError: action((state, payload) => {
    state.uploadError = payload;
  }),
  replaceAll: action((state, payload) => {
    state.data = payload;
  }),
  fetchAll: thunk(async (actions) => {
    const response = await API.measurements.fetchAll();
    actions.replaceAll(response);
  }),
  uploadCollection: thunk(async (actions, payload) => {
    try {
      const response = await API.measurements.uploadCollection(payload);
      actions.replaceAll(response);
      actions.setUploadError(null);
    } catch (error) {
      actions.setUploadError("Upload error");
    }
  }),
};

export default measurementsModel;
