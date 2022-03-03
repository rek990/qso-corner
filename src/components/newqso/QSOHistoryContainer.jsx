import React from "react";
import QSOHistoryTableAPI from "./QSOHistoryTableAPI";
// import QSOHistoryTable from "./QSOHistoryTable";
import { VStack, Flex, Spacer, Heading } from "@chakra-ui/react";

const QSOHistoryContainer = (props) => {
  return (
    <Flex
      className="main-qso-history-container"
      direction="row"
      width="100%"
      justifyContent="center"
    >
      <VStack className="vstack-qso-history-container">
        <Spacer />
        <Flex
          className="qso-container-for-the-container-with-heading"
          width="50vw"
          height="5vh"
          borderRadius="15px"
          justifyContent="center"
          alignItems="center"
        >
          {" "}
          <Flex
            className="qso-history-container-with-heading"
            width="100%"
            height="5vh"
            bg="#356288"
            borderRadius="15px"
            justifyContent="center"
            alignItems="center"
          >
            <Heading size="lg" color="#AACFDD">
              QSOs with John Doe
            </Heading>
          </Flex>
        </Flex>
        <QSOHistoryTableAPI />
      </VStack>
    </Flex>
  );
};

export default QSOHistoryContainer;
