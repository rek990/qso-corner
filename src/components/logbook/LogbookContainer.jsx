import React from "react";
// import LogbookTableAPI from "./LogbookTableAPI";
import LogbookTable from "./LogbookTable";
import { VStack, Flex, Spacer, Heading } from "@chakra-ui/react";

const LogbookContainer = (props) => {
  return (
    <Flex direction="row" width="100%">
      <VStack>
        <Flex
          width="30vw"
          height="7vh"
          bg="#356288"
          borderRadius="15px"
          justifyContent="center"
          alignItems="center"
        >
          <Heading size="lg" color="#AACFDD">
            QSO Corner
          </Heading>
        </Flex>
        <Spacer />
        <Flex>
          <LogbookTable />
        </Flex>
      </VStack>
    </Flex>
  );
};

export default LogbookContainer;

{
  /*<LogbookTableAPI />*/
}
