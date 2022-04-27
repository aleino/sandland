import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Flex>
      <Sidebar />
      <Box as="main" flex={1} bg="gray.50">
        {children}
      </Box>
    </Flex>
  );
};

export default MainLayout;
