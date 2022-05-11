// import store from "../store";
import { Measurement } from "../../../lib/shared/types";
import { TemperatureUnit } from "../types";
import { celsiusToFahrenheit } from "./index";

export const getMeasurementsWithUserPreferences = (
  measurements: Measurement[],
  temperatureUnit: TemperatureUnit
) => {
  if (temperatureUnit === TemperatureUnit.Fahrenheit) {
    return measurements.map((m) => ({
      ...m,
      temperature: m.temperature
        ? celsiusToFahrenheit(m.temperature)
        : m.temperature,
    }));
  }
  return measurements;
};
