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
          {" "}
          <Flex
            width="30vw"
            height="7vh"
            bg="#356288"
            borderRadius="15px"
            justifyContent="center"
            alignItems="center"
          >
            <Heading size="lg" color="#AACFDD">
              Previous QSOs with John Doe
            </Heading>
          </Flex>
        </Flex>
        <QSOHistoryTable />
      </VStack>
    </Flex>
  );
};

export default QSOHistoryContainer;
