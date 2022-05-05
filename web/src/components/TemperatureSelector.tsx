import React from "react";
import { Box, Select, FormLabel } from "@chakra-ui/react";

import { useStoreActions } from "../store";
import { TemperatureUnit } from "../types";

const TemperatureSelector = () => {
  const setTemperatureUnit = useStoreActions(
    (actions) => actions.userPreferences.setTemperatureUnit
  );
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTemperatureUnit(event.target.value as TemperatureUnit);
  };
  const units = Object.values(TemperatureUnit);
  return (
    <Box mt={4}>
      <FormLabel fontSize={"sm"}>Temperature unit</FormLabel>
      <Select onChange={(e) => handleChange(e)}>
        {units.map((unit) => (
          <option value={unit} key={unit}>
            {unit}
          </option>
        ))}
      </Select>
    </Box>
  );
};

export default TemperatureSelector;
