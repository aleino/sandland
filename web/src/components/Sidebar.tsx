import React from "react";
import { Box, Text } from "@chakra-ui/react";

import Logo from "./Logo";
import UploadButton from "./UploadButton";
import TemperatureSelector from "./TemperatureSelector";

const Sidebar = () => {
  return (
    <Box as="aside" w="320px" h="100vh">
      <Logo />
      <Box p={4}>
        <Text fontSize={"xl"}>Sidebar</Text>
        <TemperatureSelector />
        <UploadButton />
      </Box>
    </Box>
  );
};

export default Sidebar;
