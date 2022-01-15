import React from "react";
import LogbookTableAPI from "./LogbookTableAPI";
import { VStack, Flex, Spacer, Heading } from "@chakra-ui/react";

const LogbookContainer = (props) => {
  return (
    <Flex direction="row" width="100%">
      <VStack>
        <Flex
          width="75vw"
          height="7vh"
          bg="#356288"
          borderRadius="15px"
          justifyContent="center"
          alignItems="center"
          marginTop="20vh"
        >
          <Heading size="lg" color="#AACFDD">
            QSO Corner
          </Heading>
        </Flex>
        <Spacer />
        <LogbookTableAPI />
      </VStack>
    </Flex>
  );
};

export default LogbookContainer;
