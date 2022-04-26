import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
  return (
    <Flex>
      <Sidebar />
      <Box as="main" flex={1} bg="tomato">
        <h1>Main Content</h1>
      </Box>
    </Flex>
  );
};

export default MainLayout;
