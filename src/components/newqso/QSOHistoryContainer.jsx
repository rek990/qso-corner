import React from "react";
// import QSOHistoryTableAPI from "./QSOHistoryTableAPI";
import QSOHistoryTable from "./QSOHistoryTable";
import { VStack, Flex, Spacer, Heading } from "@chakra-ui/react";

const QSOHistoryContainer = (props) => {
  return (
    <Flex direction="row" width="100%">
      <VStack>
        <Spacer />
        <Flex
          width="30vw"
          height="7vh"
          borderRadius="15px"
          justifyContent="center"
          alignItems="center"
        >
          <Heading size="lg" color="#356288">
            Previous QSOs with John Doe
          </Heading>
        </Flex>
        <QSOHistoryTable />
      </VStack>
    </Flex>
  );
};

export default QSOHistoryContainer;
