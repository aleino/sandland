import React from "react";
import { Box, Text } from "@chakra-ui/react";

import Logo from "./Logo";
import UploadButton from "./UploadButton";
import TemperatureSelector from "./TemperatureSelector";
import SidebarLabel from "./ui/SidebarLabel";

const Sidebar = () => {
  return (
    <Box as="aside" w="320px" h="100vh">
      <Logo />
      <Box p={4}>
        <Text fontSize={"xl"}>Sidebar</Text>
        <SidebarLabel>Select temperature unit</SidebarLabel>
        <TemperatureSelector />
        <SidebarLabel>Upload your own data</SidebarLabel>
        <UploadButton />
      </Box>
    </Box>
  );
};

export default Sidebar;
