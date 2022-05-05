import { action, Action } from "easy-peasy";
import { TemperatureUnit } from "../types";

export type UserPreferencesModel = {
  temperatureUnit: TemperatureUnit;
  setTemperatureUnit: Action<UserPreferencesModel, TemperatureUnit>;
};

const userPreferencesModel: UserPreferencesModel = {
  temperatureUnit: TemperatureUnit.Celsius,
  setTemperatureUnit: action((state, payload) => {
    state.temperatureUnit = payload;
  }),
};

export default userPreferencesModel;
