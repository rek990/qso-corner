import React from "react";
import { Grid, GridItem, Heading, Flex, Spacer, VStack } from "@chakra-ui/react";
import LogQSOContainer from "./LogQSOContainer";
import QSOHistoryContainer from "./QSOHistoryContainer";
import QRZAPIContainer from "./QRZAPIContainer";

const NewQSOContainer = () => {
  return (
    <>
      <Grid
        className="new-qso-container-grid"
        position="absolute"
        templateRows="repeat(2)"
        templateColumns="repeat(3, 1fr)"
        gap={10}
        height="75%"
        width="90vw"
      >
        <GridItem id="log-new-qso" bg="#AACFDD" height="380px" width="775px" padding="1% 5%">
          <VStack>
            <Flex
              className="02-flex"
              width="30vw"
              height="5vh"
              bg="#356288"
              borderRadius="15px"
              justifyContent="center"
              alignItems="center"
            >
              <Heading size="lg" color="#AACFDD">
                Log New QSO
              </Heading>
            </Flex>
            <br />
            <LogQSOContainer />
          </VStack>
        </GridItem>
        <GridItem id="qrz-api-info" bg="#AACFDD" width="443px" height="380px">
          <QRZAPIContainer />
        </GridItem>
        <GridItem id="qso-contact-history-table" bg="#AACFDD" colSpan={2} height="450px">
          <QSOHistoryContainer />
        </GridItem>
      </Grid>
    </>
  );
};

export default NewQSOContainer;
