import React from "react";
import { FormLabel } from "@chakra-ui/react";

type SidebarLabelType = {
  children: React.ReactNode;
};

const SidebarLabel = ({ children }: SidebarLabelType) => {
  return (
    <>
      <FormLabel fontSize={"sm"} mb={4} mt={2} color="gray.600">
        {children}
      </FormLabel>
    </>
  );
};

export default SidebarLabel;
