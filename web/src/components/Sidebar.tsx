import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Logo from "./Logo";

const Sidebar = () => {
  return (
    <Box as="aside" w="320px" h="100vh">
      <Logo />
      <Box p={4}>
        <Text fontSize={"xl"}>Sidebar</Text>
      </Box>
    </Box>
  );
};

export default Sidebar;
