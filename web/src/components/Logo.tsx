import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Flex
      h="64px"
      w="100%"
      bg="blue.200"
      alignItems="center"
      justifyContent="center"
    >
      <Text
        // fontSize="xs"
        // fontFamily="monospace"
        fontWeight={600}
        color="white"
        textAlign="center"
        textTransform="uppercase"
        letterSpacing={2}
      >
        Sandland
      </Text>
    </Flex>
  );
};

export default Logo;
