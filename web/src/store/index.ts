import { createStore, createTypedHooks } from "easy-peasy";
import measurementsModel, { MeasurementsModel } from "./measurements.store";

type StoreModel = {
  measurements: MeasurementsModel;
};

const model: StoreModel = {
  measurements: measurementsModel,
};

const store = createStore<StoreModel>(model);
const typedHooks = createTypedHooks<StoreModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;

export default store;
